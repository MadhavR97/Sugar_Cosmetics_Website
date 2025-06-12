import React, { useEffect, useRef, useState } from 'react'
import './section5.css'
import axios from 'axios'
import video1 from '../assets/video/InstaVideo1.mp4'
import video2 from '../assets/video/InstaVideo2.mp4'
import video3 from '../assets/video/InstaVideo3.mp4'
import video4 from '../assets/video/InstaVideo4.mp4'
import video5 from '../assets/video/InstaVideo5.mp4'
import video6 from '../assets/video/InstaVideo6.mp4'

function Section5() {

    let [video, setVideo] = useState([])
    let [boxVideo, setBoxVideo] = useState([])
    let videoBox = useRef(null)
    let videoRef = useRef(null)
    let [videoPath, setVideoPath] = useState()

    useEffect(() => {
        axios.get(`https://sugar-cosmetics-db-deploy.onrender.com/video`)
            .then((res) => {
                setVideo(res.data)
            })
    }, [])

    let handleVideo = (id, videoLink) => {
        videoBox.current.style.display = 'flex'
        let a = video.filter((el) => {
            if (el.id == id) {
                return el
            }
        })
        setBoxVideo(a[0])
        setVideoPath(videoLink)
    }

    let videoBoxClose = () => {
        videoBox.current.style.display = 'none'
    }

    return (
        <div className='w-full'>
            <div className='w-full h-[100px] flex justify-center items-center'>
                <p className='font-bold text-xl tracking-widest'>SUGAR INSTA</p>
            </div>
            <div className='w-full grid grid-rows-1 grid-cols-6 p-3 gap-3'>
                <div className='overflow-hidden rounded cursor-pointer' ref={videoRef} onClick={() => { handleVideo(1, video1) }}>
                    <video src={video1} className='object-contain' autoPlay muted loop></video>
                </div>
                <div className='overflow-hidden rounded cursor-pointer' ref={videoRef} onClick={() => { handleVideo(2, video2) }}>
                    <video src={video2} className='object-contain' autoPlay muted loop></video>
                </div>
                <div className='overflow-hidden rounded cursor-pointer' ref={videoRef} onClick={() => { handleVideo(3, video3) }}>
                    <video src={video3} className='object-contain' autoPlay muted loop></video>
                </div>
                <div className='overflow-hidden rounded cursor-pointer' ref={videoRef} onClick={() => { handleVideo(4, video4) }}>
                    <video src={video4} className='object-contain' autoPlay muted loop></video>
                </div>
                <div className='overflow-hidden rounded cursor-pointer' ref={videoRef} onClick={() => { handleVideo(5, video5) }}>
                    <video src={video5} className='object-contain' autoPlay muted loop></video>
                </div>
                <div className='overflow-hidden rounded cursor-pointer' ref={videoRef} onClick={() => { handleVideo(6, video6) }}>
                    <video src={video6} className='object-contain' autoPlay muted loop></video>
                </div>
            </div>
            <div className='w-full h-screen fixed top-0 z-1 flex justify-center items-center hidden' ref={videoBox} id='videoBox'>
                <i className="fa-solid fa-square-xmark absolute top-10 right-10 text-4xl cursor-pointer text-white" onClick={videoBoxClose}></i>
                <div className='w-[60%] h-[80%] bg-white rounded-xl overflow-hidden flex'>
                    <div className='w-[40%] h-full flex justify-start'>
                        <video src={videoPath} className='h-full' autoPlay muted loop></video>
                    </div>
                    <div className='w-[60%] h-full'>
                        <div className='w-full h-[100px] flex items-center'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExNGRkYwMDBkZGS/v79WVlaEhIT///93d3fQ0NDx8fGTk5OwsLCamprX19fh4eFaAY0/AAAADHRSTlMAFUiXzvr/eN9HY+xtY4xhAAAA80lEQVR4AYSShXbAIAxF0dSxsOr//+cY0FRmr9574mGnuJBKA2glBWdP8aYFUts8cKfgIdVdrB/gpaH/nV20u7NxMpVmz7zGm2x+WOdrXJ5gU95NKCYBXbVtkmGtIX6YbDgjVtOWMwFQLZYRYHSIaKFIMElwTnRcEYuLJMnO8iPi7CyYZfPUCqbrm5/xC3u4pBm9LphUnVZdEKY909leUMMlu8+IVCdoSsiELYwQk/XsKSF5WpUCzXrVKa8mJBgh06sJvCV4TKXzE7XvbLzHo1jECNR4GlksWZoJrpFdw/b1Nw373zX5HPYEhi9pEk7UeLMDANW7FfOnVuWXAAAAAElFTkSuQmCC" alt="" className='w-[40px] h-[40px] rounded-full' />
                            <p className='text-lg font-bold ms-3 tracking-wider'>trysugar</p>
                        </div>
                        <p className='font-bold mt-5'>{boxVideo.title1}</p>
                        <p className='font-bold text-[gray] mt-5'>Product:</p>
                        <ul>
                            <li className='text-sm mt-2 ms-3'>{boxVideo.Points1}</li>
                            <li className='text-sm mt-2 ms-3'>{boxVideo.Points2}</li>
                            <li className='text-sm mt-2 ms-3'>{boxVideo.Points3}</li>
                            <li className='text-sm mt-2 ms-3'>{boxVideo.Points4}</li>
                            <li className='text-sm mt-2 ms-3'>{boxVideo.Points5}</li>
                            <li className='text-sm mt-2 ms-3'>{boxVideo.Points6}</li>
                        </ul>
                        <p className='mt-10 font-bold'>{boxVideo.title2}</p>
                        <p className='mt-5 text-sm text-[gray] tracking-widest'>{boxVideo.hastag}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5
