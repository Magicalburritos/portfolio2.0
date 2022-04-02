import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/Magicalburritos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require('../../assets/logos/github-logo.png')}
            alt="Github"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/joseph-hudak24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require('../../assets/logos/linkedin-logo.png')}
            alt="LinkedIn"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/users/18685732/mrfish24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require('../../assets/logos/stack-overflow-icon.png')}
            alt="stackoverflow"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
