import '../styles/globals.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SecondNavbar from '../../components/SecondNavbar'
import FirstNavbar from '../../components/FirstNavbar'
import Footer from '../../components/Footer'
import Testimonial from '../../components/TestimonialSection'
import NextNProgress from 'nextjs-progressbar';
import MessengerPlugin from '../../components/MessengerPlugin';

export default function App({ Component, pageProps }) {
  return <>

    <FirstNavbar />
    <SecondNavbar />
    <NextNProgress color="#ea80fc" startPosition={0.3} stopDelayMs={200} height={3} />
    <Component {...pageProps} />
    {/* <Testimonial/> */}
    <Footer />
    <ToastContainer/>
    <MessengerPlugin />

  </>
}
