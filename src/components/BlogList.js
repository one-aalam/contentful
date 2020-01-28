import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { logEvent } from '../utils/analytics';


const cardClick = () => {
    console.log('logging', 'Blog', 'viewed', 'HomePage');
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
      {/* <center>
         <h1>Blog Roll</h1>
        </center> */}
      <div className="grid">
        {allBlogs.length > 1 && allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a className="" onClick={cardClick}>
                <article className="card br2 ba dark-gray b--black-10 center">
                {/* w-100 w-50-m w-25-l */}
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
                </article>
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
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .grid {
            display: grid;
            padding: 2rem;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            grid-row-gap: 1.2rem;
            grid-column-gap: .8rem;
            grid-auto-flow: row;
          }
          .card {
            // width: 300px;
            padding: 10px 10px 16px;
            // border: 1px solid #9b9b9b;
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
        //   .card h3 {
        //     margin: 0;
        //     color: #067df7;
        //     font-size: 18px;
        //   }
        //   .card p {
        //     margin: 0;
        //     padding: 12px 0 0;
        //     font-size: 13px;
        //     color: #333;
        //   }
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