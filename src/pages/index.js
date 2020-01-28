import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout'
import { logEvent } from '../utils/analytics';
import matter from 'gray-matter'
import Banner from '../components/Banner';
import MediaCard from '../components/MediaCard';
import NewsCard from '../components/NewsCard';
import PromoCard from '../components/PromoCard';

let client;
if (typeof window === undefined) {
  client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
}

const newsreelLinkClicked = () => {
  logEvent('Article', 'viewed', 'Newsreel')
}

const promoCardClicked = () => {
  logEvent('Promo', 'viewed', 'Homepage')
}

const newsCardClicked = () => {
  logEvent('News', 'viewed', 'Homepage')
}

const mediaCardClicked = () => {
  logEvent('Media', 'viewed', 'Homepage')
}

const Home = ({ allBlogs, allCampaigns }) =>  (
  <Layout siteTitle={'Analytics Times -- Homepage'} description={'Yur at the HomePage of Analytics Times'}>
    <div className='hero'>

      <div className="newsreel w-100 b--dashed bw-1 b--dark-green bg-yellow">
          <marquee>{allBlogs.map(post => (
            <Link
              key={post.slug}
              href={{ pathname: `/news/${post.slug}` }}
            >
              <a className="" onClick={newsreelLinkClicked}><span className="f5 f4-ns mv0">{post.document.data.title} &rarr;&nbsp;&nbsp;</span></a></Link>))}
          </marquee>
      </div>

      <div className="container">
          <div className="frontpage">
              <div className="fp-cell fp-cell--1">
                  <div className="fp-item mw7 center avenir">

                    {
                    allBlogs.map(post => (
                      <Link
                        key={post.slug}
                        href={{ pathname: `/blog/${post.slug}` }}
                      >
                      <a className="" onClick={newsCardClicked}>
                        <NewsCard post={post} />
                      </a>
                      </Link>
                    ))}

                  </div>
              </div>
              <div className="fp-cell fp-cell--2">
                  <div className="fp-item">
                      <Banner campaign={allCampaigns[0]} />
                  </div>
              </div>
              <div className="fp-cell fp-cell--3">
                  <div className="fp-item--grid">

                      {
                      allBlogs.map(post => (
                        <Link
                          key={post.slug}
                          href={{ pathname: `/media/${post.slug}` }}
                        >
                        <a className="" onClick={mediaCardClicked}>
                          <MediaCard post={post} />
                        </a>
                        </Link>
                      ))}

                  </div>
              </div>
              <div className="fp-cell fp-cell--4">
                <div>
                <h1 className="f3 fw1 baskerville mt0 lh-title">Elsewhere on the web!</h1>
                  <div className="promo-grid">
                      {
                      allBlogs.map(post => (
                        <Link
                          key={post.slug}
                          href={{ pathname: `/promo/${post.slug}` }}
                        >
                        <a className="" onClick={promoCardClicked}>
                          <PromoCard post={post}/>
                        </a>
                        </Link>
                      ))}

                  </div>
                  </div>
              </div>
          </div>
      </div>
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
      }
      .title,
      .description {
        text-align: center;
      }

      .newsreel {
        padding: 6px 4px;
      }

      .promo-grid {
        display: grid;
        padding: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-row-gap: 1.2rem;
        grid-column-gap: .8rem;
        grid-auto-flow: row;
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

      .container {
        border-top: 1px solid #DADCE0;
        overflow-x: hidden;
      }

      .frontpage {
        margin: 0 -17px 0 -16px;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      .fp-cell {
        padding: 16px;
        background-color: #fff;
        border-right: 1px solid #DADCE0;
        border-bottom: 1px solid #DADCE0;
      }

        .fp-cell--1 {
          grid-row: 1 / span 2;
        }

        .fp-cell--2 {
          grid-column: 2 / span 2;
        }

        .fp-cell--3 {
          grid-column: 2;
        }

        .fp-item {
          background-color: #efefef;
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // min-height: 200px;
          height: 100%;
        }

        .fp-item--grid {
          display: grid;
          grid-template-columns: 1fr;
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

 const campaigns = (context => {
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
})(require.context("../campaigns", true, /\.md$/));

 return {
   allBlogs: posts,
   allCampaigns: campaigns,
   ...siteConfig,
 }
}

export default Home
