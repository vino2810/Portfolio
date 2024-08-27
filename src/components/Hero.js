import HeroImg from '../Assets/bgrem.png';
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Hero(){

    const config ={
        subtitle : "I am a fullstack Developer",
        social : {
              Linkedin: 'https://www.linkedin.com/in/vinothkumar2810/',
              faceBook: '',
               gitHub: 'https://github.com/vino2810',
        }
    }
    return <section className='flex  flex-col md:flex-row  px-5 py-32   justify-center'>
        <div className='md:w-1/2 flex-col'  data-aos="fade-up"     data-aos-duration="1000"  > 
        <h1 className=' text-white text-6xl font-google-font'> Hi... <br/> I'm Vinothkumar 
        <p className='text-2xl' >{config.subtitle}</p> </h1>
        <div className='flex py-7'>
            <a href={config.social.Linkedin} className='pr-3  text-[#0A66C2] hover:text-white '> <BsLinkedin  size={30}/></a>
            <a href={config.social.gitHub} className='pr-3 hover:text-white text-gray-600 md:text-[#181717] '> <AiOutlineGithub  size={30}/></a>
            <a href={config.social} className='pr-3  hover:text-white text-[#0A66C2]' > <FaFacebookSquare size={30}/></a>
            <a href={config.social} className='pr-3  hover:text-white text-[#E4405F]'> <AiOutlineInstagram size={30}/></a>
        </div>
        </div>
     
     <img alt='' className='md:w-1/3 ' src={HeroImg} data-aos="fade-down-right"  data-aos-duration="1000"   />
     </section>
}