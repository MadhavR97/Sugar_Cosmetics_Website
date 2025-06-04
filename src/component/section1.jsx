import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Section1() {
  let [newLaunch, setNewLaunch] = useState([])
  let [loader, setLoader] = useState(true)

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/products?_limit=5`)
        let result = await response.data
        result = result.filter((el) => {
          return el.category == 'newLaunch'
        })

        setNewLaunch(result)
        setLoader(false)
      }
      catch (error) {
        console.log("Error in fetching data of NewLaunch:", error)
      }
    }

    fetchData()
  }, [])

  let [ImagetoShow, setImagetoShow] = useState({})

  let changeImage = (id, image) => {
    setImagetoShow({ ...ImagetoShow, [id]: image })
  }

  return (
    <div className='w-[100%] h-[700px]'>
      <div className='w-[100%] h-[150px] flex flex-col justify-center items-center tracking-widest'>
        <p className='text-xs'>TRENDING AT SUGAR</p>
        <p className='text-xl font-bold mt-4 tracking-widest'>NEW LAUNCHES</p>
      </div>
      <div className='w-[100%] h-[550px] grid grid-cols-5 grid-rows-1 gap-5 p-5 '>
        {!loader
          ? newLaunch.map((el) => {
            let selectedImage = ImagetoShow[el.id] || el.image1

            return <div className='w-[100%] h-[100%] rounded overflow-hidden cursor-pointer border border-[gray] hover:border-2 hover:border-black' key={el.id}>
              <div className='w-[100%] h-[70%] flex justify-center items-center'>
                <img src={selectedImage} alt="" />
              </div>
              <div className='w-[100%] h-[30%] flex flex-col justify-center items-center p-3'>
                <p className='font-bold text-sm text-center'>{el.title}</p>
                <p className='font-bold text-sm text-[green] mt-2'>RS. {el.price}</p>
                <div className='w-[40%] h-[20px] mt-4 flex justify-between'>
                  <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color1 }} onClick={() => { changeImage(el.id, el.image1) }}></div>
                  <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color2 }} onClick={() => { changeImage(el.id, el.image2) }}></div>
                  <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color3 }} onClick={() => { changeImage(el.id, el.image3) }}></div>
                  <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color4 }} onClick={() => { changeImage(el.id, el.image4) }}></div>
                </div>
              </div>
            </div>
          })
          : Array.from({ length: 5 }).map((_, idx) => {
            return <div role="status" className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700" key={idx}>
              <div className="flex items-center justify-center h-[70%] mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="mt-10 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Section1
