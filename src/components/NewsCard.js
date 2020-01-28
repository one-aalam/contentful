import ReactMarkdown from "react-markdown";
import {  truncateSummary } from '../utils/general';

const NewsCard = ({ post }) => (
    <article className="bt bb b--black-10 db pv4 ph3 ph0-l no-underline black dim">
    <div className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <img src={post.document.data.hero_image} alt={post.document.data.hero_image} className="db"/>
      </div>
      <div className="w-100 w-60-ns pl3-ns">
        <h1 className="f3 fw1 baskerville mt0 lh-title">{post.document.data.title}</h1>
        <div className="f6 f5-l lh-copy">
          <ReactMarkdown source={truncateSummary(post.document.content)} />
        </div>
        <p className="f6 lh-copy mv0">By {post.document.data.author}</p>
      </div>
    </div>
</article>
)

export default NewsCard;