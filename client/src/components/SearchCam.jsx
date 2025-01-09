// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/image.png";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import { toast } from "sonner";
// import { useAuth } from "../contexts/AuthContext";

// function SearchCam() {
//   const [data, setData] = useState([]);
//   const [processedImage, setProcessedImage] = useState("");
//   const [licensePlate, setLicensePlate] = useState("");
//   // const videoRef = useRef(null);

//   // const startCamera = async () => {
//   //   try {
//   //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//   //     if (videoRef.current) {
//   //       videoRef.current.srcObject = stream;
//   //       videoRef.current.play();
//   //     }
//   //   } catch (error) {
//   //     console.error("Error accessing camera: ", error);
//   //     toast.error("Unable to access the camera.");
//   //   }
//   // };

//   const handleLiveDetection = async () => {
//     try {
//       toast.success("Processing live feed to extract license plate...");
//       const response = await axios.get("http://127.0.0.1:8000/live", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.data && response.data.reg_data) {
//         setData(response.data.reg_data);
//         setProcessedImage(`data:image/jpeg;base64,${response.data.processed_image["image"]}`);
//         setLicensePlate(response.data.reg_data.registration_number);

//         // Unhide the data
//         const details = document.getElementById("details");
//         details.classList.remove("hidden");
//       } else {
//         toast.error("No data found for the detected license plate.");
//       }
//     } catch (error) {
//       console.error("Error processing live feed: ", error);
//       toast.error("Live feed processing failed.");
//     }
//   };

//   const { user } = useAuth0();
//   const { currentUser } = useAuth();
//   const { isAuthenticated } = useAuth0();
//   const { userLoggedIn } = useAuth();

//   return (
//     <div>
//       <div className="flex justify-around items-center">
//         <div className="flex items-center flex-shrink-0">
//           <NavLink to="/">
//             <img src={logo} alt="logo" className="lg:w-16 w-12" />
//           </NavLink>
//         </div>
//         <h1 className="font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text lg:text-4xl md:text-2xl">
//           Detect with AI & YOLO
//         </h1>
//         {isAuthenticated && (
//           <h1 className="text-red-500 tracking-widest lg:text-2xl">{user.name}</h1>
//         )}
//         {userLoggedIn && (
//           <h1 className="text-red-500 tracking-widest lg:text-2xl">
//             {currentUser.email}
//           </h1>
//         )}
//       </div>

//       <div className="relative mt-10 border-b border-neutral-800 min-h-[600px] justify-evenly">

//         <div className="min-h-[30rem] lg:w-[77rem] h-fit border rounded-md shadow-orange-400 overflow-auto flex flex-col items-center content-center">
//           <p className="text-sm m-2 text-center">
//             Detecting objects with AI and YOLO (You Only Look Once) in real-time.
//             Use the live feed to detect license plates and see the detection results.
//           </p>
//           <h1 className="text-center mt-2 text-pretty text-orange-600">Data from API will appear here:</h1>

//           <div className="grid lg:grid-cols-2">
//           {licensePlate && (
//             <div className="m-4 grid place-items-center">
//               <h3>Detected License Plate</h3>
//               <p className="text-xl text-orange-600">{licensePlate}</p>
//             </div>
//           )}

//             {processedImage && (
//               <div className='m-4 grid place-items-center'>
//               <h3 className="mb-2">Processed License Plate</h3>
//               {/* {console.log(processedImage)} */}
//               <img src={processedImage} alt="Processed" style={{ width: 200, height: "auto" }} />
//               </div>
//                 )}
//             </div>

//             <p id="info" className="text-pretty text-orange-600">

//             <ul id='details' className='m-5 p-5 w-fit border-2 border-white rounded-xl hidden'>
//               {console.log(data)}
//               <li><span className='text-white'>Owner Name: </span>{data.owner_name}</li>
//               <li><span className='text-white'>Fuel Type: </span>{data.fuel_type}</li>
//               <li><span className='text-white'>Model: </span>{data.model}</li>
//               <li><span className='text-white'>Ownership: </span>{data.ownership}</li>
//               <li><span className='text-white'>registration_authority: </span>{data.registration_authority}</li>
//               <li><span className='text-white'>registration_date: </span>{data.registration_date}</li>
//               <li><span className='text-white'>registration_number: </span>{data.registration_number}</li>
//             </ul>

