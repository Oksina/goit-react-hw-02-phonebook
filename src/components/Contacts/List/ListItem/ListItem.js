import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ contacts, deleteContact }) => {
    //const { name, number, id } = contact;
    return contacts.map(contact => {
        const { name, number, id } = contact;
        return (
            <li key={id}>
                <p>{name}: </p>
                <p>{number}: </p>
                <button type="button" onClick={() => deleteContact(id)}>
                    Delete
                </button>
            </li>
        );
    });
};
ListItem.defaultProps = {
    name: '',
    number: '',
    id: '',
};
ListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
export default ListItem;
