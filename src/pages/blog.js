import Layout from '../components/layout'
import BlogList from '../components/BlogList';
import matter from 'gray-matter'
const Blog = ( { allBlogs }) => (
  <Layout>
    <div>Blog Index</div>
    <BlogList allBlogs={allBlogs}/>
  </Layout>
)

Blog.getInitialProps = async () => {
  const siteConfig = await import(`../data/config.json`)
  //get posts & context from folder
  const posts = (context => {
   const keys = context.keys();
   const values = keys.map(context);
   const data = keys.map((key, index) => {
     // Create slug from filename
     const slug = key
       .replace(/^.*[\\\/]/, "")
       .split(".")
       .slice(0, -1)
       .join(".");
     const value = values[index];
     // Parse yaml metadata & markdownbody in document
     const document = matter(value.default);
     return {
       document,
       slug
     };
   });
   return data;
 })(require.context("../posts", true, /\.md$/));

 return {
   allBlogs: posts,
   ...siteConfig,
 }
}


export default Blog;