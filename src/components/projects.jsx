import { useNavigate } from 'react-router-dom'


export function Project(){
    return(
        <div>
            <div className="mb-24"></div>


<hr className = 'pt-10 border-t border-[#a8a4f4]
 opacity-35  '></hr>



<h1 className='pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white'>Projects portfolio</h1>

<div className='bg-[#0d2438] text-white'>
  <div className='grid grid-cols-3 gap-1 justify-items-center'>
    <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
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
    )
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
