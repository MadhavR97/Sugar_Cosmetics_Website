import React from 'react'

function Section8() {
    return (
        <div className='w-full'>
            <div className='w-full h-[130px] flex justify-center items-center'>
                <p className='font-bold text-xl tracking-widest mt-10'>SUGAR ICONICS IN-FOCUS</p>
            </div>
            <div className='w-full h-[380px] grid grid-rows-1 grid-cols-3 gap-8 p-8'>
                <div className='overflow-hidden cursor-pointer'>
                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Iconic-Tile-2022-Air-Kiss_1.jpg?v=1734582210&width=600" alt="" className='w-full h-full duration-2000 hover:scale-110' />
                </div>
                <div className='overflow-hidden cursor-pointer'>
                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Iconic-Tile-2023-LaLaLove.jpg?v=1734582295&width=600" alt="" className='w-full h-full duration-2000 hover:scale-110' />
                </div>
                <div className='overflow-hidden cursor-pointer'>
                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Iconic-Tile-2024-MM_1.jpg?v=1734582271&width=600" alt="" className='w-full h-full duration-2000 hover:scale-110' />
                </div>
            </div>
        </div>
    )
}

export default Section8
