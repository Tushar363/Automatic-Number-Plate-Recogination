import image from '../assets/image.png';
import { Facebook, Github, Globe, Instagram, Mail, Map, Phone,  } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative mt-10 border-b border-neutral-800 min-h-[400px]">
    <div className="grid lg:grid-cols-3 place-items-center">
        <div className='text-center w-fit ml-5'>
            <img src={image} alt="logo" className='w-28 h-16 rounded-md ml-6'></img>
            <h1 className='my-5 text-lg bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text font-bold max-w-4xl'>Automatic Number <br/> Plate Recognition</h1>
            <p></p>
            <div className='flex m-5 gap-7'>
            <Facebook/>
            <Instagram />
            <Github />
            </div>
        </div>
        
        <div className='w-fit'>
            <h1 className="text-3xl sm:text-2xl lg:text-3xl tracking-wide mb-5 cursor-pointer">Services</h1>
            <div className='list-none text-lg text-neutral-500 max-w-4xl text-pretty'>
            <li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>Vehicle Tracking and Monitoring</li>
            <li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>Database Search and Lookup</li>
            <li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>Security and Surveillance</li>
            <li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>Cloud Storage and Backup</li>
            <li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>API Integration</li>
            </div>
        </div>

        <div className='w-fit'>
            <h1 className="text-3xl sm:text-2xl lg:text-3xl tracking-wide mb-5 cursor-pointer">Get in Touch</h1>
            <div className='list-none text-lg text-neutral-500 max-w-4xl text-pretty'>
            <span className='flex gap-2'><Phone/><li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>+91 xxxxxxxxxx</li></span>
            <span className='flex gap-2'><Globe/><li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>www.ANPR.in</li></span>
            <span className='flex gap-2'><Mail/><li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>Support.anpr@gmail.in</li></span>
            <span className='flex gap-2'><Github/><li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>anprsupport.github.com</li></span>
            <span className='flex gap-2'><Map/><li className='mb-6 hover:bg-gradient-to-r from-orange-700 to-red-800 hover:text-transparent hover:bg-clip-text cursor-pointer'>440 Phase 1 CHD</li></span>
            </div>
        </div>
    </div>
    <h1 className='text-center m-10'>Copyright &#169; 2024 | ANPR</h1>
    </div>
  )
}

export default Footer