import React, { useState } from "react";
import axios from "axios";

function ImageUploader() {
    const [image, setImage] = useState(null);
    const [processedImage, setProcessedImage] = useState("");

    // Convert image to base64 and update the state
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // base64 string of the uploaded image
            };
            reader.readAsDataURL(file);
        }
    };

    // Send base64 image string to Flask backend and receive processed image
    const handleUpload = async () => {
        if (!image) return;
        
        try {
            const response = await axios.post("http://127.0.0.1:8080/predict", {
                image: image.split(",")[1] // Send only the base64 part after the comma
            });
            // Set the received base64 string as processed image
            console.log(response.data.processed_image);
            
            setProcessedImage(`data:image/jpeg;base64,${response.data.processed_image}`);
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Image upload failed.");
        }
    };

    return (
        <div>
            <h2>Image Uploader</h2>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button>
            
            {image && (
                <div>
                    <h3>Original Image</h3>
                    <img src={image} alt="Uploaded Preview" style={{ width: 200, height: "auto" }} />
                </div>
            )}
            
            {processedImage && (
                <div>
                    <h3>Processed Image</h3>
                    {console.log(processedImage)}
                    <img src={processedImage} alt="Processed" style={{ width: 200, height: "auto" }} />
                </div>
            )}
        </div>
    );
}

export default ImageUploader;
