// pages/login.js
import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/styles.module.css';
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will want to replace the hardcoded users with a real authentication system
    const users = [
      { username: "admin", password: "password", role: "superuser" },
      { username: "user_a", password: "password", role: "a" },
      { username: "user_b", password: "password", role: "b" },
      { username: "user_c", password: "password", role: "c" },
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      login(user);
      Router.push("/inputData");
    } else {
      alert("Invalid credentials");
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <Image src="/imigrasi.png" alt="Your image description" width={100} height={100} />
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ display: 'block', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}
            />
          </label>
          <label className={styles.formLabel}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ display: 'block', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}
            />
          </label>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className={styles.loginButton} type="submit">
              Login
            </button>
          </div>
        </form>
        <Link href="/" passHref>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button className={styles.loginButton}>
              Back to Home
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;