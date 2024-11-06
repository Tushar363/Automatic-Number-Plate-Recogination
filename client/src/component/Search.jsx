// const Search = () => {
//   return (
//     // <div className="relative mt-10 border-b border-neutral-800 min-h-[700px] flex justify-evenly">
//     //     <div className="h-96 w-96 border text-center grid place-items-center">
//     //         <div className="text-3xl text-orange-500 flex flex-col justify-center items-center">
//     //         <input className="block w-full px-5 py-3 text-sm rounded-xl focus:outline-none mb-2 border focus-within:border-orange-500" type="text" placeholder="Search Here....."/>
//     //         <button className="block w-fit px-4 py-2 text-sm text-white bg-orange-500 rounded-xl hover:bg-orange-600 focus:outline-none">Search</button>
//     //         </div>
//     //     </div>


//     //     <div className="h-96 w-96 border">
//     //       <p></p>
//     //       </div>

//     // </div>

//     <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//   <title>Web App</title>
//   <link
//     rel="stylesheet"
//     href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
//     crossOrigin="anonymous"
//   />
//   <style
//     dangerouslySetInnerHTML={{
//       __html:
//         '\n\n\t\t.iupload h3 {\n\t\t\tcolor: #1b2d6b;\n\t\t\tfont-size: 30px;\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\t.img-part-1 {\n\t\t\theight: 300px;\n\t\t\twidth: 300px;\n\t\t\tmargin: 0px auto;\n\t\t}\n\n\t\t.image-part {\n\t\t\theight: 300px;\n\t\t\twidth: 300px;\n\t\t\tborder: 1px solid #1b2d6b;\n\t\t}\n\n\t\t.image-part img {\n\t\t\t/* position: absolute; */\n\t\t\theight: 300px;\n\t\t\twidth: 300px;\n\t\t\tdisplay: none;\n\t\t\tpadding: 5px;\n\t\t}\n\n\t\t.image-part #video {\n\t\t\t/* display: block; */\n\t\t\theight: 300px;\n\t\t\twidth: 300px;\n\t\t\tpadding: 5px;\n\t\t}\n\n\t\t.res-part {\n\t\t\t/* margin-left: 20px; */\n\t\t\theight: 400px;\n\t\t\twidth: 100%;\n\t\t\tpadding: 5px;\n\t\t\tmargin: 0px auto;\n\t\t\toverflow: auto;\n\t\t}\n\n\t\t.upload-image {\n\t\t\t/* margin-left: 20px; */\n\t\t\theight: 400px;\n\t\t\twidth: auto;;\n\t\t\tpadding: 5px;\n\t\t\tmargin: 0px auto;\n\t\t\toverflow: auto;\n\t\t}\n\n\t\t.resp-img {\n\t\t\theight: 400px;\n\t\t\twidth: auto;\n\t\t\tmargin: 0px auto;\n\t\t}\n\n\t\t.jsonRes {\n\t\t\tmargin-left: 30px;\n\t\t}\n\n\t\t#send {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.btn-part {\n\t\t\twidth: 325px;\n\t\t}\n\n\t\ttextarea,\n\t\tselect,\n\t\t.form-control,\n\t\t.custom-select,\n\t\tbutton.btn,\n\t\t.btn-primary,\n\t\tinput[type="text"],\n\t\tinput[type="url"],\n\t\t.uneditable-input {\n\t\t\tborder: 1px solid #363e75;\n\t\t\toutline: 0 !important;\n\t\t\tborder-radius: 0px;\n\t\t\tbox-shadow: none;\n\t\t\t-webkit-box-shadow: none;\n\t\t\t-moz-box-shadow: none;\n\t\t\t-moz-transition: none;\n\t\t\t-webkit-transition: none;\n\t\t}\n\n\t\ttextarea:focus,\n\t\tselect:focus,\n\t\t.form-control:focus,\n\t\t.btn:focus,\n\t\t.btn-primary:focus,\n\t\t.custom-select:focus,\n\t\tinput[type="text"]:focus,\n\t\t.uneditable-input:focus {\n\t\t\tborder: 1px solid #007bff;\n\t\t\toutline: 0 !important;\n\t\t\tborder-radius: 0px;\n\t\t\tbox-shadow: none;\n\t\t\t-webkit-box-shadow: none;\n\t\t\t-moz-box-shadow: none;\n\t\t\t-moz-transition: none;\n\t\t\t-webkit-transition: none;\n\t\t}\n\n\t\t#loading {\n\t\t\tposition: fixed;\n\t\t\tleft: 0px;\n\t\t\ttop: 0px;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tz-index: 9999999999;\n\t\t\toverflow: hidden;\n\t\t\tbackground: rgba(255, 255, 255, 0.7);\n\t\t}\n\n\t\t.loader {\n\t\t\tborder: 8px solid #f3f3f3;\n\t\t\tborder-top: 8px solid #363e75;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 60px;\n\t\t\theight: 60px;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -4em;\n\t\t\tdisplay: block;\n\t\t\tanimation: spin 2s linear infinite;\n\t\t}\n\n\t\t.loader,\n\t\t.loader:after {\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tmargin-top: -4.05em;\n\t\t}\n\n\t\t@keyframes spin {\n\t\t\t0% {\n\t\t\t\ttransform: rotate(0deg);\n\t\t\t}\n\n\t\t\t100% {\n\t\t\t\ttransform: rotate(360deg);\n\t\t\t}\n\t\t}\n\n\t\t.logo {\n\t\t\tposition: absolute;\n\t\t\tright: 0px;\n\t\t\tbottom: 0px;\n\t\t\tmargin-right: 30px;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t'
//     }}
//   />
//   {/* <div class="main container">
// 		<section class="iupload">
// 			<h3 class="text-center py-4">Object Detection Using TFOD</h3>
// 			<div class="row">
// 				<div class="img-part col-md-6">
// 					<div class="image-part">
// 						<video autoplay id="video"
// 							poster="https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18824.jpg?size=338&ext=jpg"></video>
// 						<img src="" id="photo">
// 						<canvas style="display:none;" id="canvas"></canvas>
// 					</div>
// 				</div>
// 				<div class="col-md-6 col-xs-12 right-part">
// 					<h5 class="mb-2">
// 						Prediction Results
// 					</h5>
// 					<div class="row">
// 						<div class="res-part2 col-md-2 col-xs-12"></div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>

		
// 	</div> */}
//   {/* Header */}
//   <header className="bg-primary text-center py-5 mb-4">
//     <div className="container">
//       <h1 className="font-weight-light text-white">
//         Number Plate Detection using YOLOv5
//       </h1>
//     </div>
//   </header>
//   {/* Page Content */}
//   <div className="container">
//     <form className="input-group upload-data row">
//       <div className="col-xl-6 col-md-6 col-sm-6">
//         <button type="button" className="btn btn-primary col-12" id="uload">
//           Upload
//         </button>
//       </div>
//       <div className="col-xl-6 col-md-6 col-sm-6">
//         <button id="send" type="button" className="btn btn-success col-12">
//           Predict
//         </button>
//       </div>
//       {/* change url value  */}
//       <input
//         type="hidden"
//         className="form-control mr-2"
//         id="url"
//         placeholder="Enter REST Api url..."
//         defaultValue="../predict"
//       />
//       <input
//         name="upload"
//         type="file"
//         id="fileinput"
//         style={{ position: "absolute", top: "-500px", display: "none" }}
//       />
//       <br />
//     </form>
//     <div className="row">
//       {/* Team Member 1 */}
//       <div className="col-xl-6 col-md-6 col-sm-6 mb-6">
//         <div className="card border-0 shadow upload-image ">
//           {/* <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="..."> */}
//           <video
//             autoPlay=""
//             id="video"
//             poster="https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18824.jpg?size=338&ext=jpg"
//           />
//           <img src="" className="" id="photo" />
//           <canvas style={{ display: "none" }} id="canvas" />
//           {/* <div class="card-body text-center">
// 			<h5 class="card-title mb-0">Team Member</h5>
// 		  </div> */}
//         </div>
//       </div>
//       {/* Team Member 2 */}
//       <div className="col-xl-6 col-md-6 col-sm-6 mb-6">
//         <div className="card border-0 shadow res-part2">
//           <div className="card-body text-center">
//             <h5 className="card-title mb-0">Prediction Results</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* /.row */}
//   </div>
//   {/* /.container */}
//   <img
//     className="logo"
//     src="https://apparel.ineuronvision.com/static/logo.png"
//   />
//   {/* <div id="loading">
//     <div className="loader" />
//   </div> */}
// </>
//   )
// }

