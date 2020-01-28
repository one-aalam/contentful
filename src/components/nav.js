import React from 'react'
import Link from 'next/link'

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = () => (
  <nav>
    <div className="w-100">
    <Link href='/'>
          <a>
        <h1 className='title f1 w-100 dark-pink ttu avenir'>Analytics <span className="b red">Times</span>
            <p>your one-stop shop for the latest and greatest in events, news and media</p>
        </h1>
        </a>
        </Link>
    </div>
    <ul className="w-40 b--dark-pink" style={{margin: 'auto'}}>
      <li>
        <Link href='/blog'>
          <a>
            <h1 className=' f3 dark-pink ttu'><span className="b red">blog</span></h1>
          </a>
        </Link>
      </li>
      <li className="dark-pink">//</li>
      <li>
        <Link href='/news'>
          <a>
            <h1 className=' f3 dark-pink ttu'><span className="b red">news</span></h1>
          </a>
        </Link>
      </li>
      <li className="dark-pink">//</li>
      <li>
        <Link href='/media'>
          <a>
            <h1 className=' f3 dark-pink ttu'><span className="b red">media</span></h1>
          </a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 8px;
      }
      li {
        display: flex;
        padding: 6px;
      }
    `}</style>
  </nav>
)

export default Nav
