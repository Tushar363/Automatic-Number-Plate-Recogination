from licensePlateDetection.pipeline.training_pipeline import TrainPipeline
import sys,os
from licensePlateDetection.pipeline.training_pipeline import TrainPipeline
from licensePlateDetection.utils.main_utils import decodeImage, encodeImageIntoBase64
from flask import Flask, request, jsonify, render_template,Response
from flask_cors import CORS, cross_origin
from licensePlateDetection.constant.application import APP_HOST, APP_PORT
import shutil
import google.generativeai as genai
import numpy as np
from PIL import Image,ImageEnhance
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


@app.route("/")
def home():
    return render_template("index.html")



@app.route("/predict", methods=['POST','GET'])
@cross_origin()

def predictRoute():
    try:
        image = request.json['image']
        
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
            cropped_image=cropped_image.resize((720,360))
            
            enhancer = ImageEnhance.Sharpness(cropped_image)
            cropped_image = enhancer.enhance(2.0) 
            
            enhancer = ImageEnhance.Contrast(cropped_image)
            cropped_image = enhancer.enhance(1.5) 
            # Save the cropped image (you can customize the save path)
            cropped_image_path = f"yolov5/runs/detect/exp/crop.jpg"
            cropped_image.save(cropped_image_path)
            
        # OCR part 
        os.environ["GOOGLE_API_KEY"] = 'AIzaSyCwZCOAOQjGf-IkhtTl6-QPAX_X0Qo0K1U'
        genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
        model = genai.GenerativeModel(model_name='gemini-1.5-pro', tools="code_execution")
        prompt = "Extract text from this image."
        ocr_result = model.generate_content([prompt, cropped_image])
        list = ocr_result.text[:-3].split(" ")
        print(ocr_result.text)
        text = "".join(list[6:])
        print(text)
        
        opencodedbase64 = encodeImageIntoBase64("yolov5/runs/detect/exp/crop.jpg")
        print(opencodedbase64)
        # result = {"image": opencodedbase64.decode('utf-8')}
        # opencodedbase64 = encodeImageIntoBase64(result_image_path)
        result = {"image": opencodedbase64.decode('utf-8')}
        # os.remove("yolov5/runs")
        shutil.rmtree("yolov5/runs")

    except ValueError as val:
        print(val)
        return Response("Value not found inside  json data")
    except KeyError:
        return Response("Key value error incorrect key passed")
    except Exception as e:
        print(e)
        result = "Invalid input"

    return jsonify(result)



@app.route("/live", methods=['GET'])
@cross_origin()
def predictLive():
    try:
        os.system("cd yolov5/ && python detect.py --weights my_model.pt --img 416 --conf 0.5 --source 0")
        os.remove("yolov5/runs")
        return "Camera starting!!" 

    except ValueError as val:
        print(val)
        return Response("Value not found inside  json data")
    



if __name__ == "__main__":
    clApp = ClientApp()
    app.run(host=APP_HOST, port=APP_PORT)