import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
const Header = ({ toggleTheme }) => {
  return (
    <header>
      <nav>
        <ul>
          
          <li><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
