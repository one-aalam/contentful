import Layout from '../components/layout'
import BlogList from '../components/BlogList';
import matter from 'gray-matter'
const Blog = ( { allBlogs }) => (
  <Layout>
    <BlogList allBlogs={allBlogs}/>
  </Layout>
)

Blog.getInitialProps = async () => {
  const siteConfig = await import(`../data/config.json`)
  const posts = (context => {
   const keys = context.keys();
   const values = keys.map(context);
   const data = keys.map((key, index) => {
     const slug = key
       .replace(/^.*[\\\/]/, "")
       .split(".")
       .slice(0, -1)
       .join(".");
     const value = values[index];
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