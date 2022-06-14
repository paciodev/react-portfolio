import React, { useEffect } from 'react';
import logo from '../img/pacio.png';
import jsLogo from '../img/js.png';
import reactLogo from '../img/react.png';
import nextLogo from '../img/next.png';
import tailwindcssLogo from '../img/tailwind.png';
import gsapLogo from '../img/gsap.png';
import bootstrapLogo from '../img/bootstrap.png';
import Project from './Project';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.home__html--start',
      { x: '-=200', opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );
    tl.fromTo(
      '.home__letter--1',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.home__letter--2',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.home__letter--3',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.home__letter--4',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.home__letter--5',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=.1'
    );
    tl.fromTo(
      '.test',
      { opacity: 0, y: '+=200' },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=.5'
    );
  });

  return (
    <div className='page-scroll-trigger flex flex-col h-screen w-screen overflow-auto ml-[70px] sm:ml-[100px]'>
      <div className='hidden md:inline text-sm lg:text-lg font-mono'>
        <div className='home__html--start'>{'<html>'}</div>
        <div className='ml-10 home__html--start'>{'<body>'}</div>
        <div className='ml-20 home__html--start'>{'<main>'}</div>
      </div>

      <div className='flex flex-row justify-evenly items-center mt-20 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold font-bigTextPacio'>
        <div className='home__letter--1'>P</div>
        <div className='home__letter--2'>A</div>
        <div className='text-pacio-300 home__letter--3'>C</div>
        <div className='home__letter--4'>I</div>
        <div className='home__letter--5'>O</div>
      </div>
      <div className='w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2c74fe'
            fillOpacity='1'
            d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,106.7C672,85,768,75,864,106.7C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='bg-pacio-300 text-white'>
        <div className='test'>
          <h2 className='text-center text-5xl sm:text-7xl font-bold'>
            Who am I?
          </h2>
          <div className='flex flex-row justify-center items-center mt-10'>
            <div className='hidden md:block'>
              <img
                className='ml-5 h-60 rounded-full'
                src={logo}
                alt='My logo!'
              />
            </div>
            <div className='ml-5'>
              <h3 className='text-4xl font-semibold'>
                Patryk from Pol<span className='text-pacio-400'>and</span>
              </h3>
              <p className='text-xl my-3'>
                I'm 15 and my dream is to become a Fullstack Developer.
              </p>
              <p className='font-semibold text-2xl mb-3'>Technologies I use:</p>
              <div className='flex flex-row gap-1'>
                <img src={jsLogo} alt='' className='h-10' />
                <img src={reactLogo} alt='' className='h-10 w-10' />
                <img src={nextLogo} alt='' className='h-10 w-10' />
                <img src={tailwindcssLogo} alt='' className='h-10 w-10' />
                <img src={gsapLogo} alt='' className='h-10 w-10' />
                <img src={bootstrapLogo} alt='' className='h-10 w-10' />
              </div>
              <div className='my-5 hover:opacity-80 transition-opacity'>
                <Link
                  className='bg-pacio-200 font-bold py-2 px-5 rounded-lg shadow shadow-pacio-200'
                  to='/about'
                >
                  I want more info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pacio-200'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2c74fe'
            fillOpacity='1'
            d='M0,128L48,106.7C96,85,192,43,288,69.3C384,96,480,192,576,208C672,224,768,160,864,117.3C960,75,1056,53,1152,64C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <h2 className='text-center text-5xl sm:text-7xl font-bold'>
          My projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>
          <Project
            title='Tomato - Search Engine'
            desc='Bigger project with Google API, SSR + lot of Tailwind CSS.'
            link='https://next-tomato.vercel.app'
            lang='Javascript/Next.js'
            dotClr='bg-pacio-600'
          />
          <Project
            title='Movie search app'
            desc='Small project with TMDB API with sorting films and a little of animations.'
            link='https://next-moviesearchapp.vercel.app'
            lang='Javascript/React'
            dotClr='bg-pacio-600'
          />
          <Project
            title='MessWithIt'
            desc='This is a messaging app, in it you can send messages to selected email contacts, and you can see them in real time.'
            link='https://next-messwithit.vercel.app'
            lang='Javascript/Next.js'
            dotClr='bg-pacio-600'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='hover:scale-105 transition-transform mb-10'>
            <Link
              className='bg-pacio-300 text-xl font-bold py-3 px-7 rounded-lg shadow shadow-pacio-300'
              to='/projects'
            >
              Check more!
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-pacio-700 text-pacio-200 '>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#202020'
            fillOpacity='1'
            d='M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,165.3C672,203,768,245,864,245.3C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <h2 className='text-center text-5xl sm:text-7xl font-bold'>
          Any questions?
        </h2>
        <div className='my-16 flex flex-col items-center'>
          <div className='hover:scale-105 transition-transform'>
            <Link
              to='/contact'
              className='bg-pacio-300 text-xl font-bold py-3 px-7 rounded-lg shadow shadow-pacio-300'
            >
              Contact me
            </Link>
          </div>
          <ul className='flex flex-row justify-center items-center text-2xl gap-5 mt-6'>
            <li>
              <a
                href='https://github.com/paciodev'
                target='_blank'
                rel='noreferrer'
                className='group'
              >
                <i className='fa-brands fa-github group-hover:text-pacio-300 transition-colors'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.tiktok.com/@pacio.dev'
                target='_blank'
                rel='noreferrer'
                className='group'
              >
                <i className='fa-brands fa-tiktok group-hover:text-pacio-300 transition-colors'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitch.tv/paciotenpros'
                target='_blank'
                rel='noreferrer'
                className='group'
              >
                <i className='fa-brands fa-twitch group-hover:text-pacio-300 transition-colors'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitch.tv/paciotenpros'
                target='_blank'
                rel='noreferrer'
                className='group'
              >
                <i className='fa-brands fa-youtube group-hover:text-pacio-300 transition-colors'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden md:inline text-sm lg:text-lg font-mono'>
          <div className='ml-20'>{'</main>'}</div>
          <div className='ml-10'>{'</body>'}</div>
          <div>{'</html>'}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
