import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function ContactForm() {
  //set values for form component
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  //set error messages
  const [errorMessage, setErrorMessage] = useState('');

  const form = useRef();

  //checks if form is filled out correctly
  function handleChange(e) {
    //validates email
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Please enter a valid email address');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log(formState);
      sendEmail(e);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_nt0h4p4',
        'template_sg8jrlj',
        form.current,
        'jRgOZDgWzfCQODhKb'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email Sent! I will get back to you when time permits!');
        },
        (error) => {
          console.log(error.text);
          alert('Oh no! Something went wrong, please try again shortly!');
        }
      );
  };

  return (
    <section>
      <div className="center">
        <h2 className="page-header">Contact Me</h2>
      </div>
      <div>
        <form id="contact-form" ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
            {errorMessage && (
              <div className="error-message text-danger">
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
          <button type="submit" data-testid="btntag">
            Submit
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}

export default ContactForm;
