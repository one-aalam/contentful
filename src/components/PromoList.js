import Link from "next/link";
import PromoCard from './PromoCard';
import { logEvent } from '../utils/analytics';

const cardClick = () => {
    logEvent('Promo', 'viewed', 'PromoPage')
}

const PromoList = ({ allBlogs }) => {
  return (
    <>
      <div className="grid">
        {allBlogs.length > 1 && allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a className="" onClick={cardClick}>
                <PromoCard post={post} />
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

export default PromoList;