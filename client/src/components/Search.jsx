/*
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image.png';
import { useAuth0 } from '@auth0/auth0-react';

const Search = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const [data, setData] = useState([]);
  const onClickHandler = ()=>{
    // const show = document.getElementById('info');
    // show.classList.toggle('hidden');

    fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => setData(data))
       .catch(error => console.error('Error:', error));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', e.target.image.files[0]);

    const text = new text();
    text.append('#info');

    // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   .then(response => response.json())
    //   ;

    //   if (!response.ok) {
    //     throw new Error('Failed to upload image');
    //   }

    //   // Handle the response from the API if needed
    //   // For example, you can set the uploaded image URL or display a success message
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const {user} = useAuth0();

  return (
    <div className='text-center'>
      <div className="flex justify-around items-center">
        <div className="flex items-center flex-shrink-0">
          <NavLink to = "/"><img src={logo}  alt="logo" className="w-16"></img></NavLink>
        </div>
        <h1 className='font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl'>Detect with AI & YOLO</h1>
        <h1>{user.name}</h1>
      </div>

    <div className="relative mt-10 border-b border-neutral-800 min-h-[630px] grid lg:grid-cols-2 justify-evenly">
      <div className="h-[35rem] w-[35rem] border text-center grid place-items-center mb-10">
        <div className="text-3xl text-orange-500 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="block w-full px-5 py-3 text-sm rounded-xl focus:outline-none mb-2 border focus-within:border-orange-500"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              name="image"
              required
            />
            <button onClick={onClickHandler} className="block w-fit px-4 py-2 text-sm text-white bg-orange-500 rounded-xl hover:bg-orange-600 focus:outline-none">
              Upload Image
            </button>
          </form>
          {loading && <p>Uploading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {image && <img src={image} alt="Uploaded" style={{ marginTop: '20px', maxWidth: '50%' }} />}
        </div>
      </div>


      <div className="h-[35rem] w-[35rem] border overflow-auto lg:ml-14">
        <p className='text-sm m-2'>
          Detecting objects with AI and YOLO (You Only Look Once) in real-time. Upload an image to see the detection results.
          <br />
          Note: This is a demo and the accuracy may vary depending on the image and the YOLO model used.
        </p>

        <p id="info" className='text-pretty text-orange-600'>

        <h1>Data from API will appear here: </h1>
        <ul>
            {data.map(item =>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>

        </p>
      </div>
    </div>
    </div>
  );
};

export default Search;
*/




import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image.png';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

function Search() {
    const [image, setImage] = useState(null);
    const [processedImage, setProcessedImage] = useState("");
    const [data, setData] = useState([]);


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
        alert("Processing the Image to Extract data")
        
        try {
            const response = await axios.post("http://127.0.0.1:8000/predict", {
                image: image.split(",")[1] // Send only the base64 part after the comma,
            },
            {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            // Set the received base64 string as processed image
            // console.log(response.data.processed_image["image"]);
            console.log(response.data.reg_data);
            setProcessedImage(`data:image/jpeg;base64,${response.data.processed_image["image"]}`);
            // setProcessedImage(response.data.processed_image)
            setData(response.data.reg_data)

            // Unhide the data
            const details = document.getElementById("details");
            details.classList.remove("hidden");
            
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Image upload failed.");
        }
    };


    const {user} = useAuth0();

    return (
    
                <div className=''>
                        <div className="flex justify-around items-center">
                          <div className="flex items-center flex-shrink-0">
                            <NavLink to = "/"><img src={logo}  alt="logo" className="w-16"></img></NavLink>
                          </div>
                          <h1 className='font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text lg:text-4xl md:text-3xl'>Detect with AI & YOLO</h1>
                          <h1 className='text-red-500 tracking-widest text-2xl'>{user.name}</h1>
                        </div>

                       <div className="relative mt-10 border-b border-neutral-800 min-h-[630px] grid lg:grid-cols-2 justify-evenly">

                        <div className="min-h-[35rem] w-[35rem] h-fit border text-center mb-10 rounded-md shadow-orange-400">
                          <div className="text-xl text-orange-500 flex flex-col justify-center items-center">
                            
                          <h2 className='text-3xl mb-10 mt-5 text-red-500  p-1'>Image Uploader</h2>
                          <input type="file" className='mb-5 w-[280px] file:bg-gradient-to-r from-orange-700 to-red-800 file:rounded-md' onChange={handleImageChange} />
                          <div className='w-[20rem] h-[20rem] dark:bg-black-500 grid place-items-center'>
                          {image && (
                                <div>
                                    <h3 className='mb-2'>Original Image</h3>
                                    <img src={image} alt="Uploaded Preview" style={{ width: 200, height: "fit-content" }} />
                                </div>
                          )}
                          </div>
                          <button onClick={handleUpload} className='border-4 text-white border-orange-500 mt-5 p-1 rounded-lg hover:border-red-700 hover:text-orange-500 mb-5'>Upload Image</button>                                    
                          </div>
                        </div>


                        <div className="min-h-[35rem] w-[35rem] h-fit border rounded-md shadow-orange-400 overflow-auto lg:ml-14 flex flex-col content-center">
                          <p className='text-sm m-2 text-center'>
                            Detecting objects with AI and YOLO (You Only Look Once) in real-time. Upload an image to see the detection results.
                            <br />
                            Note: This is a demo and the accuracy may vary depending on the image and the YOLO model used.
                          </p>

                          {processedImage && (
                                <div className='m-4 grid place-items-center'>
                                    <h3>Processed Image</h3>
                                    {/* {console.log(processedImage)} */}
                                    <img src={processedImage} alt="Processed" style={{ width: 200, height: "auto" }} />
                                </div>
                          )}

                          <p id="info" className='text-pretty text-orange-600'>

                          <h1 className='text-center mt-2'>Data from API will appear here: </h1>

                          
                          <ul id='details' className='m-5 p-5 border-2 border-white rounded-xl hidden'>
                            {console.log(data)}
                            <li><span className='text-white'>Owner Name: </span>{data.owner_name}</li>
                            <li><span className='text-white'>Fuel Type: </span>{data.fuel_type}</li>
                            <li><span className='text-white'>Model: </span>{data.model}</li>
                            <li><span className='text-white'>Ownership: </span>{data.ownership}</li>
                            <li><span className='text-white'>registration_authority: </span>{data.registration_authority}</li>
                            <li><span className='text-white'>registration_date: </span>{data.registration_date}</li>
                            <li><span className='text-white'>registration_number: </span>{data.registration_number}</li>

                          </ul>

                          </p>
                        </div>
                        </div>
                  </div>
    );
}

export default Search;