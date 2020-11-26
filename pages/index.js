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

const author =  news.docs.map(art => {
  if (art.byline) {
    
   return art.byline.original }
})

const snippet =  news.docs.map(art => {
  if (art.snippet) {
    
   return art.snippet }
})



// console.log('gear',gear)

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
      <li>
        <p>{text[0]}</p>
        <p className='author'>{author[0]}</p>
      </li>
      <li>
        <p>{text[1]}</p>
        <p className='author'>{author[1]}</p>
      </li>
      <li>
        <p>{text[2]}</p>
        <p className='author'>{author[2]}</p>
      </li>
      <li>
        <p>{text[3]}</p>
        <p className='author'>{author[3]}</p>
      </li>


      </div>
      <div className='right-top-article'>
      <div className='top-article'>
        <div className='top-flex'>
          <h4>Top Story</h4>
          <p>{text[4]}</p>
          <p className='snippet'>{snippet[4]}</p>
          <p className='snippet by'>{author[4]}</p>
        </div>
          <img className='top-image' src={`https://static01.nyt.com/${image[4]}`} alt='top-article' />
          </div>

        <div className='top-bottom-articles'>
          <div className='bottom-article'>
            <img className='top-image' src={`https://static01.nyt.com/${image[5]}`} alt='top-article' />
            <p>{text[5]}</p>
            <p className='bottom-author'>{author[5]}</p>

          </div>
          <div className='bottom-article'>
          <img className='top-image' src={`https://static01.nyt.com/${image[6]}`} alt='top-article' />
          <p>{text[6]}</p>
          <p className='bottom-author'>{author[6]}</p>

          </div>
        </div>
      </div>
    </section>
    <img className='circles' src="/static/circles.png" alt="circles" width="100%" objectFit="cover" height="100px"/>
    <section className='features'>
      <h4>GEAR UP WITH SOME TECH</h4>
      <div className='gear'>
        <div className='gear-article'>
            <img className='gear-image' src={`https://static01.nyt.com/${image[7]}`} alt='mid-article' />
            
            <div className='gear-text'>
              <div className='text-container'>
                <p className='feat-tag'>Featured</p>
                <p className='text'>{text[7]}</p>
                <p className='gear-author'>{author[7]}</p>
              </div>
            </div>
        </div>
        <div className='gear-article'>
            <img className='gear-image' src={`https://static01.nyt.com/${image[8]}`} alt='mid-article' />
            
            <div className='gear-text'>
              <div className='text-container'>
                <p className='feat-tag'>Featured</p>
                <p className='text'>{text[8]}</p>
                <p className='gear-author'>{author[8]}</p>
              </div>
            </div>
        </div>
        <div className='gear-article'>
            <img className='gear-image' src={`https://static01.nyt.com/${image[9]}`} alt='mid-article' />
            <div className='gear-text'>
              <div className='text-container'>
                <p className='feat-tag'>Featured</p>
                <p className='text'>{text[9]}</p>
                <p className='gear-author'>{author[9]}</p>
              </div>
            </div>
        </div>
        <div className='gear-article'>
            <img className='gear-image' src={`https://static01.nyt.com/${image[9]}`} alt='mid-article' />
            <div className='gear-text'>
              <div className='text-container'>
                <p className='feat-tag'>Featured</p>
                <p className='text'>{text[9]}</p>
                <p className='gear-author'>{author[9]}</p>
              </div>
            </div>
        </div>

      </div>
    </section>
    
    <section className='trending-container'>
      {/* <h3>Trending in Tech </h3> */}
    </section>
    <img className='circles' src="/static/circles2.png" alt="circles" width="100%" objectFit="cover" height="100px"/>

    <style jsx>{`

    .top-image {
      width: 100px;
    }
      .home-container {
        height: 100%;
        background-color: whitesmoke;
        
      }

      .top-container {
        margin: 0 auto;
        padding-top: 100px;
        width: 82%;
        display: flex;
        justify-content: space-between;
        height: 820px;
        padding-bottom: 100px;
      }

      @media screen and (max-width: 1000px) {
        .top-container {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      }

      .editors-part {
        heigth: 90%;
        width: 32%;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;

      }


      
      .editor-pick {
        margin: 0;
        color: #0d42a2;
        font-size: 2.3rem;
        font-weight: 800;
     }

     .editors-part li {
       list-style: none;
     }

     .author {
       font-size: .9rem;
       color: #aaa;
       border-bottom: 1px solid lightgray;
       padding-bottom: 15px;
     }

     .author.last {
       border: none;
      padding-bottom: 0;

     }

      .editors {
        margin: 0;
      }

      .right-top-article {
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;

      }

      .top-article {
        display: flex;
        border: solid lightgray 2px;
        margin-left: 12px;
        height: 350px;
        background: whitesmoke;

      }

      .top-flex {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .top-article h4 {
        width: 77%;
        margin: 0 auto;
        padding-top: 20px;
        color: #0d42a2;

      }
      
      .top-article p {
        width: 77%;
        margin: 0 auto;
        
      }

      .top-article img {
        width: 65%;
        object-fit: cover;
      }

      .snippet {
        color: #aaa;
        font-size: 1rem;
        font-weight: 200;
        line-height: 20px;
      }

      .snippet.by {
        color: #0d42a2;

      }


      .top-bottom-articles {
        display: flex;
        margin-left: 12px;
        justify-content: space-between;
        flex-wrap: wrap;

      }

      .top-bottom-articles img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      .bottom-article {
        width: 48%;
        border: solid 2px lightgray;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .bottom-article p {
        padding-left: 12px;
        height: 35px
      }

      .bottom-author {
        color: #0d42a2;
        font-size: 1rem;
        font-weight: 200;
      }

      .circles {
        object-fit: cover;
       
      }

      .features {
        background: #006666;
        height: 280px;
        width: 100%;
        position: relative;
        display: flex;
        
      }

      .features h4 {
        color: white;
        font-size: 2rem;
        margin-left: 200px;
        margin-top: 100px;
      }
      

      .gear {
        position: absolute;
        top: 180px;
        width: 100%;
        // height: 250px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        
      }

      .gear p {
        color: white;
      }

      .gear-article {
        // height: 420px;
        width: 250px;
        background: whitesmoke;
        display: flex;
        flex-direction: column;

      }

      .gear img {
        width: 250px;
        heigth: 380px
        object-fit: cover;
        border-left: white solid 2px;
        border-top: white solid 2px;
        border-right: white solid 2px;

      }

      .gear-text {
        background: whitesmoke;
        height: 200px;
        width: 250px;
        border-left: lightgray solid 2px;
        border-bottom: lightgray solid 2px;
        border-right: lightgray solid 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

      }

      .text-container {
        width: 70%;
        margin: 0 auto;
      }

      .gear-text p.feat-tag {
        color: #0d42a2;
        margin: 0;
        padding-top: 10px;
      }

      .gear-text p {
        color: black;

      }

      .gear-para {

      }


      .gear-text p.gear-author {
        color: #aaa;
        font-size: 1rem;
        font-weight: 200;
      }

      .trending-container {
        height: 400px;
        background: white;
      }

      .text {
        height: 70px;
      }

    
  `}</style>

    </div>
  </Layout>

    )}
    

    Index.getInitialProps = async (ctx) => {
      const {query} = ctx
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831
      ` );
      const data = await res.json();

      return {news: data.response}
    


  }