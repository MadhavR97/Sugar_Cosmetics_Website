import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './signup.css'
import logo from '../assets/images/Footer_sugar_icon.svg'
import bg_texture from '../assets/images/BackGroundTexture.jpg'
import hi from '../assets/images/Hi!.jpg'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

function Signup() {
    let [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    })

    let navigate = useNavigate()

    // Get Users Data
    let [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/users`)
            .then((res) => {
                setUserData(res.data)
            })
    }, [])

    let [filteredEmail, setFilteredEmail] = useState(true)

    //Username Regex
    let userRegex = /^[0-9A-Za-z]{6,16}$/
    let uservalid = userRegex.test(state.username)

    //Email Regex
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    let emailvalid = emailRegex.test(state.email)

    //Password Regex
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/
    let passwordvalid = passwordRegex.test(state.password)

    let handleChange = (e) => {
        let { name, value } = e.target

        setState({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        if (uservalid && emailvalid && passwordvalid) {
            filteredEmail = userData.filter((el) => {
                return el.email == state.email
            })

            if (filteredEmail.length) {
                toast.error('Email is already registered', {
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
                axios.post(`https://sugar-cosmetics-db-deploy.onrender.com/users`, state)

                setState({
                    username: '',
                    email: '',
                    password: ''
                })

                toast.success('Account Created Successfully', {
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
        else {
            toast.error('Incorrect Validation', {
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

    return (
        <div className='border border-black w-[100%] h-[100vh] bg-black flex'>
            <div className='border border-black w-[40%] h-[100%] bg-black flex justify-center items-center'>
                <Link to={'/'}><img src={logo} alt="" className='w-[200px]' /></Link>
            </div>
            <div className='border border-black w-[60%] h-[100%] rounded-2xl overflow-hidden bg-white' style={{ backgroundImage: `url(${bg_texture})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <form action="" className='border border-black w-[100%] h-[100%] flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <img src={hi} alt="" className='mb-5' />
                    <p className='text-lg font-bold mb-5'>Login/Sign Up Using Email</p>
                    <div className='w-[50%] flex flex-col items-center'>
                        <label htmlFor="" className='text-sm font-bold mb-1 w-[100%]'>Username</label>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            className='border-b-1 w-[100%] h-[40px] rounded outline-none ps-5 text-sm mb-3'
                            autoComplete='off'
                            name='username'
                            value={state.username}
                            onChange={handleChange}
                            style={{ borderBottom: uservalid ? '2px solid green' : '' }}
                        />
                        {uservalid ? <p className='w-[100%] mb-5 text-xs text-left text-[green]'>Username is valid</p> : <p className='w-[100%] mb-5 text-xs text-left'>Username is not valid</p>}

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
                        {passwordvalid ? <p className='w-[100%] mb-5 text-xs text-left text-[green]'>Password is valid</p> : <p className='w-[100%] mb-5 text-xs text-left'>Password must be between 6 to 20 characters long & contain uppercase,lowercase & special Characters.</p>}

                        <input type="submit" className='border border-black w-[150px] h-[40px] rounded cursor-pointer font-bold hover:bg-black hover:text-white' />
                    </div>
                    <p className='text-xs text-center mt-5 text-[gray]'>Registering for this site allows you to access your order status and history. Just fill in the above fields, and we'll get<br />
                        a new account set up for you in no time. We will only ask you for information necessary to make the purchase<br />
                        process faster and easier.</p>
                    <Link to={'/login'}><p className='text-sm mt-5 cursor-pointer font-bold relative duration-500' id='gotoLogin'>Already have a account? Login</p></Link>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Signup
