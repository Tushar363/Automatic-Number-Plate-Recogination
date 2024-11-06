from licensePlateDetection.pipeline.training_pipeline import TrainPipeline
import sys
import os
from licensePlateDetection.pipeline.training_pipeline import TrainPipeline
from licensePlateDetection.utils.main_utils import decodeImage, encodeImageIntoBase64
from flask import Flask, request, jsonify, render_template, Response
from flask_cors import CORS, cross_origin
from licensePlateDetection.constant.application import APP_HOST, APP_PORT
import shutil
import re
import io,base64
import json
from bson import json_util
import requests
import google.generativeai as genai
import numpy as np
from PIL import Image, ImageEnhance
from licensePlateDetection.Database.database import ANPD_DB
app = Flask(__name__)
CORS(app)

class ClientApp:
    def __init__(self):
        self.filename = "inputImage.jpg"


@app.route("/train")
def trainRoute():
    obj = TrainPipeline()
    obj.run_pipeline()
    return "Training Successfull!!"

@app.route("/predict", methods=['POST', 'GET'])
@cross_origin()
def predictRoute():
    try:
        data = request.get_json()
        image = data.get("image")
        # image = request.json['image']

        decodeImage(image, clApp.filename)

        os.system("cd yolov5/ && python detect.py --weights best.pt --img 416 --conf 0.5 --source ../data/inputImage.jpg --save-txt --save-conf")
         # Assuming YOLOv5 saves the result image and bounding box coordinates
        result_image_path = "yolov5/runs/detect/exp/inputImage.jpg"

        bbox_path = "yolov5/runs/detect/exp/labels/inputImage.txt"

        # Load the image
        image = Image.open(result_image_path)

        # Read the bounding box coordinates
        with open(bbox_path, 'r') as f:
            lines = f.readlines()

        # os.remove("yolov5/runs/detect/exp/inputImage1.jpg")
        for line in lines:
            # Assuming YOLOv5 format: class x_center y_center width height (normalized values)
            parts = line.split()
            x_center, y_center, width, height = map(float, parts[1:5])

            # Convert from normalized coordinates to pixel values
            img_width, img_height = image.size
            x_center = x_center * img_width
            y_center = y_center * img_height
            width = width * img_width
            height = height * img_height

            # Calculate the bounding box coordinates
            x1 = int(x_center - width / 2)
            y1 = int(y_center - height / 2)
            x2 = int(x_center + width / 2)
            y2 = int(y_center + height / 2)

            # Crop the image using the bounding box coordinates
            cropped_image = image.crop((x1, y1, x2, y2))
            cropped_image = cropped_image.resize((720, 360))

            enhancer = ImageEnhance.Sharpness(cropped_image)
            cropped_image = enhancer.enhance(2.0)

            enhancer = ImageEnhance.Contrast(cropped_image)
            cropped_image = enhancer.enhance(1.5)
            # Save the cropped image (you can customize the save path)
            cropped_image_path = f"yolov5/runs/detect/exp/crop.jpg"
            cropped_image.save(cropped_image_path)

        # OCR part
        os.environ["GOOGLE_API_KEY"] = 'AIzaSyAVdqQGl_rPEbgTRiSnnuoYPts-AExsYGQ'
        genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
        model = genai.GenerativeModel(
            model_name='gemini-1.5-pro', tools="code_execution")
        prompt = "Extract license plate number from this image."
        ocr_result = model.generate_content([prompt, cropped_image])
        list = ocr_result.text.split(" ")
        # list = list[:-1]
        print(ocr_result.text, list)
        # text = "".join(list[6:7])
        pattern = r'^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$'
        text_if = "".join(list[5:8])
        text_if = text_if.replace(".","")
        text_else = "".join(list[5:9])
        text_else = text_else.replace(".","")
        print(text_if)    
        if re.match(pattern,text_if):
            # print(text)
            text = text_if
        
        elif (re.match(pattern,text_else)):
            text = text_else
            
            
        else:
            for i in range(len(list)):

                if "." in list[i]:
                    # index = text.index('.')
                    list[i] = list[i].replace(".","")
                    if re.match(pattern, list[i]):
                        print(list[i])
                        text = list[i]
                        break
                    
                else:
                    pass

        print(text)
        #  fetching data from api



        url = "https://rto-vehicle-information-india.p.rapidapi.com/getVehicleInfo"

        payload = {
            "vehicle_no": text,
            "consent": "Y",
            "consent_text": "I hereby give my consent for Eccentric Labs API to fetch my information"
        }
        headers = {
            "x-rapidapi-key": "8642f16e02mshe724b9f8d96bed2p1dad69jsn338fee3585ed",
            "x-rapidapi-host": "rto-vehicle-information-india.p.rapidapi.com",
            "Content-Type": "application/json"
        }

        response = requests.post(url, json=payload, headers=headers)

        print(response.json())
        # Data Inserte3d to Database
        with open('data.json', 'w') as json_file:
            json.dump(response.json(), json_file, indent=4)
            
        dbS = ANPD_DB("ANPD","anpr_data")
        
        dbS.insert_data("data.json")
        os.remove("data.json")
        
        opencodedbase64 = encodeImageIntoBase64(
            "yolov5/runs/detect/exp/crop.jpg")
        result = {"image": opencodedbase64.decode('utf-8')}
        # os.remove("yolov5/runs")
        shutil.rmtree("yolov5/runs")

        print("connected")
        # print(text)
        a = dbS.get_vehicle_by_registration_number(text)
        reg_data = json.loads(json_util.dumps(a))
        print(reg_data)
        response = {
            "processed_image": result,
            "reg_data":reg_data
         }
    except ValueError as val:
        print(val)
        return Response("Value not found inside  json data")
    except KeyError:
        return Response("Key value error incorrect key passed")
    except Exception as e:
        shutil.rmtree("yolov5/runs")
        print(e)
        result = "Invalid input"

    return jsonify(response)



@app.route("/live", methods=['GET'])
@cross_origin()
def predictLive():
    try:
        os.system("cd yolov5/ && python detect.py --weights best.pt --img 416 --conf 0.5 --source 0 --save-txt --save-conf")
        os.remove("yolov5/runs")
        return "Camera starting!!" 

    except ValueError as val:
        print(val)
        return Response("Value not found inside  json data")
    



if __name__ == "__main__":
    clApp = ClientApp()
    app.run(host=APP_HOST, port=8000)