import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { logEvent } from '../utils/analytics';
import { reformatDate, truncateSummary } from '../utils/general';
import NewsCard from './NewsCard';

const cardClick = () => {
    logEvent('News', 'viewed', 'NewsPage')
}

const NewsList = ({ allBlogs }) => {
  return (
    <>
      <div className="grid">
        {allBlogs.length > 1 && allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a className="" onClick={cardClick}>
                <NewsCard post={post} />
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

export default NewsList;