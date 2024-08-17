import { useNavigate } from 'react-router-dom'


export function Project(){
    return(
        <div>
            <div className="mb-24"></div>


<hr className = 'pt-10 border-t border-[#a8a4f4] opacity-35'/>



<h1 className='pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white'> Tech Projects</h1>

<div className='bg-[#0d2438] text-white'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-1  justify-items-center'>
              <Projects  image={'/Ashjin.png'} title={'Ashjin'} description={'Landing Page Template for any Business'}  link={'https://ashjin.vercel.app/'}/>
              <Projects image={'/chatblock.png'} title={'Chatblock'} description={'Blockchain Conversational Wallet'} link={'https://chatblock-bay.vercel.app/login'} />
              <Projects image={'/Rateify.png'} title={'Rateify'} description={'Blockchain Based User Reviews and Ratings'} link={'https://youtu.be/T_EM94vUB_Q'} />
              <Projects image={'/Veggify.png'} title={'Veggify'} description={'AI Nutrition Companion'} link={'https://www.linkedin.com/posts/aayyushi-jain_mernstack-generativeai-webdevelopment-activity-7222827096341954560-UXZn?utm_source=share&utm_medium=member_desktop'} />
              <Projects image={'/Chain_chest.png'} title={'Chain Chest'} description={'Decentralised Storage System'} link={'https://github.com/iamaayushijain/Chain-Chest'} />

            </div>
  

 
</div>


        </div>
    )
}

function Projects({ image, title, description, link }) {
  return (
    <div className='m-[5vh] '>
      <a href={link} target='_blank'>
      <img src={image} alt="'hello' "className='rounded  ' />
      <div className=' flex flex-col justify-center items-center '>
        <h1 className='text-1xl font-bold bg-[#3f5575] rounded-sm px-[2vh] m-[1vh]'>{title}</h1>
        <h2 className='text-1xl'>{description}</h2>
      </div>
      </a>
    </div>
  );
}
