import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { v4 as nameId } from 'uuid';
nameId();

class Contacts extends Component {
    inputId = nameId();
    state = {
        contacts: [],
        name: '',
        number: '',
    };
    handleChange = e => {
        const { name, number, value } = e.currentTarget;
        this.setState({ [name]: value });
        this.setState({ [number]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({ contacts: [], name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Phonebook</h1>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.inputId}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default Contacts;
