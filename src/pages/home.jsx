import NavbarCode from '../component/navbar'
import headerVid from '../assets/video/sugar_header.mp4'
import Section1 from '../component/section1'
import Section2 from '../component/section2'
import Section3 from '../component/section3'
import Section4 from '../component/section4'
import Section5 from '../component/section5'
import Section6 from '../component/section6'
import Section7 from '../component/section7'
import Section8 from '../component/section8'
import Policy_3 from '../component/3_policy'
import Footer from '../component/footer'

function Home() {
  return (
    <div>
      <NavbarCode></NavbarCode>
      <div className={'w-[100%] h-[600px]'}>
        <video src={headerVid} className='w-[100%] h-[100%] object-fill' autoPlay muted loop></video>
      </div>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Policy_3></Policy_3>
      <Footer></Footer>
    </div>
  )
}

export default Home
