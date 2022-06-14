import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { isEmail } from 'validator';

function Contact() {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    if (nameRef.current.value === '') {
      setErrorMessage('Please enter your name');
    } else if (emailRef.current.value === '') {
      setErrorMessage('Please enter your email');
    } else if (!isEmail(emailRef.current.value)) {
      setErrorMessage('Please enter valid email address');
    } else if (messageRef.current.value === '') {
      setErrorMessage('Please enter your message');
    } else {
      emailjs
        .sendForm(
          'gmail',
          'template_cmo2j2b',
          formRef.current,
          'em7MAm4T2spSWBJbp'
        )
        .then(
          (result) => {
            setIsEmailSent(true);
            console.log('Email sent, status: ' + result.status);
            event.preventDefault();
          },
          (error) => {
            alert(error.text);
          }
        );
    }
    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
    event.preventDefault();
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.about__html--start',
      { x: '-=200', opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );
    tl.fromTo(
      '.about__letter--1',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--2',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--3',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--4',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--5',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--6',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--7',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.about__me--letters',
      { opacity: 0, y: '+=200' },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=.5'
    );
    tl.fromTo(
      '.wstm',
      { opacity: 0, y: '+=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.2'
    );
    tl.fromTo(
      '.form',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5 },
      '-=.2'
    );
  }, []);

  return (
    <div className='page-scroll-trigger flex flex-col h-screen w-screen overflow-auto ml-[70px] sm:ml-[100px]'>
      <div className='about__html--start hidden md:inline text-sm lg:text-lg font-mono'>
        <div>{'<html>'}</div>
        <div className='ml-10'>{'<body>'}</div>
        <div className='ml-20'>{'<contact>'}</div>
      </div>

      <div className='flex flex-row justify-evenly items-center mt-20 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold font-bigTextPacio'>
        <div className='about__letter--1'>C</div>
        <div className='about__letter--2'>O</div>
        <div className='about__letter--3'>N</div>
        <div className='text-pacio-300 about__letter--4'>T</div>
        <div className='about__letter--5'>A</div>
        <div className='about__letter--6'>C</div>
        <div className='about__letter--7'>T</div>
      </div>
      <div className='about__me--letters flex flex-row justify-center items-center mt-5 text-md sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-bigTextPacio'>
        <div className='mx-5 md:mx-10 lg:mx-15'>M</div>
        <div className='mx-5 md:mx-10 lg:mx-15'>E</div>
      </div>
      <div className='bg-pacio-300'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#202020'
            fillOpacity='1'
            d='M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,160C672,160,768,96,864,80C960,64,1056,96,1152,133.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold wstm'>
          Write something to me
        </h2>
        <div className='max-w-full md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto'>
          {isEmailSent !== true ? (
            <form
              ref={formRef}
              className='form m-10 flex flex-col text-sm font-normal'
            >
              <label className='text-xl font-semibold mt-2' htmlFor='name'>
                Your Name:
              </label>
              <input
                className='text-pacio-200 p-2 mt-1 rounded-lg transition-transform focus:scale-105 outline-none'
                type='text'
                id='name'
                name='from_name'
                placeholder='John Bon'
                ref={nameRef}
              />
              <label className='text-xl font-semibold mt-2' htmlFor='email'>
                Your Email:
              </label>
              <input
                className='text-pacio-200 p-2 mt-1 rounded-lg transition-transform focus:scale-105 outline-none'
                type='email'
                id='email'
                name='from_email'
                placeholder='john@bon.dev'
                ref={emailRef}
              />
              <label className='text-xl font-semibold mt-2' htmlFor='message'>
                Your message:
              </label>
              <textarea
                className='text-pacio-200 p-2 mt-1 rounded-lg transition-transform focus:scale-105 outline-none'
                id='message'
                rows='8'
                name='message'
                placeholder='I would like to say hello. Hello!'
                ref={messageRef}
              ></textarea>
              <p className='text-center text-lg text-red-600 font-semibold mt-2'>
                {errorMessage}
              </p>
              <button
                className='text-lg font-semibold bg-pacio-200 text-white py-2 px-10 rounded-xl mt-3 mx-auto hover:scale-105 transition-transform'
                onClick={sendEmail}
              >
                Send!
              </button>
            </form>
          ) : (
            <div className='bg-green-600 w-full h-48 grid place-content-center mt-10 rounded-2xl hover:scale-105 transition-transform'>
              <p className='text-center text-lg text-white font-semibold'>
                Your message has been sent!
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='bg-pacio-200'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2c74fe'
            fillOpacity='1'
            d='M0,320L48,277.3C96,235,192,149,288,144C384,139,480,213,576,224C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
          My Social media
        </h2>
        <ul className='flex flex-row justify-center items-center text-5xl gap-5 my-12'>
          <li>
            <a
              href='https://github.com/paciodev'
              target='_blank'
              rel='noreferrer'
              className='group'
            >
              <i className='fa-brands fa-github group-hover:text-pacio-300 transition-all'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.tiktok.com/@pacio.dev'
              target='_blank'
              rel='noreferrer'
              className='group'
            >
              <i className='fa-brands fa-tiktok group-hover:text-pacio-300 transition-all'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitch.tv/paciotenpros'
              target='_blank'
              rel='noreferrer'
              className='group'
            >
              <i className='fa-brands fa-twitch group-hover:text-pacio-300 transition-all'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UCdKDr9GeZ7Mkt1dnGWxSM6Q'
              target='_blank'
              rel='noreferrer'
              className='group'
            >
              <i className='fa-brands fa-youtube group-hover:text-pacio-300 transition-all'></i>
            </a>
          </li>
        </ul>
        <div className='hidden md:inline text-sm lg:text-lg font-mono'>
          <div className='ml-20'>{'</contact>'}</div>
          <div className='ml-10'>{'</body>'}</div>
          <div>{'</html>'}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
