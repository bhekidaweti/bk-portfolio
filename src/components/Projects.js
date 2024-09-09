import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHotel, faShop } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag';
import React from 'react';

//Keep onlu summary of the projects and create links to Giyhub via icons

const Projects = () => {
  return (

    <div className='projects'>

      <h1>Projects</h1>   

        <h3>FlagQuiz App <FontAwesomeIcon icon={faFlag} /></h3> 
        <p>Summary: Flag quiz app that users can play by matching a country name with a country flag.
          <br></br>The project is built with Django framework and most of the functionality us handled by JavaScript in the frontend.
           </p>

          <a href="https://github.com/bhekidaweti/capstone" target="_blank" rel="noopener noreferrer">
          source
          </a>
          <hr></hr>
 

        <h3>Booking System <FontAwesomeIcon icon={faHotel} /></h3>
        <p>Summary: This is a booking system web app for a guest house built with Django, HTML, CSS and JavaScript </p>

        <a href="https://github.com/bhekidaweti/booking-project" target="_blank" rel="noopener noreferrer">
        source
          </a>
          <hr></hr>
      
        <h3>Online Shop <FontAwesomeIcon icon={faShop} /></h3>
        <p>Summary: This is a fully functional online shopping website with PayPal and FastPay payment integration.</p>

        <a href="https://github.com/bhekidaweti/dee-shop" target="_blank" rel="noopener noreferrer">
        source
          </a>
          <hr></hr>
       
        <h3>Django React Car Dealership <FontAwesomeIcon icon={faCar} /></h3>
        <p>Summary: Django backend and React frontend project for a car dealership website.
          <br></br>This is a full stack application utilizing the Django RestFramework API 
        </p>

        <a href="https://github.com/bhekidaweti/car-dealer-django-react" target="_blank" rel="noopener noreferrer">
        source
          </a>
          <hr></hr>
       
    </div>
  );
}

export default Projects;
