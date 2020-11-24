import Link from 'next/link';
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

export default ({children, title}) => (
  <div>
    <Head>
      <title></title>
    </Head>
    <header>
        <div className='site-name'>
          <p>TechNews</p>
        </div>
        <div className='icons'>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <nav>
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
        </nav>
      </header>
     {/* <h1>{title}</h1> */}
      {children}
    {/* <footer>footer</footer> */}
    <style jsx>{`
  
  header {
    width: 100%;
    height: 10vh;
    background-color: #0d42a2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  header .site-name {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header .icons{
    margin: 0;
    padding: 0;
    color: white;
    width: 15%;
    display: flex;
    justify-content: space-around;

  }

  nav {
    position: absolute;
    height: 40px;
    width: 80%;
    background-color: white;
    top: 79%;
    left: 50%;
    margin-left: -40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5); 
  }

  nav a {
    list-style: none;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

`}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
  
      }
    `}</style>

  </div>

)


