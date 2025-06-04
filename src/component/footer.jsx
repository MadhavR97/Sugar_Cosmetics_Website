import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[550px] bg-black flex'>
            <div className='w-[70%] h-full p-10'>
                <img src="//www.sugarcosmetics.com/cdn/shop/files/Sugal_white_logo_horizontal_orientation.png?v=1614336338&width=2749" alt="" className='w-[150px]' />
                <p className='text-white text-sm tracking-widest mt-10 font-medium'>QUICK LINKS</p>
                <ul className='mt-5'>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>Stores Locator</li>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>Elite</li>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>Returns</li>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>Terms & Conditions</li>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>FAQs</li>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>About Us</li>
                    <li className='text-sm text-white opacity-[0.7] mt-3 cursor-pointer hover:opacity-[1]'>Influencer Collab</li>
                </ul>
                <div className='w-[20%] mt-10 flex justify-between items-center'>
                    <i className="fa-brands fa-facebook-f text-white text-xl opacity-[0.7] cursor-pointer hover:opacity-[1]"></i>
                    <i className="fa-brands fa-x-twitter text-white text-xl opacity-[0.7] cursor-pointer hover:opacity-[1]"></i>
                    <i className="fa-brands fa-instagram text-white text-xl opacity-[0.7] cursor-pointer hover:opacity-[1]"></i>
                    <i className="fa-brands fa-youtube text-white text-xl opacity-[0.7] cursor-pointer hover:opacity-[1]"></i>
                    <i className="fa-brands fa-linkedin-in text-white text-xl opacity-[0.7] cursor-pointer hover:opacity-[1]"></i>
                </div>
                <p className='text-white mt-10 text-xs tracking-widest opacity-[0.7]'>© 2025 - SUGAR Cosmetics</p>
            </div>
            <div className='w-[30%] h-full p-10'>
                <p className='text-white text-sm tracking-widest font-medium mt-5'>SUPPORT</p>
                <p className='mt-10 text-white opacity-[0.7] relative inline-block cursor-pointer before:w-full before:h-[1px] before:bg-white before:absolute before:bottom-0 hover:before:w-0 before:duration-300'>hello@sugarcosmetics.com</p>
            </div>
        </div>
    )
}

export default Footer
