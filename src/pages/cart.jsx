import React, { useEffect, useState } from 'react'
import NavbarCode from '../component/navbar'
import Footer from '../component/footer'
import Policy_3 from '../component/3_policy'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Cart() {
    let [cart, setCart] = useState([])
    let [total, setTotal] = useState(0)

    useEffect(() => {
        axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/cart`)
            .then((res) => {
                setCart(res.data)
            })
    }, [])

    // CART DELETE DATA
    let handleDelete = (id) => {
        axios.delete(`https://sugar-cosmetics-db-deploy.onrender.com/cart/${id}`)
            .then((res) => {
                setCart((cart) => {
                    return cart.filter((item) => {
                        return item.id != id
                    })
                })
            })
    }

    // QUANTITY DATA
    let handleQuantity = (id, qty, clickbtn) => {
        // console.log(id, qty, clickbtn)
        let updateQty = qty
        if (clickbtn == 'increase') {
            updateQty += 1
        }
        else if (clickbtn == 'decrease' && updateQty > 1) {
            updateQty -= 1
        }

        axios.patch(`https://sugar-cosmetics-db-deploy.onrender.com/cart/${id}`, { quantity: updateQty })
            .then((res) => {
                setCart((cart) => {
                    return cart.map((item) => {
                        if (item.id == id) {
                            item.quantity = updateQty
                        }
                        return item
                    })
                })
            })
    }

    useEffect(() => {
        axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/cart`)
            .then((res) => {
                let newTotal = 0
                res.data.forEach((item) => {
                    newTotal += item.price * item.quantity
                })
                setTotal(newTotal)
            })
    })

    return (
        <div>
            <NavbarCode></NavbarCode>
            <div className='w-full h-[100px] bg-black'></div>
            <div className='w-full'>
                {cart.length > 0
                    ? <div className='w-full h-full flex justify-center'>
                        <div className='w-[70%] h-full'>
                            <div className='w-full h-[100px] flex justify-center items-center'>
                                <p className='text-3xl tracking-widest'>CART</p>
                            </div>

                            <div className='border-b border-[gray] w-full h-[50px] flex'>
                                <div className='w-[60%] h-full flex items-center'><p className='text-[gray] text-xs font-bold tracking-widest'>PRODUCT</p></div>
                                <div className='w-[20%] h-full flex items-center justify-center'><p className='text-[gray] text-xs font-bold tracking-widest'>QUANTITY</p></div>
                                <div className='w-[20%] h-full flex items-center justify-end'><p className='text-[gray] text-xs font-bold tracking-widest'>TOTAL</p></div>
                            </div>

                            <div className='w-full'>
                                {cart.map((e) => {
                                    return <div className='border-b border-[gray] w-full h-[200px] flex pt-5 pb-5' key={e.id}>
                                        <div className='w-[60%] flex'>
                                            <div className='w-[30%] h-full flex justify-start items-center'><img src={e.image1} alt="" className='h-full' /></div>
                                            <div className='w-[70%] h-full flex flex-col justify-center'>
                                                <p className='text-sm tracking-widest'>{e.title}</p>
                                                <p className='text-sm text-[gray] mt-2 tracking-widest'>RS. {e.price}</p>
                                            </div>
                                        </div>
                                        <div className='w-[20%] flex flex-col justify-center items-center'>
                                            <div className='border border-[gray] flex justify-center'>
                                                <i className="fa-solid fa-minus w-[40px] h-[40px] cursor-pointer text-xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => { handleQuantity(e.id, e.quantity, 'decrease') }}></i>
                                                <p className='w-[40px] h-[40px] flex justify-center items-center'>{e.quantity}</p>
                                                <i className="fa-solid fa-plus w-[40px] h-[40px] cursor-pointer text-xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => { handleQuantity(e.id, e.quantity, 'increase') }}></i>
                                            </div>
                                            <p className='mt-3 text-sm cursor-pointer relative before:w-full before:h-[1px] before:bg-black before:absolute before:bottom-0 before:duration-500 hover:before:w-0' onClick={() => { handleDelete(e.id) }}>Remove</p>
                                        </div>
                                        <div className='w-[20%] flex justify-end items-center'>
                                            <p className='text-sm mt-2 tracking-widest'>RS. {e.price * e.quantity}.00</p>
                                        </div>
                                    </div>
                                })}
                            </div>

                            <div className='w-full h-[200px] flex flex-col justify-center items-end'>
                                <p>Total : Rs. {total}.00</p>
                                <p className='text-sm text-[gray] font-bold mt-3'>Tax included and shipping calculated at checkout</p>
                                <div className='border border-black h-[30px] rounded-md flex items-center ps-3 pe-3 mt-3'>
                                    <p className='text-xs'>or Pay <span className='text-[green] font-bold'>₹ 316 now,</span> rest later via SUGAR Pay Later | 0% EMI on</p>
                                    <img src="https://preemi.snapmint.com/assets/whitelable/UPI-Logo-vector%201.svg" alt="" className='w-[30px] ms-2' />
                                    <img src="https://assets.snapmint.com/assets/merchant/sugar_buy_on_emi.png" alt="" className='w-[60px] ms-2' />
                                </div>
                                <button className='border border-black w-[455px] h-[40px] bg-black text-white tracking-widest cursor-pointer mt-3 rounded overflow-hidden relative z-0 duration-500 hover:text-black before:w-0 before:h-full before:bg-white before:absolute before:top-0 before:left-0 before:duration-500 before:z-[-1] hover:before:w-full'>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                    : <div className='w-full h-[86vh] flex flex-col justify-center items-center'>
                        <p className='text-xl font-bold tracking-widest mb-5'>CART</p>
                        <p className='mb-5'>Your cart is empty</p>
                        <Link to={`/newLaunch`}><button className='border border-black w-[250px] h-[50px] bg-black text-white cursor-pointer rounded overflow-hidden relative group z-0 duration-500 hover:text-black before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white before:duration-500 before:z-[-1] hover:before:w-full'>CONTINUE SHOPPING</button></Link>
                    </div>
                }
            </div>
            <Policy_3></Policy_3>
            <Footer></Footer>
        </div>
    )
}

export default Cart
