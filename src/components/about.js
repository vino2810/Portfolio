import aboutimg from '../Assets/aboutimg.jpeg'

export default function About() {
    const config = {
        line1: '"Im a  BSc Computer Science graduate with a strong foundation in Full Stack Development. My skill set includes Java, JavaScript, HTML, CSS, React JS, and MySQL, enabling me to build dynamic, user-friendly web applications from front-end to back-end."',

    }

    return <section className='flex flex-col md:flex-row justify-center  px-5' id='about'>
        <img src={aboutimg} alt='resume' className='md:w-1/3 mx-3 rounded-full bg-transparent' data-aos-duration="1000" data-aos="zoom-out-right" />
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-2 mb-3 w-[160px] font-google-font '>About me</h1>
                <p className='text-white pb-4 font-google-font text-2xl ' data-aos-duration="1000" data-aos="flip-right"> {config.line1}</p>

            </div>

        </div>
    </section>
}