import '../styles/globals.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SecondNavbar from '../../components/SecondNavbar'
import FirstNavbar from '../../components/FirstNavbar'
import Footer from '../../components/Footer'
import Testimonial from '../../components/TestimonialSection'
import MessengerPlugin from '../../components/MessengerPlugin'

export default function App({ Component, pageProps }) {
  return <>

    <FirstNavbar />
    <SecondNavbar />
    <Component {...pageProps} />
    {/* <Testimonial/> */}
    <Footer />
    <ToastContainer/>
    {/* <MessengerPlugin/> */}

  </>
}
