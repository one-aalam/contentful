import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { logEvent } from '../utils/analytics';


const cardClick = () => {
    logEvent('Blog', 'viewed', 'Homepage')
}

const BlogList = ({ allBlogs }) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <center>
         <h1>Blog Roll</h1>
        </center>
      <div className="row">
        {allBlogs.length > 1 && allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a className="card" onClick={cardClick}>
                <h3>{post.document.data.title} &rarr;</h3>
                <h5> {reformatDate(post.document.data.date)}</h5>
                <p><ReactMarkdown source={truncateSummary(post.document.content)} /></p>
                <img src={post.document.data.hero_image} alt={post.document.data.hero_image} />
            {/* <li>
              <div className="hero_image">
                <img src={post.document.data.hero_image} alt={post.document.data.hero_image} />
              </div>
              <div className="blog__info">
                <h2>{post.document.data.title}</h2>
                <h3> {reformatDate(post.document.data.date)}</h3>
                <p>
                  <ReactMarkdown source={truncateSummary(post.document.content)} />
                </p>
              </div>
            </li> */}
            </a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          margin-bottom: 0;
          a:hover {
            opacity: 1;
          }
          a:hover li div.hero_image img {
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }
          a:hover li .blog__info h2, a:hover li .blog__info h3, a:hover li .blog__info p {
            transform: translateX(10px);
            transition: transform 0.5s ease-out;
          }
          .hero_image {
            width: 100%;
            height: 33vh;
            overflow: hidden;
            background-color: #000;
          }
          .hero_image img {
            object-fit: cover;
            object-position: 50% 50%;
            opacity: 1;
            transition: opacity 0.3s ease;
            min-height: 100%;
          }
          .blog__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem 1.25rem;
            transform: translateX(0px);
            transition: transform 0.3s ease-in;
            border-bottom: 1px solid #ebebeb;
          }
          .blog__info h2, .blog__info h3, .blog__info p {
            transform: translateX(0px);
            transition: transform 0.5s ease-out;
          }
          li {
            opacity: inherit;
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 38vh;
            margin-bottom: 0;
          }
          h2 {
            margin-bottom: 0.5rem;
          }
          h3 {
            margin-bottom: 1rem;
          }
          p {
            max-width: 900px;
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
            overflow: hidden;
          }
          .card img {
            width: 100%;
          }
          .card:hover {
            border-color: #067df7;
            box-shadow: 2px 2px 2px grey;
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
          @media (min-width: 768px) {
            li {
              min-height: 250px;
              height: 33.333vh;
              flex-direction: row;
            }
            .hero_image {
              height: 100%;
            }
            .hero_image img {
              min-width: 100%;
              height: 100%;
              width: auto;
              min-height: 0;
            }
            .blog__info {
              min-width: 70%;
            }
          }
          @media (min-width: 1280px) {
            .blog__info {
              padding: 3rem;
            }
            h3 {
              margin-bottom: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default BlogList;