// components/DashboardLayout.js
import React, { useState }from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/dashboard.module.css';

const DashboardLayout = ({ children }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Sistem Informasi Imigrasi</div>
        <div className={styles.menuItem} onClick={toggleSubMenu}>
        <Link href="/inputData" className={styles.menuItem}>
          <div>Input Data</div>
          </Link>
          {showSubMenu && (
          <div className={styles.subMenu}>
            <Link href="/urusan-kepegawaian-dan-umum" className={styles.menuItem}>
              <div>Urusan Kepegawaian dan Umum</div>
            </Link>
            <Link href="/pemeriksaan-imigrasi-kapal">
              <div>Pemeriksaan Imigrasi Kapal</div>
            </Link>
            {/* Add other submenu items as separate pages */}
          </div>
          )}
        </div>

      
          <Link href="/visualizeData" className={styles.menuItem}>
            <div >Visualise Data </div>
          </Link>
          <Link href="/UserSetting" className={styles.menuItem}>
            <div>User Setting</div>
        </Link>
        <div className={styles.logoutButton}>
        <div className={styles.logoutImageWrapper}> <Image src="/imigrasi.png" alt="Your image description" width={100} height={100} /></div>
        
        <Link href="/login"><button className={styles.logoutButton}>Logout</button></Link>
        </div>
        
        
      </div>
      <div className={styles.inputArea}>{children}</div>
    </div>
  );
};

export default DashboardLayout;