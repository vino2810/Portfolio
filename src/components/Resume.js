import aboutimg from '../Assets/Avatar.png'
import { GiClick } from "react-icons/gi";

export default function Resume() {
    const congi={
        link : 'https://drive.google.com/file/d/1pttns2X50oUQexBKgZpmLlmhPyQ6akHk/view?usp=drivesdk'
    }

    return <section className='flex flex-col md:flex-row  px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={aboutimg} alt='' />
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-2 mb-3 w-[140px] font-google-font'>Resume</h1>
                <p className='text-black pb-4 text-2xl font-content-font font-bold' data-aos="flip-down"   data-aos-duration="2000"
                >You Can View My Resume... </p>
                <div> <a href={congi.link} className='button my-4' data-aos="flip-up" data-aos-duration="1000">Click here..</a>
                <GiClick  className=' text-2xl'/></div>
            </div>
        </div>
    </section>
}