import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

function NavbarCode() {
  let [scrolled, setScrolled] = useState(false)
  let searchRef = useRef(null)

  // User Login Data

  let [login, setLogin] = useState({})

  useEffect(() => {
    axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/users`)
      .then((res) => {
        if (res.data.length) {
          setLogin(JSON.parse(localStorage.getItem("LoginData")) || {})
        }
        else {
          localStorage.clear()
        }
      })
  }, [])

  // Dropdown Code

  let [toggleDown, setToggleDown] = useState(true)

  let handleDropdown = () => {
    setToggleDown(!toggleDown)
  }

  // Logout Code

  let handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  // Delete Code

  let DeleteBox = useRef(null)

  let CloseDelBox = () => {
    DeleteBox.current.style.top = '-30px'
    DeleteBox.current.style.opacity = '0'
    DeleteBox.current.style.visibility = 'hidden'
  }

  let handleDelete = () => {
    DeleteBox.current.style.top = '0'
    DeleteBox.current.style.opacity = '1'
    DeleteBox.current.style.visibility = 'visible'
  }

  let [delData, setDelData] = useState({
    email: '',
    password: ''
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setDelData({ ...delData, [name]: value })
  }

  let delSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/users`)
      .then((res) => {
        if (delData.email.length > 0 && delData.password.length > 0) {
          let a = res.data.filter((el) => {
            if (el.email == delData.email) {
              return el.id
            }
            else {
              toast.error('Email is incorrect', {
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
          axios.delete(`https://sugar-cosmetics-db-deploy.onrender.com/users/${a[0].id}`)
          DeleteBox.current.style.top = '-30px'
          DeleteBox.current.style.opacity = '0'
          DeleteBox.current.style.visibility = 'hidden'
          setLogin({})
        }
        else {
          toast.error('Email & Password is must not be empty', {
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

  // Scroll Code

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0)
    })

    window.removeEventListener("scroll", () => {
      setScrolled(window.scrollY == 0)
    })
  }, [])

  // Search Code

  let handleSearch = () => {
    searchRef.current.style.top = '35%'
    searchRef.current.style.opacity = '1'
    searchRef.current.style.visibility = 'visible'
  }

  let handleClose = () => {
    searchRef.current.style.top = '30%'
    searchRef.current.style.opacity = '0'
    searchRef.current.style.visibility = 'hidden'
  }

  // Search Data Code

  let [search, setSearch] = useState('')
  let [searchData, setSearchData] = useState([])

  let handleSearchData = (e) => {
    let { value } = e.target
    setSearch(value)
  }

  useEffect(() => {
    axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/products`)
      .then((res) => {
        let filteredData = res.data.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase())
        })
        setSearchData(filteredData)
      })
  }, [search])

  // Cart Code

  let [cartLangth, setCartLangth] = useState(0)

  useEffect(() => {
    let fetchCartLength = () => {
      axios.get('https://sugar-cosmetics-db-deploy.onrender.com/cart')
        .then((res) => {
          setCartLangth(res.data.length)
        })
        .catch(error => {
          console.error("Error fetching cart data: ", error)
        })
    }

    fetchCartLength()

    let interval = setInterval(fetchCartLength, 1000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className={`w-[100%] h-[100px] flex justify-between items-center fixed cursor-pointer z-1 hover:bg-white hover:text-black group duration-300 ${scrolled ? 'bg-white text-black duration-300' : 'bg-transparent text-white'}`}>
      <div className='w-[20%] h-[100%] flex justify-center items-center'>
        <Link to={'/'}><img src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png?v=1734589067&width=280" alt="" className={`w-[150px] group-hover:flex duration-300 ${scrolled ? 'flex duration-300' : 'hidden'}`} /></Link>
        <Link to={'/'}><img src="//www.sugarcosmetics.com/cdn/shop/files/Sugal_white_logo_horizontal_orientation.png?v=1614336338&width=2749" alt="" className={`w-[150px] group-hover:hidden duration-300 ${scrolled ? 'hidden duration-300' : 'flex'}`} /></Link>
      </div>
      <ul className='w-[60%] h-[100%] flex justify-evenly items-center text-sm' id='headerUL'>
        <Link to={'/newLaunch'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>NEW</li></Link>
        <Link to={'/lips'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>LIPS</li></Link>
        <Link to={'/eyes'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>EYES</li></Link>
        <Link to={'/face'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>FACE</li></Link>
        <Link to={'/nails'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>NAILS</li></Link>
        <Link to={'/skin'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>SKIN</li></Link>
        <Link to={'/offers'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>OFFERS</li></Link>
        <Link to={'/gifting'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>GIFTING</li></Link>
        <Link to={'/sugar-play'}><li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>SUGAR PLAY</li></Link>
      </ul>
      <div className='w-[20%] h-[100%] flex justify-center items-center'>
        <div className='flex justify-evenly items-center w-[80%] h-[100%] text-lg'>
          <i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={handleSearch}></i>
          {login.username
            ? <div className='flex items-center relative'>
              <Link to={'/login'}><p className='text-sm font-bold me-2'>Hi, {login.username}</p></Link>
              <i className={`fa-solid fa-angle-down duration-200 ${toggleDown ? null : 'rotate-[180deg]'}`} onClick={handleDropdown}></i>
              <div className={`border border-[gray] bg-white w-[150px] h-[70px] flex flex-col justify-evenly rounded overflow-hidden absolute duration-200 ${toggleDown ? 'bottom-[-70px] opacity-0 invisible' : 'bottom-[-80px] opacity-100 visible'}`}>
                <p className='w-full h-[35px] text-black font-bold text-sm flex items-center ps-4 hover:bg-black hover:text-white' onClick={handleLogout}>Logout</p>
                <p className='w-full h-[35px] text-black font-bold text-sm flex items-center ps-4 hover:bg-black hover:text-white' onClick={handleDelete}>Delete Account</p>
              </div>
            </div>
            : <Link to={'/login'}><i className="fa-solid fa-user cursor-pointer"></i></Link>}
          <Link to={'/cart'}>
            <i className="fa-solid fa-cart-shopping cursor-pointer relative">
              {cartLangth > 0 ? <span className={`absolute top-[-12px] right-[-9px] text-[7px] w-[15px] h-[15px] rounded-full flex justify-center items-center ${scrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>{cartLangth}</span> : ''}
            </i>
          </Link>
        </div>
      </div>

      <div>
        <div className='border border-white w-[30%] h-[40px] bg-white flex justify-between items-center rounded overflow-hidden absolute top-[30px] left-[30%] opacity-[0] invisible duration-300 group-hover:bg-black' ref={searchRef}>
          <i className="fa-solid fa-magnifying-glass w-[40px] h-[100%] text-black cursor-pointer group-hover:text-white" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></i>
          <input type="text" placeholder='Search For Lipsticks, Eyeliner, Foundations' className='w-[350px] h-[40px] rounded text-black text-xs font-bold outline-none placeholder:text-black group-hover:placeholder:text-white group-hover:text-white' onChange={handleSearchData} />
          <i className="fa-solid fa-xmark w-[40px] h-[50px] cursor-pointer text-black group-hover:text-white" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='close' onClick={handleClose}></i>
        </div>
        {search
          ? <div className='bg-white w-[70%] h-[400px] rounded-b-lg absolute left-[30%] top-[100px] overflow-hidden overflow-scroll grid grid-cols-4 p-5 gap-5 cursor-default'>
            {searchData.map((e) => {
              return <Link to={`/single-page/${e.id}`}>
                <div className='border border-[gray] hover:border-2 hover:border-black w-[100%] h-[360px] rounded bg-white p-5 cursor-pointer'>
                  <div className='w-full h-[70%] flex justify-center items-center'>
                    <img src={e.image1} alt="" className='w-full h-full' />
                  </div>
                  <div className='w-full h-[30%] flex flex-col justify-center items-center'>
                    <p className='text-black text-xs font-bold text-center'>{e.title}</p>
                    <p className='mt-3 text-[green] text-xs font-bold text-center'>RS. {e.price} {e.mrp ? <span className='text-[gray]'><del>RS. {e.mrp}</del></span> : null}</p>
                  </div>
                </div>
              </Link>
            })
            }
          </div>
          : null}
      </div>

      <div className='w-full h-screen fixed top-[-30px] opacity-0 invisible duration-300 bg-black/70 flex justify-center items-center cursor-default' ref={DeleteBox}>
        <div className='border border-[gray] w-[60%] h-[350px] bg-black rounded-lg flex p-5'>
          <div className='w-[60%] h-full flex flex-col items-center'>
            <div className='flex mt-10'>
              <img src="https://d1nl4izteao6lk.cloudfront.net/uploads/1733839119847_sugar%20logo.png" alt="" className='w-[150px] me-10' />
              <img src="https://d1nl4izteao6lk.cloudfront.net/kwikpass_logo_lib/kp_space_bottom_4.svg" alt="" />
            </div>
            <p className='text-xl text-white font-bold mt-5'>Rule the world, one look at a time ;)</p>
          </div>
          <div className='border border-white w-[40%] h-full bg-white rounded-md'>
            <form action="" className='w-full h-full flex flex-col justify-center items-center p-10'>
              <p className='text-xl text-black font-bold mb-3'>Delete Your Account</p>
              <input type="text" placeholder='Enter Your Email' className='border border-black text-black text-xs w-full h-[40px] rounded ps-5 mt-5' autoComplete='off' name='email' onChange={handleChange} />
              <input type="text" placeholder='Enter Your Password' className='border border-black text-black text-xs w-full h-[40px] rounded ps-5 mt-5' autoComplete='off' name='password' onChange={handleChange} />
              <button className='border border-black w-full h-[40px] rounded mt-5 text-black font-bold relative cursor-pointer relative z-0 group hover:text-white duration-500 before:content before:w-0 before:h-full before:bg-black before:absolute before:bottom-0 before:left-0 before:z-[-1] before:duration-500 hover:group-hover:before:w-full' onClick={delSubmit}>Submit</button>
            </form>
          </div>
        </div>
        <i className="fa-solid fa-square-xmark absolute top-[160px] right-[280px] text-2xl text-white cursor-pointer" onClick={CloseDelBox}></i>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default NavbarCode
