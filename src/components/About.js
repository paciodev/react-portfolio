import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuestionAndAnswer from './QuestionAndAnswer';
import gsap from 'gsap';

function About() {
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
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--2',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--3',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--4',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.about__letter--5',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.about__me--letters',
      { opacity: 0, y: '+=200' },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=.5'
    );
    tl.fromTo(
      '.who--am--i',
      { opacity: 0, x: '-=200' },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    tl.fromTo(
      '.ext--ver',
      { opacity: 0, y: '+=200' },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=.3'
    );
    tl.fromTo(
      '.qua--container',
      { opacity: 0, x: '-=2000' },
      { opacity: 1, x: 0, duration: 2 },
      '-=1.7'
    );
  });

  return (
    <div className='page-scroll-trigger flex flex-col h-screen w-screen overflow-auto ml-[70px] sm:ml-[100px]'>
      <div className='about__html--start hidden md:inline text-sm lg:text-lg font-mono home__html--start'>
        <div>{'<html>'}</div>
        <div className='ml-10'>{'<body>'}</div>
        <div className='ml-20'>{'<about>'}</div>
      </div>
      <div className='flex flex-row justify-evenly items-center mt-20 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold font-bigTextPacio'>
        <div className='about__letter--1'>A</div>
        <div className='about__letter--2'>B</div>
        <div className='text-pacio-300 about__letter--3'>O</div>
        <div className='about__letter--4'>U</div>
        <div className='about__letter--5'>T</div>
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
            d='M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,213.3C672,224,768,160,864,117.3C960,75,1056,53,1152,69.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <h2 className='who--am--i text-center text-5xl sm:text-7xl font-bold'>
          Who am I?
        </h2>
        <p className='text-center text-xl sm:text-2xl font-semibold ext--ver'>
          Extended version
        </p>
        <div className='mx-5'>
          <div className='qua--container hover:scale-[102%] transition-transform bg-pacio-700 text-pacio-200 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl my-10 p-5 mx-auto'>
            <h4 className='text-2xl sm:text-3xl font-bold'>Q&A</h4>
            <ul className='mt-3'>
              <QuestionAndAnswer
                question='What is your name?'
                answer="I'm Patryk (Patrick)."
              />
              <QuestionAndAnswer
                question='How old are you?'
                answer="I'm 15yo."
              />
              <QuestionAndAnswer
                question='How long do you code?'
                answer='I have been programming for more than one year.'
              />
              <QuestionAndAnswer
                question='What languages do you use?'
                answer='HTML, CSS, JS and a lot of frameworks/libraries.'
              />
              <QuestionAndAnswer
                question='Which CSS framework do you use the most?'
                answer='Definitely Tailwind CSS.'
              />
              <QuestionAndAnswer
                question='What technologies did you use to build this website?'
                answer='React, Tailwind CSS and and a few icon libraries.'
              />
              <QuestionAndAnswer
                question='What are you currently learning?'
                answer='Express and MongoBB/Mongoose.'
              />
            </ul>
            <div className='flex flex-col justify-center items-center'>
              <h4 className='font-semibold text-xl mt-5'>
                Want to send your own question?
              </h4>
              <div className='hover:scale-105 transition-transform mt-8 mb-3'>
                <Link
                  className='text-pacio-700 bg-pacio-300 py-3 px-5 rounded-lg'
                  to='/contact'
                >
                  Send it here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:inline text-sm lg:text-lg font-mono'>
          <div className='ml-20'>{'</about>'}</div>
          <div className='ml-10'>{'</body>'}</div>
          <div>{'</html>'}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
