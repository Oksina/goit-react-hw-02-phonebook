import React, { Component } from 'react';
import Form from './components/Contacts/Form/Form';
import List from './components/Contacts/List/List';

import './index.css';

class App extends Component {
    formSubmitHandler = data => {
        console.log(data);
    };
    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <Form onSubmit={this.formSubmitHandler} />
                <h2>Contacts</h2>
                <List />
            </div>
        );
    }
}

export default App;
