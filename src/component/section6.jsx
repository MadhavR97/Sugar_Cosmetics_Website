import React from 'react'
import { MyComponent } from './slider'

function Section6() {
  return (
    <div className='w-full'>
      <div className='w-full h-[100px] flex justify-center items-center'>
        <p className='font-bold text-xl tracking-widest'>PRICE DROP</p>
      </div>
      <div className='w-full'>
        <MyComponent></MyComponent>
      </div>
    </div>
  )
}

export default Section6
