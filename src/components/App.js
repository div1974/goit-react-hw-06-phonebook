import React from "react";
import ContactList from "./ContactList/ContactList";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

export default function App() {
  return (
    <>
      <ContactForm />
      <Filter />

      <ContactList />
    </>
  );
}
