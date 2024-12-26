import cv2
import os
from flask import Flask, jsonify
from PIL import Image, ImageEnhance
from licensePlateDetection.Ocr.Ocr import ocr_detection

# Initialize Flask app
app = Flask(__name__)

# Haar Cascade XML file for crop detection (replace with your specific file)
haar_cascade_path = "model/haarcascade_russian_plate_number.xml"
crop_cascade = cv2.CascadeClassifier(haar_cascade_path)

# Directory to save detected crops
save_dir = "plates"
os.makedirs(save_dir, exist_ok=True)

@app.route('/start_detection', methods=['GET'])
def start_detection():
    cap = cv2.VideoCapture(1)  # Open webcam
    cap.set(3, 640) # width
    cap.set(4, 480) #height
    if not cap.isOpened():
        return jsonify({"error": "Unable to access the camera"}), 500

    crop_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame.")
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        crops = crop_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in crops:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
            # img_roi = frame[y:y + h, x:x + w]
        
        cv2.imshow("Crop Detection", frame)

        # Press 'Q' to save detected crops and quit
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            # for i, (x, y, w, h) in enumerate(crops):
            crop_img = frame[y:y + h, x:x + w]
            # crop_img = img_roi
            crop_path = os.path.join(save_dir, f"crop_{crop_count}_{'0'}.jpg")
            cv2.imwrite(crop_path, crop_img)
            print(f"Saved: {crop_path}")
            break
    result_image_path = "plates/crop_0_0.jpg"
    cropped_image = Image.open(result_image_path)
    cropped_image = cropped_image.resize((720, 360))
    enhancer = ImageEnhance.Sharpness(cropped_image)
    cropped_image = enhancer.enhance(2.0)
    enhancer = ImageEnhance.Contrast(cropped_image)
    cropped_image = enhancer.enhance(1.5)
   
    print("extracting text")
    text = ocr_detection().extracting_text(cropped_image)
    print(text)
    os.remove("plates/crop_0_0.jpg")
    


    return jsonify({"message": "Detection ended and crops saved."})

if __name__ == '__main__':
    app.run(debug=True)
    cap.release()
    cv2.destroyAllWindows()
