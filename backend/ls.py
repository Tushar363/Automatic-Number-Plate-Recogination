import base64
import cv2  # Make sure OpenCV is installed (pip install opencv-python)
import google.generativeai as genai
from PIL import Image, ImageEnhance
genai.configure(api_key="AIzaSyDVzPRFcXz_Oa-SpG-x4Q62tJREKxyUnJ8")

model = genai.GenerativeModel(model_name='gemini-1.5-pro-latest')
image = Image.open("i10.jpg")
print(image)
# Load and encode the image
with open("i10.jpg", "rb") as image_file:  # Assuming the image is a JPG
    encoded_string = base64.b64encode(image_file.read()).decode("utf-8")

# prompt = f"""
# Use Python and the OpenCV library to extract the license plate number from the following base64 encoded image:
# ```{encoded_string}```
# Return only the extracted license plate string.
# """
# print(prompt)
try:
    prompt = "Extract license plate number from this image."
    print(
        "start...."
    )
    ocr_result = model.generate_content([image,prompt])
    print(f"Extracted License Plate: {ocr_result}")
    # model = genai.GenerativeModel(
    #        model_name="gemini-1.5-pro", tools="code_execution")
    # prompt = "Extract license plate number from this image."
    # ocr_result = model.generate_content([prompt, image])
    # print(ocr_result.text)
except Exception as e:
    print(f"Error: {e}")