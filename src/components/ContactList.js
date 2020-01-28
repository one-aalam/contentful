import Link from "next/link";
import ContactCard from './ContactCard';
import { logEvent } from '../utils/analytics';

const cardClick = () => {
    logEvent('Contact', 'viewed', 'TeamPage')
}

const contacts = [
  {
    id: 1,
    name: 'Aftab Alam',
    avatar: 'https://pbs.twimg.com/profile_images/378800000663452972/02010f03a613c42cddca2ff42eadf48f_400x400.png',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 2,
    name: 'Miyah Myles',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 3,
    name: 'Loren Spears',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 4,
    name: 'Cielo Luna',
    avatar: 'https://pbs.twimg.com/profile_images/943467217303224322/3_5Qg0s9.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 5,
    name: 'koray okumus',
    avatar: 'https://pbs.twimg.com/profile_images/1061275018926194690/6MWH9Xi_.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 6,
    name: 'Della Case',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 7,
    name: 'Aidyn Cody',
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 8,
    name: 'Harold Adams',
    avatar: 'https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 9,
    name: 'Yousif Cross',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg ',
    desg: 'CCO - Chief Creativity Officer'
  },
  {
    id: 10,
    name: 'Derrick Wells',
    avatar: 'https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg',
    desg: 'CCO - Chief Creativity Officer'
  }
]

const ContactList = ({ }) => {
  return (
    <>
      <div className="grid">
        {contacts.map(contact => (
          <Link
            key={contact.id}
            href={{ pathname: `/blog/${contact.id}` }}
          >
            <a className="" onClick={cardClick}>
                <ContactCard contact={contact} />
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

export default ContactList;