// import About from "./components/About"
// import Contact from "./components/Contact"
// import FeaturesSection from "./components/FeaturesSection"
// import Footer from "./components/Footer"
// import HomePage from "./components/HomePage"
// import NavBar from "./components/NavBar"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Form from "./components/Form"
// import LoginAuthenticator from "./components/loginAuthenticator"
// import Search from "./components/Search"

// const App = () => {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:
//         <>
//          <LoginAuthenticator/>
//           {/* <NavBar /> */}
//          <div className="max-w-7xl mx-auto pt-5 px-6">
//           <HomePage />
//           <FeaturesSection />
//           <About />
//           <Contact />
//           <Footer/>
//          </div>
//         </>,
//         // errorElement: <><div>404 NOT FOUND</div></>
//     },
//     {
//       path: "/FeaturesSection",
//       element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><FeaturesSection/></div></>
//     },
//     {
//       path: "/About",
//       element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><About/></div></>
//     },
//     {
//       path: "/Contact",
//       element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><Contact/></div></>
//     },
//     {
//       path: "/Footer",
//       element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><Footer/></div></>
//     },
//     {
//       path: "/Register",
//       element: <><div className="max-w-7xl mx-auto pt-5 px-6"><Form/></div></>
//     },
//     {
//       path: "/Search",
//       element: <><div className="max-w-7xl mx-auto pt-5 px-6"><Search/></div></>
//     },
//   ])

//   return (
//     <>
//     {/* <NavBar />
//     <div className="max-w-7xl mx-auto pt-5 px-6">
//       <HomePage />
//       <FeaturesSection />
//       <About />
//       <Contact />
//       <Footer/>
//     </div> */}
//     <RouterProvider router = {router}/>
//     </>
//   )
// }

// export default App