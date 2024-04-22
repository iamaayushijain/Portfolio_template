import Pdf from './assets/RESUME--Aayushi Jain.pdf';
import UX from '/public/ux-design.png'
import react from '/public/react.svg'
import C from '/public/c-.png'
import tail from '/public/tailwind-css.svg'
import python from '/public/python.png'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"


import React, { useEffect, useState } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedText = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 5,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    return controls.stop;
  }, []);

  return (
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
};

export default AnimatedText;


export function Home() {
    const navigate = useNavigate();
  
    return (
      <div className='font-roboto'>
        <div>
          <div className='flex justify-between items-center bg-[#0d2438] text-white pb-8 '>
            <div className='text-left w-full'>
            <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
              <h1 className='text-5xl font-bold text-left pb-4'>Hi, I am <span className='text-[#dabab3]'>Aayushi</span></h1>
              </motion.div>

              <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
              <h1 className='text-3xl font-bold text-left pb-4'>Software Developer & Designer</h1></motion.div>
  
              <p className='pb-6'>
              <AnimatedText text="I am currently pursuing Computer Science at NSUT. I am actively seeking freelance opportunities to further refine my skills and contribute to impactful projects.
" />
                            </p>


  
              <button
                className='hover:underline text-[#dabab3] bg-transparent border border-solid border-[#dabab3] rounded py-2 px-4 hover:bg-[#dabab3] hover:text-white'
                onClick={() => window.open(Pdf, '_blank')}
              >
                Download CV
              </button>
            </div>
  
            <img src='https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg' alt="'Profile picture'" className='h-80 rounded-md pr-16 pl-8 hidden md:flex' />
          </div>
  
          <div className='flex justify-between items-center pl-8 pr-8 bg-[#3f5575] text-white h-32 subpixel-antialiased'>
            <div className='relative w-20 h-20 group'>
            <motion.image
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
>
<img src={react} alt="" className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                React
              </div>
            </div>
            <div className='relative w-20 h-20 group'>
              <img src={C} alt="'Data Structures'" className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' />
              <p className=' subpixel-antialiased absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Data Structures
              </p>
            </div>
            <div className='relative w-24 h-16 group'>
              <img src={tail} alt="'Tailwind CSS' "className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' />
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Tailwind CSS
              </div>
            </div>
            <div className='relative w-20 h-20 group hidden sm:block'>
              <img src={python} alt="'Python'" className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' />
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Python
              </div>
            </div>
            <div className='relative w-20 h-20 group pb-8 hidden sm:block'>
              <img src={UX} alt="'UI/UX Design'" className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' />
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                UI/UX Design
              </div>
            </div>
          </div>
          <div className="mb-24"></div>


          <hr className = 'pt-10 border-t border-[#dabab3] opacity-35  '></hr>


  
          <h1 className='pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white'>Projects portfolio</h1>
  
          <div className='bg-[#0d2438] text-white'>
            <div className='grid grid-cols-3 gap-1 justify-items-center'>
              <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
              <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
              <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
            </div>
  
            <div className='flex justify-center items-center pt-32'>
              <button
                className='hover:underline h-8 justify-center items-center text-[#dabab3] bg-transparent border border-solid border-[#dabab3] rounded py-2 px-4 hover:bg-[#dabab3] hover:text-white hidden md:flex lg:flex-row'
                onClick={() => navigate('/projects')}
              >
                More projects
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Projects({ image, title, description }) {
    return (
      <div>
        <img src={image} alt="'hello' "className='rounded h-full w-52' />
        <div className='w-52 bg-[#3f5575]'>
          <h1 className='text-1xl font-bold'>{title}</h1>
          <h2 className='text-1xl'>{description}</h2>
        </div>
      </div>
    );
  }