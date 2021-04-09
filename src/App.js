import React, { Component } from 'react';
import Form from './components/Contacts/Form/Form';
import List from './components/Contacts/List/List';

import './index.css';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };
    formSubmitHandler = e => {
        //this.setState({
        //    contacts: '',
        //});
        //const {contacts} = this.state;
    };
    render() {
        const { contacts } = this.state;
        return (
            <div>
                <h1>Phonebook</h1>
                <Form onSubmit={this.formSubmitHandler} />
                <h2>Contacts </h2>
                <List contacts={contacts} />
            </div>
        );
    }
}

export default App;
