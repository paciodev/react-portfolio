import React, { useEffect, useState } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiMonitor,
  FiPhone,
} from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

function Sidebar() {
  const { pathname } = useLocation();
  const [isNavOpened, setIsNavOpened] = useState(false);

  const openCloseNav = () => {
    setIsNavOpened((prev) => (prev = !prev));
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.sidebar__title',
      { display: 'none', opacity: 0, scale: 0 },
      { display: 'block', opacity: 1, scale: 1, duration: 0.3, delay: 0.5 }
    );
  }, [isNavOpened]);

  return (
    <aside
      className={`z-50 h-screen ${
        isNavOpened ? 'w-72' : 'w-[75px] sm:w-[100px]'
      } text-3xl bg-pacio-100 flex items-center fixed top-0 left-0 transition-[width]`}
    >
      <div
        className='cursor-pointer absolute top-5 ml-[1.45rem] sm:ml-[2.1rem]'
        onClick={openCloseNav}
      >
        {isNavOpened ? <FiX /> : <FiMenu />}
      </div>
      <div className='flex flex-col justify-center ml-[1.45rem] sm:ml-[2.1rem]'>
        <Link to='/'>
          <div
            className='flex flex-row items-center'
            onClick={() => setIsNavOpened(false)}
          >
            <FiHome
              className={`cursor-pointer my-3 ${
                pathname === '/' && 'text-pacio-300'
              }`}
            />
            {isNavOpened && (
              <p className='hidden sidebar__title text-2xl ml-3 cursor-pointer'>
                Home
              </p>
            )}
          </div>
        </Link>
        <Link to='/about'>
          <div
            className='flex flex-row items-center'
            onClick={() => setIsNavOpened(false)}
          >
            <FiInfo
              className={`cursor-pointer my-3 ${
                pathname === '/about' && 'text-pacio-300'
              }`}
            />
            {isNavOpened && (
              <p className='hidden sidebar__title text-2xl ml-3 cursor-pointer'>
                About me
              </p>
            )}
          </div>
        </Link>
        <Link to='/projects'>
          <div
            className='flex flex-row items-center'
            onClick={() => setIsNavOpened(false)}
          >
            <FiMonitor
              className={`cursor-pointer my-3 ${
                pathname === '/projects' && 'text-pacio-300'
              }`}
            />
            {isNavOpened && (
              <p className='hidden sidebar__title text-2xl ml-3 cursor-pointer'>
                My projects
              </p>
            )}
          </div>
        </Link>
        <Link to='/contact'>
          <div
            className='flex flex-row items-center'
            onClick={() => setIsNavOpened(false)}
          >
            <FiPhone
              className={`cursor-pointer my-3 ${
                pathname === '/contact' && 'text-pacio-300'
              }`}
            />
            {isNavOpened && (
              <p className='hidden sidebar__title text-2xl ml-3 cursor-pointer'>
                Contact me
              </p>
            )}
          </div>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
