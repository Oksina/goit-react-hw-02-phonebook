import React, { Component } from 'react';
import Contacts from './components/Contacts/Contacts';

import './index.css';

class App extends Component {
    formSubmitHandler = data => {
        console.log(data);
    };
    render() {
        return <Contacts onSubmit={this.formSubmitHandler} />;
    }
}

export default App;
