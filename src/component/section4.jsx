import React from 'react'

function Section4() {
  return (
    <div className='w-full h-[650px] grid grid-rows-1 grid-cols-2 p-10' style={{ background: 'linear-gradient(57deg, rgba(249, 119, 255, 0.4) 40%, rgba(54, 212, 255, 0.4) 88%, rgba(177, 231, 201, 0.4) 100%)' }}>
      <div className='flex justify-end pe-20'>
        <img src="https://www.sugarcosmetics.com/cdn/shop/files/Glow-Blush-HP-Banner_1200-X-1600_1_b5d826d9-951c-4a35-9a63-edd6cf7c1a42.jpg?v=1734677203&width=630" alt="" className='h-full' />
      </div>
      <div className='flex flex-col justify-center items-center text-center pe-30'>
        <p className='mb-5 text-sm tracking-widest cursor-pointer group relative before:w-full before:h-[1px] before:bg-black before:absolute before:bottom-0 before:duration-300 hover:before:w-0'>CLOUD NINE NIACINAMIDE GLOW BLUSH</p>
        <p className='text-xl tracking-widest uppercase mb-5'>Ready to take your<br />blush game to cloud<br />nine?</p>
        <p>Blush brighter, care deeper with our Cloud Nine<br />Niacinamide Glow Blush that gives your cheeks the<br />look straight out of a dream. Infused with 8 botanical<br />oils, Niacinamide, Kojic Acid, and Vitamin C, it<br />pampers your skin while giving you that lit-from-<br />within flush. Just a dab of this weightless formula<br />gives you glowing, radiant cheeks. Choose from<br />playful shades like peachy pink or flirty raspberry,<br />made to flatter every Indian skin tone. Glow-getter,<br />are you in?</p>
      </div>
    </div>
  )
}

export default Section4
