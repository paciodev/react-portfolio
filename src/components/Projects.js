import React, { useEffect } from 'react';
import ProjectFull from './ProjectFull';
import { projectsData } from './data/projectsData';
import gsap from 'gsap';

function Projects() {
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
      '.about__letter--8',
      { opacity: 0, y: '-=200' },
      { opacity: 1, y: 0, duration: 0.2 },
      '-=.1'
    );
    tl.fromTo(
      '.my--projects',
      { opacity: 0, x: '+=200' },
      { opacity: 1, x: 0, duration: 0.3 },
      '-=.2'
    );
    tl.fromTo(
      '.projects__container',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5 },
      '-=.2'
    );
  });

  return (
    <div className='page-scroll-trigger flex flex-col h-screen w-screen overflow-auto ml-[70px] sm:ml-[100px]'>
      <div className='about__html--start hidden md:inline text-sm lg:text-lg font-mono'>
        <div>{'<html>'}</div>
        <div className='ml-10'>{'<body>'}</div>
        <div className='ml-20'>{'<projects>'}</div>
      </div>
      <div className='flex flex-row justify-evenly items-center mt-20 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold font-bigTextPacio'>
        <div className='about__letter--1'>P</div>
        <div className='about__letter--2'>R</div>
        <div className='about__letter--3'>O</div>
        <div className='text-pacio-300 about__letter--4'>J</div>
        <div className='text-pacio-300 about__letter--5'>E</div>
        <div className='about__letter--6'>C</div>
        <div className='about__letter--7'>T</div>
        <div className='about__letter--8'>S</div>
      </div>
      <div className='bg-pacio-300'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#202020'
            fillOpacity='1'
            d='M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,218.7C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <h2 className='text-center text-5xl sm:text-7xl font-bold mb-12 my--projects'>
          My projects
        </h2>
        <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 projects__container'>
          {projectsData
            .map((project) => (
              <ProjectFull
                key={project.id}
                title={project.title}
                description={project.description}
                techs={project.techs}
                dotClr={project.dotClr}
                gitRepo={project.gitRepo}
                liveUrl={project.liveUrl}
              />
            ))
            .reverse()}
        </div>
        <div className='hidden md:inline text-sm lg:text-lg font-mono'>
          <div className='ml-20'>{'</projects>'}</div>
          <div className='ml-10'>{'</body>'}</div>
          <div>{'</html>'}</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
