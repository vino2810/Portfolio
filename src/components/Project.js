import webImg from '../Assets/project1.png';
import busimg from '../Assets/busticket.png'
import police from '../Assets/police.jpeg'


export default function Project() {

   const config = {
    projects : [
        {
            image : webImg,
            description: 'Restaurant Web Application Domain(Frontend - ReactJs)',
            link : 'https://github.com/vino2810/Restaurant_Web_Application'
        },
        {
            image : busimg,
            description: 'Bus Ticket Reservation With Db Connection Domain(Backend-java&Mysql)',
            link : 'https://github.com/vino2810/Bus-Reservation'
        },
        {
            image : police,
            description: 'Police DataBase Management System Domain(Database-Mysql)',
            link : 'https://github.com/vino2810/Police_Database_Management_'
        },
    ]
   }


    return <section className="flex flex-col py-20 px-5 justify-center   text-white" id='project'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl text-white border-b-2 mb-3 w-[120px] font-google-font">Project</h1>
                <p className='text-xl'>"These projects were built using a range of tools and technologies, including <span className='text-yellow-300  font-bold'>ReactJs, JavaScript, HTML/CSS, Java, and MySQL.</span>"
                </p>
            </div>
        </div>
        <div className="w-full" >
            <div className='flex flex-col md:flex-row px-10 gap-5' data-aos="zoom-in-left" data-aos-delay="50"  data-aos-duration="1000">
                {config.projects.map((project)=>
               
                  <div className='relative rounded'>
                  <img className='h-[200px] w-[500px]' src={project.image} />
                  <div className='absolute left-0 right-0 bottom-0 top-[0px] bg-secondary opacity-0 duration-500 hover:opacity-100'>
                      <p className='text-center px-5 py-5 font-bold' >{project.description} 
                      <div className='flex justify-center'>
                    <a target='_blank' href={project.link} className='button my-2'>View Source</a>
                  </div>
                      </p>
                  </div>
                 
              </div>  
            
                )}
              
              


            </div>

        </div>
    </section>
}