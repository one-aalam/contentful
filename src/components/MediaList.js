import Link from "next/link";
import { logEvent } from '../utils/analytics';
import MediaCard from './MediaCard';


const cardClick = () => {
    logEvent('Media', 'viewed', 'MediaPage')
}

const MediaList = ({ allBlogs }) => {

  return (
    <>
      <div className="grid">
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
)
};

export default MediaList;