//           </p>
//         </div>
//         <div className="text-xl text-orange-500 flex flex-col justify-center items-center">

//             {/* space for video feed
//             <video
//               ref={videoRef}
//               className="mb-5 w-[280px] h-[200px] border"
//               autoPlay
//             ></video> */}
//             {/* <button
//               onClick={startCamera}
//               className="border-4 text-white border-orange-500 mt-5 p-1 rounded-lg hover:border-red-700 hover:text-orange-500 mb-5"
//             >
//               Start Camera
//             </button> */}

//             <button
//               onClick={handleLiveDetection}
//               className="border-4 text-white border-orange-500 mt-5 p-1 rounded-lg hover:border-red-700 hover:text-orange-500 mb-5"
//             >
//               Detect License Plate
//             </button>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default SearchCam;





import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";
import { toast } from "sonner";

function SearchCam() {
  const [data, setData] = useState(null);
  const [processedImage, setProcessedImage] = useState("");
  const [licensePlate, setLicensePlate] = useState("");

  const handleLiveDetection = () => {
    toast.success("processing...");
    const eventSource = new EventSource("http://127.0.0.1:8000/live");

    eventSource.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response) {

        setData(response.reg_data);
        setProcessedImage(response.processed_image);
        setLicensePlate(response.license_plate);
        toast.success("License plate detected successfully!");
      } else {
        toast.error("No data found for the detected license plate.");
      }
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
      toast.error("Failed to process live feed.");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  };

  return (
    <div>
      <div className="flex justify-around items-center">
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/">
            <img src={logo} alt="logo" className="lg:w-16 w-12" />
          </NavLink>
        </div>
        <h1 className="font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text lg:text-4xl md:text-2xl">
          Detect with AI & YOLO
        </h1>
      </div>

      <div className="relative mt-10 border-b border-neutral-800 min-h-[600px] justify-evenly">
        <div className="min-h-[30rem] lg:w-[77rem] h-fit border rounded-md shadow-orange-400 overflow-auto flex flex-col items-center content-center">
          <h1 className="text-center mt-2 text-pretty text-orange-600">Data from API will appear here:</h1>
          <div className="grid lg:grid-cols-2">
            {licensePlate && (
              <div className="m-4 grid place-items-center">
                <h3>Detected License Plate</h3>
                <p className="text-xl text-orange-600">{licensePlate}</p>
              </div>
            )}

            {processedImage && (
              <div className="m-4 grid place-items-center">
                <h3 className="mb-2">Processed License Plate</h3>
                <img src={`data:image/jpeg;base64,${processedImage}`} alt="Processed" style={{ width: 200, height: "auto" }} />
              </div>
            )}
          </div>

          {data && (
            <ul id="details" className="m-5 p-5 w-fit border-2 border-white rounded-xl">
              <li><span className="text-white">Owner Name: </span>{data.owner_name}</li>
              <li><span className="text-white">Fuel Type: </span>{data.fuel_type}</li>
              <li><span className="text-white">Model: </span>{data.model}</li>
              <li><span className="text-white">Ownership: </span>{data.ownership}</li>
              <li><span className="text-white">Registration Authority: </span>{data.registration_authority}</li>
              <li><span className="text-white">Registration Date: </span>{data.registration_date}</li>
              <li><span className="text-white">Registration Number: </span>{data.registration_number}</li>
            </ul>
          )}
        </div>

        <div className="text-xl text-orange-500 flex flex-col justify-center items-center">
          <button
            onClick={handleLiveDetection}
            className="border-4 text-white border-orange-500 mt-5 p-1 rounded-lg hover:border-red-700 hover:text-orange-500 mb-5"
          >
            Detect License Plate
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchCam;
