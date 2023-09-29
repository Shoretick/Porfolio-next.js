import '@/styles/globals.css';
import { Arimo } from 'next/font/google';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';



const montserrat = Arimo({
  subsets:['latin'],
  variable:'--font-mont',
  display: 'swap',
  
})

export default function App({ Component, pageProps }) {
  return (
  <>

  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className= { `${montserrat.variable} font-mont bg-light w-full min-h-screen`}> 
  <NavBar className=""></NavBar>
    <Component {...pageProps} />
    <Footer></Footer>
   
  </main> 

  </>
    
  )
  
  
}
