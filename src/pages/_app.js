import '../styles/globals.css'
import SecondNavbar from '../../components/SecondNavbar'
import FirstNavbar from '../../components/FirstNavbar'
import Footer from '../../components/Footer'
import Testimonial from '../../components/TestimonialSection'

export default function App({ Component, pageProps }) {
  return <>

    <FirstNavbar />
    <SecondNavbar />
    <Component {...pageProps} />
    {/* <Testimonial/> */}
    <Footer />

  </>
}
