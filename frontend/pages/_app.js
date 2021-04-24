import Head from 'next/head';
import "../src/styles/styles.css";

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
        <Component {...pageProps} />
    </>
);

export default CustomApp;