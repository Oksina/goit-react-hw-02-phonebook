import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
//import PropTypes from 'prop-types';

class List extends Component {
    render() {
        const {contacts}=this.props;
        return (
            <ul>
                <ListItem contacts={contacts}/>
            </ul>
        );
    }
}
export default List;
