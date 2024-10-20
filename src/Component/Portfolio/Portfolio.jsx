import { Link } from 'react-scroll';
import Food_can_go from '../../assets/Portfolio_assets/Screenshot (344).png'
import Edusity from '../../assets/Portfolio_assets/Screenshot (355).png'
import N_X from '../../assets/Portfolio_assets/Screenshot (366).png'
import Doctors from '../../assets/Portfolio_assets/Screenshot (388).png'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: Food_can_go,
            demo: 'https://food-can-go-frontend.vercel.app/',
            code: 'https://github.com/Mosayeb09/FOOD_CAN_GO'
        },
        {
            id: 2,
            src: Edusity,
            demo: 'https://edusity-sepia.vercel.app/',
            code: 'https://github.com/Mosayeb09/Edusity.git'
        },
        {
            id: 3,
            src: N_X,
            demo: 'https://mosayeb09.github.io/N_X/',
            code: 'https://github.com/Mosayeb09/N_X.git'
        },
        {
            id: 4,
            src: Doctors,
            demo: 'https://khanbiotech.com/',
            code: 'home'
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>


            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className=' pt-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({ id, src,demo,code }) => (<div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center '>
                                {/* <button className=' w-1/2 px6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}

                                <a href={demo} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Demo
                                </a>
                                <a href={code} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Code
                                </a>
                            </div>
                        </div>))
                    }

                </div>
            </div>

        </div>
    );
};

export default Portfolio;