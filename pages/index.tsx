import type { NextPage } from "next";

import Head from "next/head";
//import Menu from "../components/Menu";
import About from "../components/About";
import Footer from "../components/Footer";

import "bulma/css/bulma.min.css";
import Menu from "../components/Menu";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>EnderCrates | The PocketMine plugin registry</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <About />
            <Footer />
        </div>
    );
};

export default Home;