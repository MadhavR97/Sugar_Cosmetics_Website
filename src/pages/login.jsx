import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/images/Footer_sugar_icon.svg'
import bg_texture from '../assets/images/BackGroundTexture.jpg'
import hi from '../assets/images/Hi!.jpg'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

function Login() {
    let [state, setState] = useState({
        email: '',
        password: ''
    })

    let navigate = useNavigate()

    //Email Regex
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    let emailvalid = emailRegex.test(state.email)

    //Password Regex
    let passwordRegex = /^[0-9A-Za-z" "!@#$%^&*()\-+.]{1,100}$/
    let passwordvalid = passwordRegex.test(state.password)

    let handleChange = (e) => {
        let { name, value } = e.target

        setState({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        if (emailvalid && passwordvalid) {
            axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/users?email=${state.email}`)
                .then((Res) => {
                    if (Res.data.length == 0) {
                        toast.error('Email is not registered', {
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
                    else {
                        if (Res.data[0].password == state.password) {
                            console.log(Res.data[0].username)
                            let obj = {
                                username: Res.data[0].username,
                                email: Res.data[0].email
                            }
                            localStorage.setItem("LoginData", JSON.stringify(obj))
                            localStorage.setItem("isLoggedIn", true)
                            navigate('/')
                        }
                        else {
                            toast.error('Password is incorrect', {
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
                    }
                })
        }
        else {
            toast.error('Incorrect validation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }

    return (
        <div className='border border-black w-[100%] h-[100vh] bg-black flex'>
            <div className='border border-black w-[40%] h-[100%] bg-black flex justify-center items-center'>
                <Link to={'/'}><img src={logo} alt="" className='w-[200px]' /></Link>
            </div>
            <div className='border border-black w-[60%] h-[100%] rounded-2xl overflow-hidden bg-white' style={{ backgroundImage: `url(${bg_texture})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <form action="" className='border border-black w-[100%] h-[100%] flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <img src={hi} alt="" className='mb-5' />
                    <p className='text-lg font-bold mb-5'>Login Using Email</p>
                    <div className='w-[50%] flex flex-col items-center'>
                        <label htmlFor="" className='text-sm font-bold mb-1 w-[100%]'>Email</label>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='border-b-1 w-[100%] h-[40px] rounded outline-none ps-5 text-sm mb-3'
                            autoComplete='off'
                            name='email'
                            value={state.email}
                            onChange={handleChange}
                            style={{ borderBottom: emailvalid ? '2px solid green' : '' }}
                        />
                        {emailvalid ? <p className='w-[100%] mb-5 text-xs text-left text-[green]'>Email is valid</p> : <p className='w-[100%] mb-5 text-xs text-left'>Email is not valid</p>}

                        <label htmlFor="" className='text-sm font-bold mb-1 w-[100%]'>Password</label>
                        <input
                            type="text"
                            placeholder='Enter Password'
                            className='border-b-1 w-[100%] h-[40px] rounded outline-none ps-5 text-sm mb-3'
                            autoComplete='off'
                            name='password'
                            value={state.password}
                            onChange={handleChange}
                            style={{ borderBottom: passwordvalid ? '2px solid green' : '' }}
                        />
                        {passwordvalid ? <p className='w-[100%] mb-5 text-xs text-left text-[green]'>Password is valid</p> : <p className='w-[100%] mb-5 text-xs text-left'>Password is not valid</p>}

                        <input type="submit" className='border border-black w-[150px] h-[40px] rounded cursor-pointer font-bold hover:bg-black hover:text-white' />
                    </div>
                    <p className='text-xs text-center mt-10 text-[gray]'>Registering for this site allows you to access your order status and history. Just fill in the above fields, and we'll get<br />
                        a new account set up for you in no time. We will only ask you for information necessary to make the purchase<br />
                        process faster and easier.</p>
                    <Link to={'/signup'}><p className='text-sm mt-10 cursor-pointer font-bold relative duration-500' id='gotoLogin'>New user? Create Account</p></Link>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Login
