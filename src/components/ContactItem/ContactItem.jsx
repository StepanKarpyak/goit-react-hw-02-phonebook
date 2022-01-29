import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </li>

);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};