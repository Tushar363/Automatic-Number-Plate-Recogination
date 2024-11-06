import vision from "../assets/vision.jpg";
import key from "../assets/key.png";
import team from "../assets/team.jpg";

const About = () => {
  return (
    <div className="relative mt-10 border-b border-neutral-800 min-h-[700px]">
    <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-md font-medium px-2 py-1 uppercase">About</span>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-10 px-2 py-4 mt-10 rounded place-items-center">

      {/* First Card */}
    <div className="image">
      <img src={team} alt="Unable to Load..." className="rounded-md shadow-orange-500 shadow-lg w-96"></img>
    </div>
    <div className="text">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Our Team</h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Our team consists of experienced professionals with a passion for innovation and a deep understanding of ANPR technology. Our experts in computer vision, software development, and data analytics work together to design and develop cutting-edge solutions that meet the evolving needs of our customers.</p>
    </div>

      {/* Second Card */}
    <div className="text">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Our Vision</h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Our vision is to revolutionize the way we interact with vehicles on the road. We believe that Automatic Number Plate Recognition (ANPR) technology has the potential to transform the way we manage traffic, ensure public safety, and provide innovative solutions for businesses and individuals alike. Our goal is to harness the power of ANPR to create a safer, more efficient, and more connected world, where vehicles are seamlessly integrated into the fabric of our daily lives.</p>
    </div>
    <div className="image">
      <img src={vision} alt="Unable to Load..." className="rounded-md shadow-orange-500 shadow-lg w-full"></img>
    </div>

      {/* Third Card */}
    <div className="image">
      <img src={key} alt="Unable to Load..." className="rounded-md shadow-orange-500 shadow-lg"></img>
    </div>
    <div className="text">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Key Aspects</h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl text-pretty">	<span className="text-2xl text-orange-400">&#8227;</span> <span className="text-white">Enhanced Public Safety:</span> We envision a future where ANPR technology helps law enforcement agencies and traffic authorities to prevent and investigate crimes, reduce accidents, and improve overall road safety.<br />

      <span className="text-2xl text-orange-400">&#8227;</span> <span className="text-white">Efficient Traffic Management:</span> Our vision includes the development of intelligent transportation systems that optimize traffic flow, reduce congestion, and minimize travel times, making our roads more efficient and environmentally friendly.<br />
      
      <span className="text-2xl text-orange-400">&#8227;</span> <span className="text-white">Innovative Solutions:</span> We aim to provide businesses and individuals with cutting-edge ANPR-based solutions that improve their operations, enhance customer experiences, and increase revenue opportunities.</p>
    </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center m-10 gap-48">
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">10+</h1>
        <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Years Of Experience</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">150+</h1>
        <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Satisfied Clients</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">100%</h1>
        <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl text-pretty">Success Rate</p>
      </div>
    </div>
    
    </div>
  )
}

export default About