import Head from 'next/head';
import "../src/styles/styles.css";
import { SocketContextProvider } from "../src/context/SocketContext"

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
            <title>Kids Edu</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"/>
        </Head>
                <SocketContextProvider>
                    <Component {...pageProps} />
                </SocketContextProvider>
            </>
            );

            export default CustomApp;