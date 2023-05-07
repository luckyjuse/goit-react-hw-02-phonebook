import PropTypes from 'prop-types';
import { ContactListUl, Button, ContactLi } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListUl>
      {contacts.map(item => (
        <ContactLi key={item.id}>
          <p>{item.name}:</p>
          <p>{item.number}</p>
          <Button type="button" onClick={() => onDelete(item.id)}>
            delete
          </Button>
        </ContactLi>
      ))}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
