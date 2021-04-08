import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class ListItem extends Component {
    render({contacts}) {
        return (
                contacts.map((contact) => {
                    const { name, number, id } = contact;
                    return(
                        <li key={id}>
                        <p>{name}: </p>
                        <p>{number}</p>
                    </li>
                    )
                })
        );
    }
}
export default ListItem;
