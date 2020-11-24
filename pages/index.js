import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from "react";


const Index = () =>( 
  <Layout>
    <div className='home-container'>
    {/* <Link href='/about'>
      <a>Go to about</a>
    </Link> */}
    {/* <div>
      <h1>Home</h1>
      <p>Welcome</p>
    </div> */}
    <style jsx>{`
      .home-container {
        min-height: 90vh;
        height: 100%;
        background-color: whitesmoke;
      }
    
  `}</style>

    </div>
  </Layout>
    
)
export default Index;