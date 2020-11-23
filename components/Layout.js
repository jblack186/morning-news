import Link from 'next/link';
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

export default ({children, title}) => (
  <div>
    <Head>
      <title></title>
    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hireme"><a>Hire Me</a></Link>
    </header>
    <h1>{title}</h1>
      {children}
    <footer>footer</footer>
  </div>
)

