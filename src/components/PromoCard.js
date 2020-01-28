const PromoCard = ({ post }) => (
    <article className="bg-white center ba b--black-10">
        <div className="pv2 ph3">
            <h1 className="f6 ttu tracked">Daily News Co.</h1>
        </div>
        <img src={post.document.data.hero_image} alt={post.document.data.hero_image} class="w-100 db" alt="Closeup photo of a tabby cat yawning."/>
        <div className="pa3">
            <a href="#" className="link dim lh-title">{post.document.data.title}</a>
            <small className="gray db pv2">AMP - <time>6 hours ago</time></small>
        </div>
    </article>
)

export default PromoCard;