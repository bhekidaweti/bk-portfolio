import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p> <FontAwesomeIcon icon={faEnvelope} /> bheki.daweti@gmail.com</p>
    </section>
  );
}

export default Contact;
