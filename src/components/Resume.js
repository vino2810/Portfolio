import aboutimg from '../Assets/Avatar.png'

export default function Resume() {
    const congi={
        link : 'https://drive.google.com/file/d/1pttns2X50oUQexBKgZpmLlmhPyQ6akHk/view?usp=drivesdk'
    }

    return <section className='flex flex-col md:flex-row  px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={aboutimg} />
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-2 mb-3 w-[140px] font-google-font'>Resume</h1>
                <p className='text-white pb-4 text-2xl font-content-font' data-aos="flip-down"   data-aos-duration="2000"
                >You Can View My Resume... <a href={congi.link} className='button' data-aos="flip-up" data-aos-duration="1000">Download</a></p>
            </div>
        </div>
    </section>
}