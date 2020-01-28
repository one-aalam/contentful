import React from 'react'
import Link from 'next/link'
import ReactMarkdown from "react-markdown";
import { logEvent } from '../utils/analytics';

const signupViewed = () => {
    logEvent('Signup', 'opened', 'Banner')
}
const signupKnowMore = () => {
    logEvent('Signup', 'interested', 'Banner')
}
const campaignViewed = () => {
    logEvent('Campaign', 'viewed', 'Banner')
}

const Banner = ({ campaign }) => (
    <article className="center ph3 ph5-ns tc br2 pv6 bg-washed-green dark-green" onClick={campaignViewed}>
        <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            {campaign.document.data.title}
        </h1>
        <h2 className="fw2 f4 lh-copy mt0 mb3">
            <ReactMarkdown source={campaign.document.content} />
        </h2>
        <p className="fw1 f5 mt0 mb3">
        Sign up for beta access or learn more about x.
        </p>
        <div>
        <Link href='/register'>
            <a className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3" onClick={signupViewed}>
                Sign Up
            </a>
        </Link>
        <Link href='/campaign/tagline-x'>
            <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib" onClick={signupKnowMore}>
                Learn More
            </a>
        </Link>
        </div>
  </article>
)

export default Banner;