import '../styles/globals.css'
import SecondNavbar from '../../components/SecondNavbar'
import FirstNavbar from '../../components/FirstNavbar'
import Footer from '../../components/Footer'

export default function App({ Component, pageProps }) {
  return <>

    <FirstNavbar />
    <SecondNavbar />
    <Component {...pageProps} />
    <Footer />

  </>
}
