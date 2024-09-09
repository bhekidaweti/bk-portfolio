import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCloud, faCode, faServer, faRodSnake,  faGears, faDatabase, faCodeMerge, faDashboard, faTrowelBricks, faPalette,  } from '@fortawesome/free-solid-svg-icons';




const Skills = () => {
  return (
    <section id="skills">
       
        <h2>Skills</h2>
        <h3>Tech Skills</h3>
      
          <ul>
            <li> <FontAwesomeIcon icon={faTrowelBricks} />HTML</li>
            <li><FontAwesomeIcon icon={faPalette} />CSS(Bootstrap, Sass)</li>
            <li><FontAwesomeIcon icon={faCode} />JavaScript(MongoDB Express React Nodejs)</li>        
            <li><FontAwesomeIcon icon={faRodSnake} />Python (Django, Flask & RestFramework)</li>
            <li><FontAwesomeIcon icon={faDatabase} />SQL(Posgre, MySQL)</li>
            <li><FontAwesomeIcon icon={faCloud} />AWS Elastic Cloud Computing</li>
            <li><FontAwesomeIcon icon={faGears} />General Computer Systems Troubleshooting</li>
            <li><FontAwesomeIcon icon={faServer} />Linux Server and Desktop</li>
            <li><FontAwesomeIcon icon={faCodeMerge} />Git and GitHub</li>
            <li><FontAwesomeIcon icon={faDashboard} />cPanel</li>
            
          </ul>
          <hr></hr>
    
    </section>
  );
}

export default Skills;
