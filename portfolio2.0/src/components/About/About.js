import React from 'react';

function About(active) {
  if (!active === 'about') return null;
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={require('../../assets/images/joe-photo.jpg')}
          alt="about-me"
          className="photo"
        />
      </div>
      <div>
        <p>
            Hey I’m Joe and I have worked as a chef for 11 years and decided I
          wanted a career change. I have lived in Charlotte for a majority of my
          life. I enjoy learning new things and enjoy new challenges. I am
          presently in a coding boot camp hosted by UNCC. We are learning the
          MERN stack, presently we have just completed html, css, git, nodejs,
          express, and sql. I will be updating this portfolio website as I learn
          different things throughout the course. My first project was a simple
          website called Run-Buddy, in which I learned git commands, created a
          repository and hosted it using GitHub. The website includes a navbar,
          hero image, about section, and contact section. I will be updating
          this portfolio website as I get more projects completed and learn more
          technologies. Thanks for stopping in. -Joe.
        </p>
      </div>
    </section>
  );
}
export default About;
