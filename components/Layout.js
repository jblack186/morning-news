import Link from 'next/link';
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { Component, useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { motion, useViewportScroll } from "framer-motion"


export default function Layout ({children, title})  {
  const [lastYPos, setLastYPos] = useState(0);
  const [popOut, setPopOut] = useState(false);

  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      console.log(yPos)
      if(yPos > 120) {
        setPopOut(true)
      } else {
        setPopOut(false)
      }
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [popOut]);
  console.log(popOut)

return (
  <div>

    <Head>
      <title>TechyNews</title>
    </Head>
    <header>
        <div className='head-container'>
          <div className='site-name'>
          <img className='logo' src="../static/logo.png" alt="logo" />
          </div>
          <div className='icons'>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
            <nav className={popOut === false ? 'nav-one' : 'nav-two'}>
              <div className='nav-container'>
                <a className='search'>
                  <FontAwesomeIcon icon={faSearch} />
                </a>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/hireme">
                  <a>Hire Me</a>
                </Link>
                <Link href="/blog">
                <a>Blog</a>
              </Link>
              </div>
            </nav>
          </div>
      </header>
     {/* <h1>{title}</h1> */}
      {children}
    <footer>
    <section className='footer-container'>
      <div className='footer-left'>
          <Link href="/">
              <a>Home</a>
          </Link>
          <Link href="/about">
              <a>About</a>
          </Link>
          <Link href="/hireme">
            <a>Hire Me</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
      </div>
      <div className='footer-right'>
          <img className='footer-logo' src="../static/logo.png" alt="logo" />
<p>@ Copyright - 2020</p>
      </div>

              </section>

    </footer>
    <style jsx>{`
  
  header {
    width: 100%;
    height: 10vh;
    background-color: #0d42a2;
    position: relative;

  }

  .head-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 82%;
    margin: 0 auto;
    padding-top: 15px;
  }

  header .site-name {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  header .site-name img{
    object-fit: cover;
    width: 200px;
  }

  header .icons{
    margin: 0;
    padding: 0;
    color: #aaa;
    width: 15%;
    display: flex;
    justify-content: space-between;

  }

  .nav-one {
    position: absolute;
    height: 55px;
    width: 82%;
    background-color: white;
    top: 70%;
    left: 50%;
    margin-left: -41%;
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.3); 
    display: flex;
    align-items: center;
    justify-content: flex-start;

  }



  .nav-two {
    position: fixed;
    height: 55px;
    width: 100%;
    left: 0;
    background-color: white;
    top: 0%;
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.3); 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 99999999;
    animation: popOut .4s ease;
  
  }

  @keyframes popOut {
    from {height: 0px;}
    to {height: 55px;}
  }

  .nav-container {
    height: 40px;
    align-items: center;
    width: 60%;
    display: flex;
    justify-content: space-between;

  }

  nav .search {
    height: 35px;
    width: 50px;
    margin-left: 15px;
    background: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  nav a {
    list-style: none;
    text-decoration: none;
    color: black;
    font-weight: bold;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

  }



  footer {
    background: #0d42a2;
    color: #d1d1d1;
    font-size: 1rem;
    font-weight: 200;

  }

  .footer-container {
    height: 200px;
    background: #0d42a2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }

  .footer-left {
    display: flex;
    width: 300px;
    justify-content: space-around;

  }

  .footer-right {
    display: flex;
    flex-direction: column;

  }

  .footer-right img {
    width: 200px;
    object-fit: contain;
  }


  .footer-container a {
    text-decoration: none;
    font-weight: 200;
    color: #d1d1d1;
  }



`}</style>
    <style global jsx>{`
      body {
        font-family: 'Libre Baskerville', serif;
        margin: 0;
        font-size: 110%;
      }

      p {
        font-weight: 800;
      }
    `}</style>

  </div>
)
    }