// export default Search







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
// import logo from '../assets/image.png';
// import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

function Search() {
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
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Image upload failed.");
        }
    };

    // const {user} = useAuth0();

    return (
    
                <div className='text-center bg-black'>
                        <div className="flex justify-around items-center">
                          <div className="flex items-center flex-shrink-0">
                            {/* <NavLink to = "/"><img src={logo}  alt="logo" className="w-16"></img></NavLink> */}
                          </div>
                          <h1 className='font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl'>Detect with AI & YOLO</h1>
                          {/* <h1>{user.name}</h1> */}
                        </div>

                       <div className="relative mt-10 border-b border-neutral-800 min-h-[630px] grid lg:grid-cols-2 justify-evenly">
                        <div className="h-[35rem] w-[35rem] border text-center grid place-items-center mb-10">
                          <div className="text-xl text-orange-500 flex flex-col justify-center items-center">
                            
                          <h2>Image Uploader</h2>
                          <input type="file" onChange={handleImageChange} />
                            
                          {image && (
                                <div>
                                    <h3>Original Image</h3>
                                    <img src={image} alt="Uploaded Preview" style={{ width: 200, height: "auto" }} />
                                </div>
                          )}
                          <button onClick={handleUpload} className='border-4 text-white border-orange-500 mt-5 p-1 rounded-lg hover:shadow-orange-500'>Upload Image</button>
                            

                          </div>
                        </div>


                        <div className="h-[35rem] w-[35rem] border overflow-auto lg:ml-14">
                          <p className='text-sm m-2'>
                            Detecting objects with AI and YOLO (You Only Look Once) in real-time. Upload an image to see the detection results.
                            <br />
                            Note: This is a demo and the accuracy may vary depending on the image and the YOLO model used.
                          </p>

                          <p id="info" className='text-pretty text-orange-600'>
                          {processedImage && (
                                <div>
                                    <h3>Processed Image</h3>
                                    {/* {console.log(processedImage)} */}
                                    <img src={processedImage} alt="Processed" style={{ width: 200, height: "auto" }} />
                                </div>
                          )}

                          <h1>Data from API will appear here: </h1>
                          <ul>
                              
                          </ul>

                          </p>
                        </div>
                        </div>
                  </div>
    );
}

export default Search;