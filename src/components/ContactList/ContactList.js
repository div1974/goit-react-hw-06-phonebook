import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "../ContactListItem/ContactListItem";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import ContactItemFade from "./ContactItemFade.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={{ ...ContactItemFade }}>
        <ContactListItem
          key={id}
          // name={name}
          // number={number}
          // onRemove={() => onRemoveContact(id)}
          id={id}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
