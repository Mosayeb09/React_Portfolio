
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/feed/',
            className: 'rounded-tr-md'

        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Mosayeb09',


        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:mosayebhossain09@gmail.com',


        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/public/MosayebHossain.pdf',
            className: 'rounded-br-md',
            download: true,

        },
    ]
    return (
        <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {
                    links.map(({ id, child, href, className, download }) => (
                        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${className}`}>
                            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noopener noreferrer">
                                {child}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default SocialLink;