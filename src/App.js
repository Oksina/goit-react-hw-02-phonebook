import React, { Component } from 'react';
import Form from './components/Contacts/Form/Form';

import './index.css';

class App extends Component {
    formSubmitHandler = data => {
        console.log(data);
    };
    render() {
        return <Form onSubmit={this.formSubmitHandler} />;
    }
}

export default App;
