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
        {/* <!-- Primary Meta Tags --> */}
        <title>Simple.Secure. Reliable messaging.</title>
        <meta name="title" content="Simple.Secure.Reliable messaging." />
          <meta name="description" content="Generated by Bizsapp" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://43.204.34.207:3000/" />
            <meta property="og:title" content="Simple.Secure. Reliable messaging." />
            <meta property="og:description" content="Generated by Bizsapp" />
            <meta property="og:image" content="https://digrowfa.com/img/bizsapp-thumbnail.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://43.204.34.207:3000/" />
            <meta property="twitter:title" content="Simple.Secure. Reliable messaging." />
            <meta property="twitter:description" content="Generated by Bizsapp" />
            <meta property="twitter:image" content="https://digrowfa.com/img/bizsapp-thumbnail.png" />
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
