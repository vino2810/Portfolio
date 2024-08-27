

export default function About() {
    const config = {
        line1: '"Hello! Im Vinothkumar, a 2023 BSc Computer Science graduate with a passion for technology and software development."',
        line2: 'My journey in technology has equipped me with a diverse skill set in both front-end and back-end development, including languages and frameworks like Java, JavaScript, React JS, HTML, CSS, and MySQL.',
        line3: 'As a lifelong learner👨🏻‍💻, I’m driven by the excitement of new challenges and the opportunity to innovate within the tech space.'
    }

    return <section className='flex flex-col md:flex-row justify-center  px-5' id='about'>

        {/* <img src={aboutimg} alt='resume' className='md:w-1/3 mx-3 rounded-full bg-transparent' data-aos-duration="1000" data-aos="zoom-out-right"/> */}
        <div className=' flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-2 mb-3 w-[160px] font-google-font '>About me</h1>
                <p className=' pb-4 font-sans text-lg text-white  ' data-aos-duration="1000" data-aos="flip-right"> {config.line1}</p>
                <p className='text-white  pb-4 font-sans text-lg ' data-aos-duration="1000" data-aos="flip-left"> {config.line2}</p>
                <p className='text-white  pb-4 font-sans text-lg ' data-aos-duration="1000" data-aos="fade-up"> {config.line3}</p>

            </div>

        </div>
    </section>
}