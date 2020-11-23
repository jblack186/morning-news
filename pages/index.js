import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from "react";


const Index = () =>( 
  <Layout>
    <Link href='/about'>
      <a>Go to about</a>
    </Link>

    <h1>Home</h1>
    <p>Welcome</p>
  </Layout>
)
export default Index;