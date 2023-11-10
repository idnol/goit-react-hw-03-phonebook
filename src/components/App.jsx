import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  handleSubmit = (obj) => {
    const hasContact = this.state.contacts.some(item => item.name === obj.name)
    if (!hasContact) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, obj]
        }
      })
    } else {
      alert(`${obj.name} is already in contacts`);
    }
  }

  updateFilter = (val) => {
    this.setState({
      filter: val
    })
  }

  deleteContact = (val) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== val)
      }
    })
  }

  render () {
    const searchItems = this.state.contacts.filter(item => {
      return item.name.toLowerCase().includes(this.state.filter);
    })
    return (
      <>
        <ContactForm submit={this.handleSubmit} />
        <Filter filter={this.state.filter} onUpdateFilter={this.updateFilter} />
        {this.state.contacts.length > 0 && <List contacts={searchItems} onDel={this.deleteContact} />}
      </>
    );
  }

};
