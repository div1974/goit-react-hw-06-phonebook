import React from "react";
import styles from "./ContactListItem.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contactsActions";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.ContactListItem}>
    <p className={styles.ContactListText}>
      {name}:<br />
      {number}
    </p>

    <button
      type="button"
      className={styles.ContactListButton}
      onClick={onRemove}
    >
      Удалить
    </button>
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactActions.removeContact(ownProps.id)),
});

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};

// export default ContactListItem;

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
