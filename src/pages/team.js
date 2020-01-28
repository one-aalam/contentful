import Layout from '../components/layout'
import ContactList from '../components/ContactList';

export default () => (
  <Layout siteTitle={'Analytics Times -- Team'} description={'Yur at the Team of Contentful'}>
    {/* <h6 class=" dim black b f6 f-headline-ns tc db mb3 mb4-ns w-100">Team</h6> */}
    <ContactList/>
  </Layout>
)