import React, { useEffect, useRef, useState } from 'react'
import NavbarCode from '../component/navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Policy_3 from '../component/3_policy'
import Footer from '../component/footer'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

function SinglePage() {
    // FETCH DATA
    let { id } = useParams()

    let [productdata, setProductdata] = useState({})

    useEffect(() => {
        axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/products/${id}`)
            .then((res) => {
                setProductdata(res.data)
            })
    }, [])

    // CHANGE IMAGES
    let color1 = useRef(null)
    let color2 = useRef(null)
    let color3 = useRef(null)
    let color4 = useRef(null)

    let [boxImage, setBoxImage] = useState(null)

    let changeImage = (id, image) => {
        if (id == 1) {
            setBoxImage(image)
            color1.current.style.border = 'none'
            color2.current.style.border = 'none'
            color3.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 2) {
            setBoxImage(image)
            color1.current.style.border = 'none'
            color2.current.style.border = 'none'
            color3.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 3) {
            setBoxImage(image)
            color1.current.style.border = 'none'
            color2.current.style.border = 'none'
            color3.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 4) {
            setBoxImage(image)
            color1.current.style.border = 'none'
            color2.current.style.border = 'none'
            color3.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 5) {
            setBoxImage(image)
            color1.current.style.border = '1px solid black'
            color2.current.style.border = 'none'
            color3.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 6) {
            setBoxImage(image)
            color2.current.style.border = '1px solid black'
            color1.current.style.border = 'none'
            color3.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 7) {
            setBoxImage(image)
            color3.current.style.border = '1px solid black'
            color1.current.style.border = 'none'
            color2.current.style.border = 'none'
            color4.current.style.border = 'none'
        }
        else if (id == 8) {
            setBoxImage(image)
            color4.current.style.border = '1px solid black'
            color1.current.style.border = 'none'
            color2.current.style.border = 'none'
            color3.current.style.border = 'none'
        }
    }

    // DESCRIPTION TOGGLE DATA
    let [DEStoggle, setDEStoggle] = useState(true)

    let handleDEStoggle = () => {
        setDEStoggle(!DEStoggle)
    }

    // HOW TO USE TOGGLE DATA
    let [HTUtoggle, setHTUtoggle] = useState(true)

    let handleHTUtoggle = () => {
        setHTUtoggle(!HTUtoggle)
    }

    // PRODUCT DETAIL TOGGLE DATA
    let [ProductDetailToggle, setProductDetailToggle] = useState(true)

    let handleProductDetailToggle = () => {
        setProductDetailToggle(!ProductDetailToggle)
    }

    // CART DATA
    let handleCart = () => {
        axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/cart`)
            .then((res) => {
                let existData = res.data.find((item) => {
                    return item.id == id
                })

                if (existData == undefined) {
                    axios.post(`https://sugar-cosmetics-db-deploy.onrender.com/cart`, { ...productdata, quantity: 1 })
                }
                else {
                    toast.info('Item already exist in cart', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Flip,
                    });
                }
            })
    }

    return (
        <div>
            <NavbarCode></NavbarCode>
            <div className='w-full h-[100px] bg-black'></div>
            <div className='w-full h-[86vh] grid grid-cols-2'>
                <div className='p-10 overflow-auto'>
                    <div className='w-full h-[600px] flex'>
                        <div className='w-[30%] h-full p-5 flex flex-col justify-evenly items-center'>
                            <div className='border border-[gray] w-[100px] h-[130px] flex justify-center items-center cursor-pointer' onClick={() => { changeImage(1, productdata.image1) }}><img src={productdata.image1} alt="" /></div>
                            <div className='border border-[gray] w-[100px] h-[130px] flex justify-center items-center cursor-pointer' onClick={() => { changeImage(2, productdata.desimg1) }}><img src={productdata.desimg1} alt="" /></div>
                            <div className='border border-[gray] w-[100px] h-[130px] flex justify-center items-center cursor-pointer' onClick={() => { changeImage(3, productdata.desimg2) }}><img src={productdata.desimg2} alt="" /></div>
                            <div className='border border-[gray] w-[100px] h-[130px] flex justify-center items-center cursor-pointer' onClick={() => { changeImage(4, productdata.desimg3) }}><img src={productdata.desimg3} alt="" /></div>
                        </div>
                        <div className='w-[70%] h-full flex justify-center items-center'>
                            <img src={boxImage == null ? productdata.image1 : boxImage} alt="" />
                        </div>
                    </div>

                    <div className='grid gap-3'>
                        <div className='border border-black w-full rounded overflow-hidden'>
                            <div className='w-full h-[50px] ps-5 pe-5 flex justify-between items-center'>
                                <p className='text-sm font-bold uppercase tracking-widest'>Description</p>
                                <div className='w-[30px] h-[30px] relative flex justify-center items-center'>
                                    <i className={`fa-solid fa-plus cursor-pointer absolute`} style={{ display: DEStoggle ? 'flex' : 'none' }} onClick={handleDEStoggle}></i>
                                    <i className={`fa-solid fa-minus cursor-pointer absolute`} style={{ display: DEStoggle ? 'none' : 'flex' }} onClick={handleDEStoggle}></i>
                                </div>
                            </div>
                            <div className={`w-full p-5 ${DEStoggle ? 'hidden' : 'block'}`}>
                                <p className='text-sm mb-5'>{productdata.description1}</p>
                                <p className='text-sm mb-5'>{productdata.description2}</p>
                                <p className='text-sm'>{productdata.description3}</p>
                            </div>
                        </div>

                        <div className='border border-black w-full rounded overflow-hidden'>
                            <div className='w-full h-[50px] ps-5 pe-5 flex justify-between items-center'>
                                <p className='text-sm font-bold uppercase tracking-widest'>How to use</p>
                                <div className='w-[30px] h-[30px] relative flex justify-center items-center'>
                                    <i className={`fa-solid fa-plus cursor-pointer absolute`} style={{ display: HTUtoggle ? 'flex' : 'none' }} onClick={handleHTUtoggle}></i>
                                    <i className={`fa-solid fa-minus cursor-pointer absolute`} style={{ display: HTUtoggle ? 'none' : 'flex' }} onClick={handleHTUtoggle}></i>
                                </div>
                            </div>
                            <div className={`w-full p-5 ${HTUtoggle ? 'hidden' : 'block'}`}>
                                <ul>
                                    <li className='text-sm mb-5 list-disc ms-5'>{productdata.howtouse1}</li>
                                    <li className='text-sm mb-5 list-disc ms-5'>{productdata.howtouse2}</li>
                                    <li className='text-sm list-disc ms-5'>{productdata.howtouse3}</li>
                                </ul>
                            </div>
                        </div>

                        <div className='border border-black w-full rounded overflow-hidden'>
                            <div className='w-full h-[50px] ps-5 pe-5 flex justify-between items-center'>
                                <p className='text-sm font-bold uppercase tracking-widest'>Product Details</p>
                                <div className='w-[30px] h-[30px] relative flex justify-center items-center'>
                                    <i className={`fa-solid fa-plus cursor-pointer absolute`} style={{ display: ProductDetailToggle ? 'flex' : 'none' }} onClick={handleProductDetailToggle}></i>
                                    <i className={`fa-solid fa-minus cursor-pointer absolute`} style={{ display: ProductDetailToggle ? 'none' : 'flex' }} onClick={handleProductDetailToggle}></i>
                                </div>
                            </div>
                            <div className={`w-full p-5 ${ProductDetailToggle ? 'hidden' : 'block'}`}>
                                <p className='text-sm mb-5'><span className='font-bold me-2'>Generic Name :</span>{productdata.genericName}</p>
                                <p className='text-sm mb-5'><span className='font-bold me-2'>MRP :</span>RS. {productdata.price}/-</p>
                                <p className='text-sm mb-5'><span className='font-bold me-2'>Net Quantity :</span>{productdata.netVolume}</p>
                                <p className='text-sm mb-5'><span className='font-bold me-2'>Item Dimensions :</span>{productdata.dimensions}</p>
                                <p className='text-sm mb-5'><span className='font-bold me-2'>Marketed By :</span>Vellvette Lifestyle Pvt. Ltd. B-1004, Palatial Heights, Andheri (E), Mumbai 400072, Maharashtra, India</p>
                                <p className='text-sm mb-5'><span className='font-bold me-2'>Manufactured for :</span>SUGAR Cosmetics LLC, 8 The Green, Suite A, Dover, DE 19901</p>
                                <p className='text-sm'><span className='font-bold me-2'>Country Of Origin :</span>India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-10'>
                    <p className='text-2xl uppercase tracking-widest w-[80%]'>{productdata.title}</p>
                    {productdata.rating
                        ? <div className='flex justify-start items-center w-[40%] mt-5'>
                            <div className='border border-black w-[70px] h-[30px] rounded flex justify-center items-center bg-black text-white text-sm'>
                                <i className="fa-solid fa-star me-1 text-xs"></i>
                                <p>{productdata.rating.rate}</p>
                            </div>
                            {/* <p className='ms-3 text-sm'>({productdata.rating.count})</p> */}
                        </div>
                        : null}
                    <p className='text-lg tracking-widest text-[gray] mt-5 font-bold flex items-center'>RS. {productdata.price}.00 {productdata.mrp ? <del className='text-xs ms-4'><span>RS. {productdata.mrp}.00</span></del> : null}</p>
                    <p className='text-[gray]'>Tax included.</p>
                    <div className='flex justify-between w-[250px] mt-10'>
                        {productdata.color1 ? <div className='p-1 rounded-full' ref={color1}><div className='w-[50px] h-[50px] rounded-full cursor-pointer' style={{ backgroundColor: productdata.color1 }} onClick={() => { changeImage(5, productdata.image1) }}></div></div> : null}
                        {productdata.color1 ? <div className='p-1 rounded-full' ref={color2}><div className='w-[50px] h-[50px] rounded-full cursor-pointer' style={{ backgroundColor: productdata.color2 }} onClick={() => { changeImage(6, productdata.image2) }}></div></div> : null}
                        {productdata.color1 ? <div className='p-1 rounded-full' ref={color3}><div className='w-[50px] h-[50px] rounded-full cursor-pointer' style={{ backgroundColor: productdata.color3 }} onClick={() => { changeImage(7, productdata.image3) }}></div></div> : null}
                        {productdata.color1 ? <div className='p-1 rounded-full' ref={color4}><div className='w-[50px] h-[50px] rounded-full cursor-pointer' style={{ backgroundColor: productdata.color4 }} onClick={() => { changeImage(8, productdata.image4) }}></div></div> : null}
                    </div>
                    <button className="border border-black w-full h-[50px] bg-black text-white font-bold tracking-widest cursor-pointer rounded overflow-hidden mt-10 relative duration-500 group z-0" onClick={handleCart}>
                        <span className="w-full h-full flex justify-center items-center group-hover:text-black duration-500 before:content-[''] before:bg-white before:absolute before:top-0 before:left-0 before:w-0 before:h-full group-hover:before:w-full before:duration-500 before:z-[-1] h-full w-full">ADD TO CART</span>
                    </button>
                </div>
            </div>
            <Policy_3></Policy_3>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default SinglePage
