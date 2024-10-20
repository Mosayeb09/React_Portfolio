

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
                <div className="pb-8 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
                </div>
                <p className="text-xl mt-20  ">
                Hi, I'm Mosayeb, a passionate software engineer specializing in building exceptional front-end experiences. I have a deep love for working with modern frameworks like React and Next.js, where I bring intuitive and responsive user interfaces to life. My focus is on creating web applications that are not only visually appealing but also fast and optimized for performance.
                </p>
                <br />
                <p className="text-xl">
                While front-end development is my primary area of expertise, I'm also on a journey to mastering back-end technologies, learning about server-side logic, APIs, and databases to grow into a well-rounded developer. Working with Next.js has helped me bridge the gap between front-end and back-end development, allowing me to create seamless, full-stack applications.
                <br />
                <br />
                I’m driven by a desire to solve complex problems and stay ahead of the curve in the ever-evolving tech landscape. Whether it's collaborating with teams or working on solo projects, I aim to build scalable, user-friendly, and efficient solutions.
                <br />
                <br />
                When I'm not coding, I'm likely exploring new tools and frameworks, contributing to open-source projects, or learning new skills to continue growing as a developer.
                <br />
                <br />
                Let's connect and create something awesome together!
                </p>
                <br />
                {/* <p className="text-xl">
                I’m driven by a desire to solve complex problems and stay ahead of the curve in the ever-evolving tech landscape. Whether it's collaborating with teams or working on solo projects, I aim to build scalable, user-friendly, and efficient solutions.
                </p>
                <br /> */}
                {/* <p className="text-xl">
                When I'm not coding, I'm likely exploring new tools and frameworks, contributing to open-source projects, or learning new skills to continue growing as a developer.
                </p>
                <br />
                <p className="text-xl">
                Let's connect and create something awesome together!
                </p> */}
               
            </div>
        </div>
    );
};

export default About;