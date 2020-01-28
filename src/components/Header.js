import React from 'react'
import Link from 'next/link'

const Header = ({}) => (
    <header className="bg-white black-80 tc pv4 avenir">
        <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
            <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={{fill:'currentcolor'}}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
        </a>
        <Link href='/'>
            <a>
            <h1 className="mt2 mb0 baskerville i fw1 f1 f1 w-100 dark-pink ttu avenir">Analytics <span className="b red">Times</span></h1>
            </a>
        </Link>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">Your one-stop shop for the latest and greatest in events, news and media</h2>
        <nav className="bt bb tc mw7 center mt4">
            <Link href='/blog'>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">
                    Articles
                </a>
            </Link>
            <Link href='/news'>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">
                    News
                </a>
            </Link>
            <Link href='/media'>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
                    Media
                </a>
            </Link>
            <Link href='/promo'>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l">
                    Promos
                </a>
            </Link>
            <Link href='/team'>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l">
                    Team
                </a>
            </Link>
        </nav>
    </header>

);

export default Header;