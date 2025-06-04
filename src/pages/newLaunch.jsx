import React, { useEffect, useState } from 'react'
import NavbarCode from '../component/navbar'
import axios from 'axios'
import Policy_3 from '../component/3_policy'
import Footer from '../component/footer'
import { Link } from 'react-router-dom'

function NewLaunch() {
    // Loader Data
    let [loader, setLoader] = useState(true)

    // Toggle Data
    let [toggle, setToggle] = useState(false)

    let handleToggle = () => {
        setToggle(!toggle)
    }

    // Fetch Data
    let [newLaunch, setNewLaunch] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/products`)
                let result = await response.data

                let a = result.filter((el) => {
                    return el.category == 'newLaunch'
                })
                setNewLaunch(a)
                setLoader(false)
            }
            catch (error) {
                console.log('Error in fetch NewLaunch Data:', error)
            }
        }

        fetchData()
    }, [])

    let [ImagetoShow, setImagetoShow] = useState({})

    let changeImage = (id, image) => {
        setImagetoShow({ ...ImagetoShow, [id]: image })
    }

    // Filter Data
    let filterChange = (e, value) => {
        if (e.target.checked == true) {
            if (value == 'B500') {
                setNewLaunch(newLaunch.filter((el) => {
                    return el.price < 500
                }))
            }
            else if (value == 'A500') {
                setNewLaunch(newLaunch.filter((el) => {
                    return el.price > 500
                }))
            }
            else if (value == 'A1000') {
                setNewLaunch(newLaunch.filter((el) => {
                    return el.price > 1000
                }))
            }
            else if (value == 'A1500') {
                setNewLaunch(newLaunch.filter((el) => {
                    return el.price > 1500
                }))
            }
        }
        else {
            axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/products`)
                .then((res) => {
                    res.data = res.data.filter((el) => {
                        return el.category == 'newLaunch'
                    })
                    setNewLaunch(res.data)
                })
        }
    }

    return (
        <div className='w-full'>
            <NavbarCode></NavbarCode>
            <div className='w-full bg-black'>
                <img src="https://www.sugarcosmetics.com/cdn/shop/collections/Partner-in-Shine-Transferproof-Lip-Gloss-LP1600x400_1.jpg?v=1734946994&width=1600" alt="" className='opacity-50' />
            </div>
            <div className='w-full h-screen flex'>
                <div className='w-[25%] h-full bg-white p-15 rounded-r-2xl'>
                    <p className='font-bold text-2xl tracking-widest'>FILTER</p>
                    <div className='border-t border-b border-[gray] w-full rounded-lg overflow-hidden mt-5'>
                        <p className='w-full h-[50px] font-bold text-sm tracking-widest flex justify-between items-center ps-3 pe-3'>PRICE <i className={`fa-solid fa-angle-down cursor-pointer duration-200 ${toggle ? 'rotate-[180deg]' : 'rotate-0'}`} onClick={handleToggle}></i></p>
                        <ul className={`w-full h-[130px] flex flex-col justify-between pt-3 pb-3 duration-200 ${toggle ? 'mt-0 opacity-100 visible' : 'mt-[-130px] opacity-0 invisible'}`}>
                            <li className='flex items-center'><input type="checkbox" className='ms-5' onChange={(el) => { filterChange(el, 'B500') }} /><label htmlFor="" className='text-sm ms-2'>Below 500</label></li>
                            <li className='flex items-center'><input type="checkbox" className='ms-5' onChange={(el) => { filterChange(el, 'A500') }} /><label htmlFor="" className='text-sm ms-2'>Above 500</label></li>
                            <li className='flex items-center'><input type="checkbox" className='ms-5' onChange={(el) => { filterChange(el, 'A1000') }} /><label htmlFor="" className='text-sm ms-2'>Above 1000</label></li>
                            <li className='flex items-center'><input type="checkbox" className='ms-5' onChange={(el) => { filterChange(el, 'A1500') }} /><label htmlFor="" className='text-sm ms-2'>Above 1500</label></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[75%] h-full overflow-auto grid grid-cols-4 gap-3 p-3'>
                    {!loader
                        ? newLaunch.map((el) => {
                            let selectedImage = ImagetoShow[el.id] || el.image1
                            return <div className='w-[100%] h-[500px] rounded overflow-hidden cursor-pointer border border-[gray] hover:border-2 hover:border-black' key={el.id}>
                                <Link to={`/single-page/${el.id}`}>
                                    <div className='w-[100%] h-[70%] flex justify-center items-center'>
                                        <img src={selectedImage} alt="" />
                                    </div>
                                </Link>
                                <div className='w-[100%] h-[30%] flex flex-col justify-center items-center p-3'>
                                    <p className='font-bold text-sm text-center'>{el.title}</p>
                                    <p className='font-bold text-sm text-[green] mt-2'>RS. {el.price} {el.mrp ? <del><span className='text-xs text-[gray]'>Rs. {el.mrp}</span></del> : null}</p>
                                    <div className='w-[40%] h-[20px] mt-4 flex justify-between'>
                                        <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color1 }} onClick={() => { changeImage(el.id, el.image1) }}></div>
                                        <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color2 }} onClick={() => { changeImage(el.id, el.image2) }}></div>
                                        <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color3 }} onClick={() => { changeImage(el.id, el.image3) }}></div>
                                        <div className='rounded-[50%] w-[20px] h-[20px] flex justify-center items-center' style={{ backgroundColor: el.color4 }} onClick={() => { changeImage(el.id, el.image4) }}></div>
                                    </div>
                                </div>
                            </div>
                        })
                        : Array.from({ length: 10 }).map((_, idx) => {
                            return <div role="status" className="w-full h-[500px] p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700" key={idx}>
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
            <Policy_3></Policy_3>
            <Footer></Footer>
        </div>
    )
}

export default NewLaunch
