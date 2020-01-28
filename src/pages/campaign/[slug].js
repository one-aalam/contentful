import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from '../../components/layout'
import { logEvent } from '../../utils/analytics';

const campaignClick = () => {
  logEvent('Campaign', 'clicked', 'CampaignPage')
}

export default function BlogTemplate(props) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }
  const markdownBody = props.content
  const frontmatter = props.data

  return (
    <Layout siteTitle={props.siteTitle} description={'Yur at the Blog of Contentful'}>
    <article>
      <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <time className="f6 mb2 dib ttu tracked"><small>{reformatDate(frontmatter.date)}</small></time>
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              {frontmatter.title}
            </span>
          </h3>
          <h4 className="f3 fw1 georgia i">The definitive guide to understand the benifits of X.</h4>
          <h5 className="f6 ttu tracked black-80">By {frontmatter.author}</h5>
        </div>
      </header>
      <div className="pa4 ph7-l georgia mw9-l center">
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
    </Layout>
    );

}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../campaigns/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  }
}