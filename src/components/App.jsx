import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const isContactName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isContactName) {
      window.alert(`${data.name} is alredy in contacts`);
      return;
    }
    this.setState(state => ({ contacts: [...state.contacts, data] }));
  };

  searchContact = event => {
    const value = event.currentTarget.value;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitProp={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onSearch={this.searchContact} />
        {this.getVisibleContacts() && (
          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
