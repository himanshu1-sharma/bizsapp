import Head from 'next/head'
import Navigation from "./includes/Navigation";
import Footer from "./includes/Footer";
import BeforeFooter from "./includes/BeforeFooter";
import Header from './download/Header';
import DownloadCard from './download/DownloadCard';

export default function download() {
    return(
        <>
            <Head>
                <title>BizsApp</title>
                <meta name="description" content="Generated by Bizsapp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Header />
            <DownloadCard />
            <BeforeFooter />
            <Footer />
        </>
    )
};
