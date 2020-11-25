import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component, useState } from "react";


export default function Index({news}) {

 const image =  news.docs.map(art => {
     if (art.multimedia[0]) {
       
      return art.multimedia[0].url }
})

const text =  news.docs.map(art => {
  if (art.headline) {
    
   return art.headline.main }
})

const headline =  news.docs.map(art => {
  if (art.headline) {
    
   return art.headline.main }
})

console.log(text)

console.log('news', news)
console.log('img',image[1])
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
      <h4 className='editor-pick'>Editor's Pick</h4>
      <p>{text[4]}</p>
      <p>{text[5]}</p>
      <p>{text[6]}</p>
      <p>{text[7]}</p>
      <p>{text[3]}</p>
      <p>{text[3]}</p>
      <p>{text[3]}</p>

      </div>
      <div className='right-top-article'>
      <div>
          <img className='top-image' src={`https://static01.nyt.com/${image[3]}`} alt='top-article' />
          <p>{text[3]}</p>
          </div>

        <div className='top-bottom-articles'>
          <div>
            <img className='top-image' src={`https://static01.nyt.com/${image[0]}`} alt='top-article' />
            <p>{text[0]}</p>
          </div>
          <div>
          <img className='top-image' src={`https://static01.nyt.com/${image[1]}`} alt='top-article' />
          <p>{text[1]}</p>

          </div>
        </div>
      </div>
    </section>
    <style jsx>{`

    .top-image {
      width: 100px;
    }
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
      
      .editor-pick {
        margin: 0;
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
    

    Index.getInitialProps = async (ctx) => {
      const {query} = ctx
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831
      ` );
      const data = await res.json();
      
      return {news: data.response}
    }
