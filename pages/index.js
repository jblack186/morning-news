import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component, useState } from "react";


export default function Index({news}) {


console.log('news', news)
    return (
  <Layout>
    <div className='home-container'>
    {/* <Link href='/about'>
      <a>Go to about</a>
    </Link> */}
    {/* <div>
      <h1>Home</h1>
      <p>Welcome</p>
    </div> */}
    <section className='top-container'>
      <div className='editors-part'>
        <h3 className='editors'>Editor's Pick</h3>
        <p>hoewienw</p>
      </div>
      <div className='right-top-article'>
        <div>img</div>
        <div className='top-bottom-articles'>
          <div>img</div>
          <div>img</div>
        </div>
      </div>
    </section>
    <style jsx>{`
      .home-container {
        min-height: 90vh;
        height: 100%;
        background-color: whitesmoke;
      }

      .top-container {
        margin: 0 auto;
        padding-top: 100px;
        width: 80%;
        display: flex;
        justify-content: space-between;

      }

      @media screen and (max-width: 1000px) {
        .top-container {
          display: flex;
          flex-direction: column;
        }
      }
      

      .editors-part {
        width: 40%;
        height: 500px;
        border: solid black 1px;

      }

      .editors {
        margin: 0;
      }

      .right-top-article {
        width: 60%;
        height: 500px;
        border: solid black 1px;

      }

      .top-bottom-articles {
        display: flex;
      }

    
  `}</style>

    </div>
  </Layout>

    )}
    

    Index.getInitialProps = async () => {
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831
      `);
      const data = await res.json();
      
      return {news: data}
    }
