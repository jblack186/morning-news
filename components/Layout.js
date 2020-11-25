import Link from 'next/link';
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

export default ({children, title}) => (
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
            <nav>
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
    {/* <footer>footer</footer> */}
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
    padding-top: 5px;
  }

  header .site-name {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  header .icons{
    margin: 0;
    padding: 0;
    color: white;
    width: 15%;
    display: flex;
    justify-content: space-between;

  }

  nav {
    position: absolute;
    height: 45px;
    width: 82%;
    background-color: white;
    top: 76%;
    left: 50%;
    margin-left: -41%;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5); 
    display: flex;
    align-items: center;
    justify-content: flex-start;

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

  .logo {

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


