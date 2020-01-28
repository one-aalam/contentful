import {  reformatDate } from '../utils/general';


const MediaCard = ({ post }) => (
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

export default MediaCard;