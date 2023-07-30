"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./HomePage.module.css";

const Home = () => {
  const handleGoToDocs = () => {
    // Redirect to the documentation page
    window.location.href = "/docs";
  };

  useEffect(() => {
    // Function to scatter the notification skeletons to random points on the page
  }, []);
  const Github = () => {
    window.open("https://github.com/Husienvora/Noti.io_client", "_blank");
    window.open("https://github.com/Husienvora/Noti.io_server", "_self");
  };

  return (
    <main>
      <Head>
        <title>Noti.io - Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <a
            onClick={() => {
              Github();
            }}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/husien-vora-0aa015223"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <h1 className={styles.title}>Welcome to Noti.io</h1>
        <p className={styles.description}>
          A npm package for setting up your Server to Client notifications
          easily.
        </p>
        <button className={styles.button} onClick={handleGoToDocs}>
          Go to Docs
        </button>
        {/* Notification Skeletons */}
      </div>
    </main>
  );
};

export default Home;
