import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    return (
      <div className="home-container">
        <div className="slides">
          <Carousel
            showThumbs={false} // Disable thumbnail previews
            infiniteLoop={true} // Enable infinite loop
            autoPlay={true} // Auto-play the slides
            interval={5000} // Slide change interval in milliseconds
            showStatus={false} // Hide the status indicator
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
        <div className="about-me">
          <h3>About Me</h3>
          
        </div>
        <div className="latest-blogs">
          <h3>Latest Blogs</h3>
          
        </div>
      </div>
    );
  }

export default Home;
