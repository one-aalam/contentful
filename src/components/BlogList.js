import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { logEvent } from '../utils/analytics';
import { reformatDate, truncateSummary } from '../utils/general';

const cardClick = () => {
    logEvent('Blog', 'viewed', 'BlogPage')
}

const BlogList = ({ allBlogs }) => {
  return (
    <>
      <div className="grid">
        {allBlogs.length > 1 && allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a className="" onClick={cardClick}>
                <BlogCard post={post} />
            </a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          .grid {
            display: grid;
            padding: 2rem;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            grid-row-gap: 1.2rem;
            grid-column-gap: .8rem;
            grid-auto-flow: row;
          }
        `}
      </style>
    </>
  );
};

export default BlogList;

export const BlogCard = ({ post }) => (
    <article className="card br2 ba dark-gray b--black-10 center">
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
        <div className="f6 lh-copy measure mt2 mid-gray">
            <ReactMarkdown source={truncateSummary(post.document.content)} />
        </div>
    </div>
    <style jsx>
        {`
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
</article>
)