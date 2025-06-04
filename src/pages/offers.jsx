import React from 'react'
import NavbarCode from '../component/navbar'
import Policy_3 from '../component/3_policy'
import Footer from '../component/footer'

function Offers() {
  return (
    <div>
      <NavbarCode></NavbarCode>
      <div className='w-full flex flex-col justify-center items-center overflow-auto'>
        <div className='w-full h-[100px] bg-black'></div>
        <p className='text-4xl tracking-widest mt-[50px]'>OFFER</p>
        <div className='mt-10'>
          <img src="https://cdn.shopify.com/s/files/1/0906/2558/files/LA-LA-Love-Free-gift-HP2-600x500_2.jpg?v=1738663330" alt="" className='mb-5' />
          <img src="https://cdn.shopify.com/s/files/1/0906/2558/files/OP-600x450_1_cccb4e17-29b6-4734-afef-37c8e26a245e.jpg?v=1738256511" alt="" className='mb-5' />
          <img src="https://cdn.shopify.com/s/files/1/0906/2558/files/image_45.png?v=1738137218" alt="" />
        </div>
      </div>
      <Policy_3></Policy_3>
      <Footer></Footer>
    </div>
  )
}

export default Offers
