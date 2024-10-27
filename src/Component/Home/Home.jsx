import { Link } from 'react-scroll';
import HeroImage from '../../assets/Portfolio_assets/hero-pfl.png'
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md '>
                        I have 2 years of experience building and designing software.
                        Currently,I love to work on web application using technologies like
                        React, Tailwind, MongoDB.
                    </p>
                    <div className=' flex gap-4'>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-bold bg-gradient-to-r from-cyan-500 to-blue-500 gap-2 cursor-pointer '>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300  '><FaPersonWalkingArrowRight size={25} /></span>

                        </Link>

                        <a
                            href="../../assets/Portfolio_assets/Mosayeb-Hossain.pdf"
                            download= 'Mosayeb_Hossain.pdf'                            className="block  lg:hidden group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold  transition-transform duration-300"
                        >
                            Resume
                            <span className="ml-2 group-hover:rotate-90 duration-300">
                            <FaFileDownload />
                            </span>
                        </a>



                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full  ' />
                </div>
            </div>
        </div>
    );
};

export default Home;