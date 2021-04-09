import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
//import PropTypes from 'prop-types';

class List extends Component {
    state = {};
    render() {
        const { contacts } = this.props;
        return (
            <ul>
                <ListItem />
            </ul>
        );
    }
}
export default List;
