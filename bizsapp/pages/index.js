import Head from 'next/head'
import Faq from './Home/Faq'
import Feature from './Home/Feature'
import FeatureSlider from './Home/FeatureSlider'
import Header from './Home/Header'
import PhoneSlider from './Home/PhoneSlider'
import Footer from './includes/Footer'
import Navigation from './includes/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>BizsApp</title>
        <meta name="description" content="Generated by Bizsapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Header />
      <Feature />
      <FeatureSlider />
      <Faq />
      <Footer />
    </>
  )
}
