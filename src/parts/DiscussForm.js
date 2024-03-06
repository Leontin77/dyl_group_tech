/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'elements/Form';
import Button from 'elements/Button';

export default function DiscussForm(props) {
  const { data, resetForm } = props;

  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;
  
    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'DYLGroupTech',
      message: projectIdea,
    };
  
    const token = '6794741695:AAEbHg9H5Jy03JbbuejzkaChh_-y71H5nBA';
    // const chatId = ['552161534', '582889678', '877649424'];
    const chatId = ['582889678'];
    const text = `From: ${name}, Company: ${company}, Email: ${email}, Phone: ${phone}, Project Idea: ${projectIdea}`;
  
    console.log('templateParams', templateParams);
  
    if (name && company && email && phone && projectIdea) {
      chatId.forEach((id) => {
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: id,
            text,
          }),
        })
          .then((response) => response.json())
          .then((dat) => {
            console.log('Success:', dat);
            // toast.success('Success! We\'ll get back to you soon. Thank you!');
            resetForm();
          })
          .catch((error) => {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
          });
      });
      emailjs.send(
        'service_o3ejae3',
        'template_xgfgxm9',
        templateParams,
        'OyEJgHok_8Ahju8_J',
      );
      toast.success('Success! We\'ll get back to you soon. Thank you!');
    } else {
      toast.error('Please fill out the form completely.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade bottom>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>

        <p className="font-light text-lg text-gray-400 text-center mb-12">          
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={props.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={props.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={props.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={props.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className=""
              onChange={props.onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-blue text-white rounded-full border-2 border-theme-blue hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
}
