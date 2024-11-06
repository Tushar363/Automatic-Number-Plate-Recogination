const Contact = () => {
  return (
    <div className="relative mt-10 border-b border-neutral-800 min-h-[550px]">
    <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-md font-medium px-2 py-1 uppercase">Contact Us</span>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 px-2 py-4 mt-10 rounded place-items-center">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.2270933551!2d76.68831213423412!3d30.732254422057448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1724525769033!5m2!1sen!2sin"
        width="350" height="400"
        style={{border: "2px solid orange", 'borderRadius': "5px"}}
        allowFullScreen
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <div className="form">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="7bfd15e5-0361-4c2c-ba7d-f3dfcd1a61e5"></input> {/*web3form access key for 'battleking018@gmail.com' */}
                <input type="text" name="name" placeholder="Your Name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
                <input type="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
                <textarea placeholder="Your Message" name="msg" className="w-full px-3 py-2 mt-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500 resize-y" rows="5"></textarea>
                <button type="submit" className="w-full px-3 py-2 mt-4 text-white bg-orange-500 rounded-md hover:bg-orange-6">Send Message</button>
            </form>
        </div>
    </div>
    
    </div>
  )
}

export default Contact