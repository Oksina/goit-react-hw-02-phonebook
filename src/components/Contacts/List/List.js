import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';

class List extends Component {
    render() {
        const { contacts } = this.props;
        console.log(contacts);
        return (
            <ul>
                <ListItem
                    contacts={contacts}
                    deleteContact={this.props.deleteContact}
                />
            </ul>
        );
    }
}

List.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default List;
