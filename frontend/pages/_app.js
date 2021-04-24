import Head from 'next/head';
import "../src/styles/styles.css";
import {SocketContextProvider} from "../src/context/SocketContext"

const CustomApp = ({ Component, pageProps }) => (
    <>
        <style jsx global>
            {`
                a {
                    color: maroon;
                }
            `}
        </style>
        <Head>
            <title>Learn Next.js</title>
        </Head>
        <SocketContextProvider>
            <Component {...pageProps} />
        </SocketContextProvider>
    </>
);

export default CustomApp;