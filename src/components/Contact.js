import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <p> Please drop me a line in any of the following ways if you like my work or you have any questions, suggestions, collaborations or anything else you would like to discuss with me.  </p>
      <p>   <FontAwesomeIcon icon={faEnvelope} />bheki.daweti@gmail.com</p>
      <p>  <a href='https://github.com/bhekidaweti'> <FontAwesomeIcon icon={faGithub} />GitHub</a></p>
      <p>  <a href='https://x.com/@d_bheki'> <FontAwesomeIcon icon={faTwitter} />Twitter</a></p>
      <p>  <a href='https://linkedin.com/in/bhekinkosi-daweti'> <FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></p>
      <p>  <a href='https://youtube.com/@bhekidaweti8703'> <FontAwesomeIcon icon={faYoutube} />YouTube</a></p>
      <p>  <a href="/appointment"> <FontAwesomeIcon icon={faCalendarAlt} />Book an Appointment</a></p>
    </section>
  );
}

export default Contact;
