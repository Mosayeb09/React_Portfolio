
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center flex-wrap">
                        {/* Left section: Navigation or logo */}
                        <div className="w-full md:w-auto mb-4 md:mb-0">
                            <h2 className="text-3xl font-signature"><a href="/">Mosayeb</a></h2>
                            {/* <p className="text-sm mt-2">Building digital experiences that matter.</p> */}
                        </div>

                        {/* Middle section: Social media links */}
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="https://www.instagram.com/mosaeb_hossain?igsh=M29jank5MThldXAw" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a href="https://github.com/Mosayeb09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/mosayeb-hossain-0004a3288/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>

                        {/* Right section: Contact information */}
                        <div className="text-sm">
                            <p>Email: <a href="mailto:mosayebhossain09@gmail.com" className="hover:text-gray-400">mosayebhossain09@gmail.com</a></p>
                            <p>Phone: +8801602053180</p>
                        </div>
                    </div>

                    {/* Bottom section: Copyright */}
                    <div className="mt-8 text-center text-xs border-t border-gray-800 pt-4">
                        <p>&copy; 2024 Mosayeb Hossain. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;