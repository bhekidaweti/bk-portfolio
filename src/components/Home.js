import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
      <div className="home-container">
        <section id='bio'>
        <h1>Hey, this is Bheki Daweti . </h1>
        <p>I am an aspiring full stack developer(previously I was a Data Capturer), I am currently doing a Software Development internship 
          at OpenGenus. I am also doing a couple of Open source contributions as well .</p>
        <p>I also have a YouTube channnel where I talk about my sofware development progress 
          (This was ignited by CS50's Intro to Computer Science & Web Development Courses which compelled one
           to video record their projects <FontAwesomeIcon icon={faFaceGrinHearts} /> ).</p>
        <p> The tech stack I use on a day to day basis is HTML, CSS, JavaScript, Python along with web frameworks that I'm highly proficient in
           such as React, Django & Flask.
           I have used cPanel before to manage my web projects but I have also became so highly fond of Cloud Computing and so I have hosted my projects on 
           Amazon Web Services before and Netlify (This website is hosted on Netlify). Cloud Computing has enhanced my learning and love of Linux technologies.
           <p>I have also included some of the projects I have done in the projects page.</p>
          
        </p>
        <hr></hr>
        </section>
        <div>
          <h1>WORK </h1>
        </div>
        <div className="slides">
          
          <Carousel
            showThumbs={false} 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={5000} 
            showStatus={false} 
          >
            <div>
              <img src="car-dealership-project-image0.jpg" alt="car-dealership-project" />
              <p className="legend">Car dealership Project</p>
            </div>
            <div>
              <img src="car-dealership-project-image1.jpg" alt="car-dealership-project" />
              <p className="legend">Car dealership</p>
            </div>
            <div>
              <img src="car-dealership-project-image2.jpg" alt="car-dealership-project" />
              <p className="legend">Car dealership</p>
            </div>
            <div>
            <img src="car-dealership-project-image3.png" alt="car-dealership-project" />
            <p className="legend">Car dealership</p>
            </div>
            <div>
            <img src="car-dealership-project-image4.png" alt="car-dealership-project" />
            <p className="legend">Car dealership</p>
            </div>
            <div>
            <img src="fun-with-world-flags-project.png" alt="flags-quiz-project" />
            <p className="legend">Flag Quiz App</p>
            </div>
          </Carousel>
        </div>
        <div>
          <h3><a href='https://github.com/bhekidaweti'> See more work ..</a></h3>
        </div>
      </div>
    );
  }

export default Home;
