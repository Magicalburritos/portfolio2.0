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
          Hello, I'm Joe. I have worked as a chef for 11 years but decided that
          it was time for a change in career. I have lived in Charlotte for the
          majority of my life and I enjoy using and learning about technology. I
          am currently in a coding boot camp hosted by UNCC. We are learning the
          MERN stack and so far have completed lessons on html, css, git,
          nodejs, express and sql. My first project was a simple website in
          which I learned git commands, created a repository and hosted it using
          GitHub. I will be updating this portfolio website as I learn and
          accomplish more throughout the course. Thanks for stopping in. -Joe.
        </p>
      </div>
    </section>
  );
}
export default About;
