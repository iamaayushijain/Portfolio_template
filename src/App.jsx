
import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import { About } from './components/About-me';
import { Contactpage } from './components/contact';
import { Project } from './components/projects';
import {Home} from './components/home'
import A from '/public/A.png';
import classNames from 'classnames';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";






function App() {

  return (
    <>
    <div>
      <BrowserRouter>

      <Appbar />

      <Routes>
           <Route index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>

        <div className="mb-20"></div>


<hr className = 'pt-10 border-t border-[#dabab3] opacity-35  '></hr>

<div className='pt-16 text-3xl text-white'>
  Follow Me
</div>

<div className="flex justify-center items-center gap-7 pt-12 h-8 text-white">
      <div className="icon-wrapper">
        <FaLinkedin size='3rem' className="icon hover:bg-[#dabab3]" />
      </div>
      <div className="icon-wrapper">
        <FaInstagramSquare size='3rem' className="icon hover:bg-[#dabab3]" />
      </div>
      <div className="icon-wrapper">
        <FaTwitterSquare size='3rem' className="icon hover:bg-[#dabab3]" />
      </div>
      <div className="icon-wrapper">
        <SiLeetcode size='3rem' className="icon hover:bg-[#dabab3]" />
      </div>
      <div className="icon-wrapper">
        <FaGithubSquare size='3rem' className="icon hover:bg-[#dabab3]" />
      </div>
    </div>

<div className='pt-32 text-white'>
2024React & Tailwind CSS Portfolio.
</div>

</BrowserRouter>

</div>
      </>
    
   
  );
}



function Appbar() {
  const navigate = useNavigate();
  const  location = useLocation();
  const [activeRoute, setActiveRoute] = useState('');



  




  useEffect(() => {
    setActiveRoute(location.pathname);

    }
  , [location]);

  const buttonClasses1 = classNames(
    'text-white', // Default text color
    {'underline':  '/projects'=== activeRoute}, // Background color based on route
    'hover:bg-gray-700',
    'hover:text-white',
    'px-3',
    'py-2',
    'rounded-md',
    'text-sm',
    'font-medium'
  );

  const buttonClasses2 = classNames(
    'text-white', // Default text color
    {'underline':  '/about'=== activeRoute}, // Background color based on route
    'hover:bg-gray-700',
    'hover:text-white',
    'px-3',
    'py-2',
    'rounded-md',
    'text-sm',
    'font-medium'
  );

  const buttonClasses3 = classNames(
    'text-white', // Default text color
    {'underline':  '/contact'=== activeRoute}, // Background color based on route
    'hover:bg-gray-700',
    'hover:text-white',
    'px-3',
    'py-2',
    'rounded-md',
    'text-sm',
    'font-medium'
  );

  return (
    <nav className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex justify-center items-center text-white ">
            <img src={A} alt="A"  className='h-8 rounded'/>
              <div className="text-white hover:underline hover:cursor-pointer pl-3" onClick={() => navigate("/")}>Aayushi Jain</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <button onClick={() => navigate("/projects")} className={buttonClasses1}>Projects</button>
                <button onClick={() => navigate("/about")} className={buttonClasses2}>About me</button>
                <button onClick={() => navigate("/contact")} className={buttonClasses3}>Contact me</button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button 
                onClick={() =>navigate("/contact")} 
                className="hover:underline text-[#dabab3] bg-transparent border border-solid border-[#dabab3] rounded py-2 px-4 hover:bg-[#dabab3] hover:text-white text-sm font-medium"
              >
                Hire Me
              </button>
              <div className="pl-4">
                DM
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={() => navigate("/projects")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</button>
          <button onClick={() => navigate("/about")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About me</button>
          <button onClick={() => navigate("/contact")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact me</button>
        </div>
      </div>
    </nav>
  );
}
export default App
