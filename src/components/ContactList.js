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