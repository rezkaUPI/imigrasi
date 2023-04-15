// pages/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/styles.module.css';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.loginBox}>
      <Image src="/imigrasi.png" alt="imigrasi" width={100} height={100} />    
      <h2 className={styles.title}>Imigrasi Banggai</h2>
      <Link href="/login" passHref>
        <button className={styles.loginButton}>Login</button>
      </Link>
    </div>
  </div>
);

export default Home;