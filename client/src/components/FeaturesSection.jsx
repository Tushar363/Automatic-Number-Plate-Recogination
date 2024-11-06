// import { GlobeLock } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[700px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-md font-medium px-2 py-1 uppercase">Features</span>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 px-2 py-4 border border-orange-500 mt-10 rounded">
          <div className="card hover:border border-white-400 hover:shadow-lg hover:shadow-cyan-500/50 rounded m-2 transition-all ease-in-out">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-5">Plate Detection</h1>
        <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Automatically detects and extracts license plate numbers from images or videos uploaded by users.</p>
          </div>
          <div className="card hover:border border-white-400 hover:shadow-lg hover:shadow-cyan-500/50 rounded m-2 transition-all ease-in-out">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-5">Character Recognition</h1>
          <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Uses Optical Character Recognition (OCR) technology to recognize and convert the detected plate characters into a readable format.</p>
          </div>
          <div className="card hover:border border-white-400 hover:shadow-lg hover:shadow-cyan-500/50 rounded m-2 transition-all ease-in-out">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-5">Image Enhancement</h1>
          <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Enhances the quality of uploaded images to improve plate detection and recognition accuracy.</p>
          </div>
          <div className="card hover:border border-white-400 hover:shadow-lg hover:shadow-cyan-500/50 rounded m-2 transition-all ease-in-out">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-5">Integration API</h1>
          <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Offers an API for integrating the number plate recognition functionality with other systems, such as parking management or law enforcement software.</p>
          </div>
          <div className="card hover:border border-white-400 hover:shadow-lg hover:shadow-cyan-500/50 rounded m-2 transition-all ease-in-out">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-5">Real-time Processing</h1>
          <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Processes images and videos in real-time, enabling users to receive instant results.</p>
          </div>
          <div className="card hover:border border-white-400 hover:shadow-lg hover:shadow-cyan-500/50 rounded m-2 transition-all ease-in-out">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-5">Help and Support</h1>
          <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Provides comprehensive documentation, tutorials, and support resources to help users get the most out of the system.</p>
          </div>
        </div>
    </div>
  )
}

export default FeaturesSection