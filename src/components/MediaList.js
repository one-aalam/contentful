import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { logEvent } from '../utils/analytics';


const cardClick = () => {
    console.log('logging', 'Blog', 'viewed', 'HomePage');
    logEvent('Blog', 'viewed', 'Homepage')
}

function reformatDate(fullDate) {
  const date = new Date(fullDate)
  return date.toDateString().slice(4);
}

const MediaList = ({ allBlogs }) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <div className="">
        {allBlogs.length > 1 && allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a className="" onClick={cardClick}>
              <MediaCard post={post}/>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .card {
            padding: 10px 10px 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: all .3s;
          }
          .card img {
            width: 100%;
          }
          .card:hover {
            border-color: #067df7;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
  </>
)
        };

export default MediaList;

export const MediaCard = ({ post }) => (
  <article className="br2 dark-gray b--black-10 center">
    <img src={post.document.data.hero_image} alt={post.document.data.hero_image} className="db w-100 br2 br--top" />
    <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
            <div className="dtc">
                <h1 className="f5 f4-ns mv0">{post.document.data.title} &rarr;</h1>
            </div>
        </div>
        <div className="dt w-100 mt1">
            <div className="dtc">
                <h2 className="f5 mv0">{reformatDate(post.document.data.date)}</h2>
            </div>
        </div>
    </div>
  </article>
)