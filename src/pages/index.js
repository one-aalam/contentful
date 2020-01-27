import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Meta from '../components/Meta';
import { logEvent } from '../utils/analytics';
import matter from 'gray-matter'
import BlogList from '../components/BlogList';

let client;
if (typeof window === undefined) {
  client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
}

const cardClick = () => {
  logEvent('Article', 'viewed', 'Campaign 1')
}

const Home = ({ allBlogs }) =>  (
  <Layout>
    {/* <Head>
      <title>Home</title>
    </Head> */}
    <Meta siteTitle={'Contentful -- Homepage'} description={'Yur at the HomePage of Contentful'}/>
    <Nav />
    <div className='hero'>
      <h1 className='title'>Welcome to Contentful</h1>

      {/* <div className='row'>
        <Link href='https://github.com/zeit/next.js#getting-started'>
            <a className='card'  onClick={cardClick}>
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next.js on GitHub and in their examples</p>
            </a>
        </Link>
        <Link href='https://github.com/zeit/next.js/tree/master/examples'>
          <a className='card'>
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub</p>
          </a>
        </Link>
        <Link href='https://github.com/zeit/next.js'>
          <a className='card'>
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </Link>
      </div> */}

      <BlogList allBlogs={allBlogs}/>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </Layout>
)

Home.getInitialProps = async () => {
  const siteConfig = await import(`../data/config.json`)
  //get posts & context from folder
  const posts = (context => {
   const keys = context.keys();
   const values = keys.map(context);
   const data = keys.map((key, index) => {
     // Create slug from filename
     const slug = key
       .replace(/^.*[\\\/]/, "")
       .split(".")
       .slice(0, -1)
       .join(".");
     const value = values[index];
     // Parse yaml metadata & markdownbody in document
     const document = matter(value.default);
     return {
       document,
       slug
     };
   });
   return data;
 })(require.context("../posts", true, /\.md$/));

 return {
   allBlogs: posts,
   ...siteConfig,
 }
}

export default Home
