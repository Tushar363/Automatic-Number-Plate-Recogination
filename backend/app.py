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
from licensePlateDetection.Api.Api import Api_req
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
        os.environ["GOOGLE_API_KEY"] = 'AIzaSyDVzPRFcXz_Oa-SpG-x4Q62tJREKxyUnJ8'
        genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
        model = genai.GenerativeModel(
          model_name='gemini-1.5-pro-latest')
        prompt = "Extract license plate number from this image."
        ocr_result = model.generate_content([prompt, cropped_image])
        list = ocr_result.text.split(" ")
        print(ocr_result.text, list)
        pattern = r'^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$'

        # Checking pattern of license plate using regex
        if len(list)<2:
            print("here",list[0])
            if "." in list[0]:
                # index = text.index('.')
                list[0] = list[0].replace(".","")
                if re.match(pattern, list[0]):
                    print(list[0])
                    text = list[0]
            else:
                if re.match(pattern, list[0]):
                    print(list[0])
                    text = list[0]
        elif len(list)==3:
            
            ls = list[0]+list[1]+list[2]
            print("here",ls)
            if "." in ls:
                # index = text.index('.')
                ls = ls.replace(".","")
                if re.match(pattern, ls):
                    print(ls)
                    text = ls
            else:
                if re.match(pattern, ls):
                    print(ls)
                    text = ls
        elif(len(list)>=4):
            ls = ""
            for i in range(len(list)):
                ls += list[i]
            print("here",ls)
            if "." in ls:
                ls = ls.replace(".","")
                if re.match(pattern, ls):
                    print(ls)
                    text = ls
            else:
                if re.match(pattern, ls):
                    print(ls)
                    text = ls
                    

        # list = list[:-1]
        
        # text = "".join(list[6:7])
        # else:
        #     text_if = "".join(list[5:8])
        #     text_if = text_if.replace(".","")
        #     text_else = "".join(list[5:9])
        #     text_else = text_else.replace(".","")
        #     print(text_if)    
        #     if re.match(pattern,text_if):
        #         # print(text)
        #         text = text_if
            
        #     elif (re.match(pattern,text_else)):
        #         text = text_else
                
                
        #     else:
        #         for i in range(len(list)):

        #             if "." in list[i]:
        #                 # index = text.index('.')
        #                 list[i] = list[i].replace(".","")
        #                 if re.match(pattern, list[i]):
        #                     print(list[i])
        #                     text = list[i]
        #                     break
                        
        #             else:
        #                 pass

        print(text)
        
        # Dealing with crop image
        opencodedbase64 = encodeImageIntoBase64(
            "yolov5/runs/detect/exp/crop.jpg")
        result = {"image": opencodedbase64.decode('utf-8')}
        # os.remove("yolov5/runs")
        shutil.rmtree("yolov5/runs")

        #  fetching data from api And Database

        dbS = ANPD_DB("ANPD","anpr_data")
        vechile_data  = dbS.get_vehicle_by_registration_number(text)

        if vechile_data:
            print(f"{text} number plate exist in database")
            reg_data = json.loads(json_util.dumps(vechile_data))
            response = {
            "processed_image": result,
            "reg_data":reg_data
            }
            print("data is dispalyed please check")
            return jsonify(response)

        else:
            print("fetching data by api as it is not present in database")

            res_data = Api_req().fetchApi(text)
        # Data Inserted to Database
            with open('data.json', 'w') as json_file:
                json.dump(res_data,json_file,indent=4)
            
        
        
            dbS.insert_data("data.json")
            os.remove("data.json")
            a = dbS.get_vehicle_by_registration_number(text)
            reg_data = json.loads(json_util.dumps(a))
        

            print("connected")
            # print(text)
            
            print(reg_data)
            response = {
                "processed_image": result,
                "reg_data":reg_data
            }

            return jsonify(response)
    except ValueError as val:
        print(val)
        return Response("Value not found inside  json data")
    except KeyError:
        return Response("Key value error incorrect key passed")
    except Exception as e:
        shutil.rmtree("yolov5/runs")
        print(e)
        result = "Invalid input"

   



@app.route("/text", methods=['POST'])
@cross_origin()
def predictText():
    try:

        # CHECK IN DATABASE IS GIVEN PLATE EXSIST IF YES THEN WE RETURN DETAIL DIRECTLY FROM DATA BASE 
        # ELSE FIRST WE GET DATA AND THEN STORE IN DATABASE THEN GET IT
        data = request.get_json()
        license_plate = data.get("text")
        print(license_plate)
        # license_plate = "HP58A0315"
        dbS = ANPD_DB("ANPD","anpr_data")
        vechile_data  = dbS.get_vehicle_by_registration_number(license_plate)
        if vechile_data:
            print(vechile_data)
            reg_data = json.loads(json_util.dumps(vechile_data))
            response = {
                "reg_data":reg_data
            }
            print(response)
            return jsonify(response)

        else:
            print("fetching from api")

            res_data = Api_req().fetchApi(license_plate)
            with open('data.json', 'w') as json_file:
                json.dump(res_data,json_file,indent=4)
            
            dbS.insert_data("data.json")
            os.remove("data.json")
            vechile_data  = dbS.get_vehicle_by_registration_number(license_plate)
            reg_data = json.loads(json_util.dumps(vechile_data))
            response = {
                "reg_data":reg_data
            }
            print(response)
            return jsonify(response)


    except ValueError as val:
        print(val)
        return Response("Value not found inside  json data")
    



if __name__ == "__main__":
    clApp = ClientApp()
    app.run(host=APP_HOST, port=8000)