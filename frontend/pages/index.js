import Link from 'next/link';
import { withRouter } from 'next/router';
import Image from 'next/image';

import styles from '../src/styles/index.module.css';

const IndexPage = (props) => (
    <>
        <style jsx>
            {`
                .icecream-container {
                    width: 500px;
                    margin: 32px auto;
                }
            `}
        </style>
        <h1 className={styles.heading}>Index Page</h1>
        <div className={styles.linksContainer}>
            <Link href="/teachersDeck">I'm a teacher</Link>
            <Link href="/middlePage">I'm a student</Link>
        </div>
    </>
);

export default withRouter(IndexPage);