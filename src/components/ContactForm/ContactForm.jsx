import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Input, Lable } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = {
    submitProp: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  contactNameId = nanoid();
  contactNumberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitProp({ ...this.state, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Lable htmlFor={this.contactNameId}>Name</Lable>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            id={this.contactNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Lable htmlFor={this.contactNumberId}>Number</Lable>
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            id={this.contactNumberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </div>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
