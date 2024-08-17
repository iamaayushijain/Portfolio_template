import Pdf from './assets/RESUME--Aayushi Jain.pdf';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiTailwindcss} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";


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
      duration: 4,
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
          
          <div className='flex justify-between items-center bg-[#0d2438] text-white pb-8 pt-8 '>

            <div className='text-left w-full md:ml-32'>
            <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
              <h1 className='md:text-5xl text-4xl font-bold text-left pb-4'>Hi, I am <span className='text-[#a8a4f4]
'>Aayushi</span></h1>
              </motion.div>

           
              <h1 className='md:text-3xl text-2xl font-bold text-left pb-8 pt-2'>
                <AnimatedText text="Software Developer and Designer"/>
              </h1>
              
              



  
              <button className='hover:underline text-[#a8a4f4] bg-transparent border border-solid border-[#a8a4f4] rounded py-2 px-4 hover:bg-[#a8a4f4] hover:text-white'
                      onClick={() => window.open(Pdf, '_blank')}>
               Download CV
              </button>
            
            </div>

  
            <img src='/landingimage.png' alt="'Profile picture'" className='h-[50vh] rounded-md pr-24 hidden md:flex' />
            <div className='h-8'></div>
          </div>


          
          <div className='md:grid md:grid-cols-5 hidden justify-content justify-items-center px-[10vh] py-10 text-white  subpixel-antialiased pt-8 '>
          
            <div className='relative w-16 h-20 group'>
              <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <FaReact alt="" className='absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 
' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                React
              </div>
            </div>

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <TbBrandLeetcode alt="" className='text-[#a8a4f4]
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Data Structures
              </div>
            </div>

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <SiTailwindcss alt="" className='
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                TailwindCSS
              </div>
            </div>

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <FaPython alt="" className='text-[#a8a4f4]
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Python
              </div>
            </div>

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <FiFigma alt="" className='
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                UI/UX Design
              </div>
           
            </div>

          </div>
          <div className="mb-40"></div>


          <hr className = 'pt-10 border-t border-[#a8a4f4] opacity-35  '/>

  
          <h1 className='pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white'>Projects portfolio</h1>
  
          <div className='bg-[#0d2438] text-white'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1  justify-items-center'>
              <Projects  image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
              <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
              <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
            </div>
  
            <div className='flex justify-center items-center pt-32'>
              <button
                className='hover:underline h-8 justify-center items-center text-[#a8a4f4]
 bg-transparent border border-solid border-[#a8a4f4]
 rounded py-2 px-4 hover:bg-[#a8a4f4]
 hover:text-white hidden md:flex lg:flex-row'
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
      <div className='my-[5vh]'>
        <img src={image} alt="'hello' "className='rounded h-full w-52' />
        <div className='w-52 bg-[#3f5575]'>
          <h1 className='text-1xl font-bold'>{title}</h1>
          <h2 className='text-1xl'>{description}</h2>
        </div>
      </div>
    );
  }