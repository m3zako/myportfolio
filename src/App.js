import './App.css';
import emailjs from '@emailjs/browser';
import joni from './pictures/joninobg.png';
import project1 from './pictures/project1.jpg';
import project2 from './pictures/project2.png';
import project3 from './pictures/project3.png';
import project4 from './pictures/project4.png';
import headshot from './pictures/IMG_9022_hair.jpg'
import { useState, useRef } from 'react';
import { FaJava } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { TbArrowBigDownFilled } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import { SiC, SiJavascript, SiHtml5, SiAssemblyscript, SiPython, SiGit, SiGithub, SiLinkedin } from 'react-icons/si';
import { Link } from "react-scroll";


const App = () => {
  const form = useRef();
  const [hovered, setHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ax0hgo', 'template_dlxqg6l', form.current, 'bAWa_8Cu6KtFPlWC3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  const menuIconVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const arrowIconVariants = {
    initial: {
      opacity: 0,
      y: -5,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <portfolio className="bg-gray-100 min-h-screen">
      <header className="relative">
        <nav className="fixed w-full h-10">
          <ul className="flex justify-end mr-6 mt-5">
            <li
              className="relative cursor-pointer text-[28px] fill-gray-800"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                variants={menuIconVariants}
                initial="initial"
                animate={hovered ? "animate" : "initial"}
                style={{zIndex:2, display: hovered || dropdownOpen ? "none" : "block" }}
                className='absolute right-2 top-3 text-[28px] fill-gray-800'
              >
                <TiThMenu />
              </motion.div>

              <motion.div
                variants={arrowIconVariants}
                initial="initial"
                animate={(hovered || dropdownOpen) ? "animate" : "initial"}
                style={{zIndex:2, display: hovered || dropdownOpen ? "block" : "none" }}
                className="absolute right-2 top-3 text-[28px] fill-gray-800"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <TbArrowBigDownFilled />
              </motion.div>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className="absolute right-0 top-10 w-30 bg-gray-150 bg-gray-100 shadow-md rounded-md py-2 z-2"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  style={{zIndex:2}}
                >
                  <li className="px-4 py-2 text-[20px] text-center hover:bg-gray-200">
                    <Link to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
                      Projects
                    </Link>
                  </li>
                  <li className="px-4 py-2 text-[20px] text-center hover:bg-gray-200">
                    <Link to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
                      About
                    </Link>
                  </li>
                  <li className="px-4 py-2 text-[20px] text-center hover:bg-gray-200">
                    <Link to="connect" smooth={true} duration={500} spy={true} exact="true" offset={-70} >
                      Connect
                    </Link>
                  </li>
                </motion.ul>
              )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
        <intro className="flex flex-col text-gray-800 items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-screen-lg flex flex-col lg:flex-row items-center justify-center">
            <motion.div className="mx-10 md:px-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <h1 className="text-4xl lg:text-4xl mb-4 font-bold">Hello! I'm Jonah.</h1>
              <p className="text-2xl lg:text-2xl text-justified mb-8">I'm a software engineer and developer with a creative passion for entertaining user experiences.</p>
              <p className="text-xl lg:text-xl mb-8">Welcome to my website portfolio!</p>
            </motion.div>
            <div className="w-full md:w-auto sm:w-auto flex-shrink-0">
              <motion.img src={joni} alt="Profile" className="mx-auto sm:mx-0"
                initial={{ y: "300%" }}
                animate={{ y: "0%" }}
                transition={{ type: "spring", duration: "1.5" }}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2" id="projects">
              <svg className="w-10 h-10 text-gray-800 animate-bounce" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 15a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42L10 12.59l3.29-3.3a1 1 0 111.42 1.42l-4 4A1 1 0 0110 15z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </intro>
      </header>
      <projects>
        <div className="bg-gray-100 text-gray-800 flex justify-center">
          <div className="flex flex-col items-center justify-center mb-40 mx-auto max-w-4xl md:mx-10">
            <h2 className="text-xl ld mb-8 text-gray-800 px-10">hover over any of these projects to learn a little more about them!</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mx-10">
              <div className="relative overflow-hidden rounded-xl">
                <motion.img src={project1} alt="Animation" initial={{x:-200}} whileInView={{x:0, zIndex:0, transition:{type:"spring", duration:1}}} viewport={{once:true}} style={{zIndex:1}}/>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100" style={{zIndex:1}}>
                  <div className="text-white text-center text-xs lg:text-sm xl:text-lg px-auto mx-auto">
                    <h1 className="text-lg font-bold mb-1">AR Glasses</h1>
                    <p className="text-md mx-2 my-2"> Worked on a heads up display and an Android application for consumer level hardware.</p>
                    <div className="flex flex-wrap justify-center mb-4">
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2 mb-2">
                      Java
                      </li>
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2 mb-2">
                        Android Studio
                      </li>
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2 mb-2">
                        Docker
                      </li>
                    </div>
                    <a href="https://imgur.com/a/DpAA6dY" rel="noreferrer" target="_blank" className="underline">View Project</a>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <motion.img src={project2} alt="Project 2" initial={{x:200}} whileInView={{x:0, transition:{type:"spring", duration:1}}} viewport={{once:true}}/>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="text-white text-center text-xs lg:text-sm px-auto mx-auto">
                    <h1 className="text-lg font-bold mb-2">Programmable Trackpad</h1>
                    <p className="mx-2 my-2"> Designed and developed a peripheral complete with macros, rotary encoders, and mouse funtionality from the ground up.</p>
                    <div className="flex flex-wrap justify-center mb-4">
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2">
                        Arduino
                      </li>
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2 ">
                        C
                      </li>
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full ">
                        Python
                      </li>
                    </div>
                    <a href="https://programmabletrackpad-group18.web.app/" rel="noreferrer" target="_blank" className="underline text-sm">View Project</a>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <motion.img src={project3} alt="Project 3" initial={{x:-200}} whileInView={{x:0, transition: {type: "spring", duration: 0.8}}} viewport={{once:true}}/>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="text-white text-center text-xs lg:text-sm px-auto mx-auto">
                    <h1 className="text-lg font-bold mb-1">Energy Solutions</h1>
                    <p className="mx-2 my-2 lg:mx-8"> Conducted a research to propose an energy efficient solution to Duke Energy. 
                      Curated a refined genetic algorithm using a neural network to find the optimal chemical formual for silicon insulators.</p>
                      <div className="flex flex-wrap justify-center mb-4">
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2">
                        Python
                      </li>
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2 ">
                        Tensorflow
                      </li>
                    </div>
                    <a href="https://imgur.com/WpQUj8z" rel="noreferrer" target="_blank"className="underline text-sm">View Project</a>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <motion.img src={project4} alt="Project 4" initial={{x:200}} whileInView={{x:0, transition: {type: "spring", duration: 1}}} viewport={{once:true}}/>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="text-white text-center md:text-sm lg:text-lg px-auto mx-auto">
                    <h1 className="text-lg font-bold mb-2">PocketPantry</h1>
                    <p className="mx-2 my-4 px-8"> An app for finding recipes and a checklist for grocery shopping.</p><div className="flex flex-wrap justify-center mb-4">
                      <li className="inline-block bg-gray-500 text-white py-1 px-3 rounded-full mr-2">
                        MERN
                      </li>
                    </div>
                    <a href="https://imgur.com/a/FRc3ZNk" rel="noreferrer" target="_blank" className="underline">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </projects>
      <about className="bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full px-auto flex flex-col lg:flex-row items-center justify-center max-w-screen-lg mb-32">
          <motion.div className="text-gray-800 items-center justify-center" initial={{y:300, opacity: 0}} whileInView={{y:0, opacity: 1, transition:{type:"spring", duration:1}}} id="about" viewport={{once:true}}>
            <div className="w-full flex flex-col lg:flex-row items-center lg:px-5">
              <div className="text-center lg:text-left sm:text-center mx-8">
                <h1 className="text-3xl mb-4 font-bold">About Me</h1>
                <p className="text-xl text-justify mb-8 ">I'm a '23 graduate from the University of Central Florida with a B.S. in Computer Engineering. <br/> <br/>
                  Aside from coding, most of my time goes towards the abundance of hobbies I have ranging from making music, building keyboards and gundams.<br/><br/>
                </p>
              </div>
              <div className="w-1/2 max-w-md flex-shrink-0">
                <img src={headshot} alt="Profile" className="rounded-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </about>
      <section className="bg-gray-100 min-h-0 flex-col items-center justify-center border-2 border-gray-100">
        <div className="items-center justify-center text-gray-800 mb-32 bg-gray-100 w-full">
          <motion.div initial={{y:300, opacity: 0}} whileInView={{y:0, opacity: 1, transition:{type:"spring", duration:1}}} viewport={{once:true}}>
            <h1 className="text-3xl lg:text-left sm:text-center mb-8 font-bold  max-w-screen-lg mx-auto text-center px-14">Skills</h1>
            <div className="flex flex-wrap md:flex-wrap sm:flex-row items-center justify-center" >
              <div className="text-center text-md flex flex-col items-center px-4">
                <FaJava className="w-16 h-16 mb-2" />
                <span className="mb-2">Java</span>
              </div>
              <div className="text-center text-md flex flex-col items-center px-4">
                <SiC className="w-16 h-16 mb-2" />
                <span className="mb-2">C/C++/C#</span>
              </div>
              <div className="text-center text-md flex flex-col items-center px-4">
                <SiJavascript className="w-16 h-16 mb-2" />
                <span className="mb-2">JavaScript</span>
              </div>
              <div className="text-center text-md flex flex-col items-center px-4">
                <SiHtml5 className="w-16 h-16 mb-2" />
                <span className="mb-2">HTML</span>
              </div>
              <div className="text-center text-md flex flex-col items-center px-4">
                <SiAssemblyscript className="w-16 h-16 mb-2" />
                <span className="mb-2">Assembly</span>
              </div>
              <div className="text-center text-md flex flex-col items-center px-4">
                <SiPython className="w-16 h-16 mb-2" />
                <span className="mb-2">Python</span>
              </div>
              <div className="text-center text-md flex flex-col items-center px-4">
                <SiGit className="w-16 h-16 mb-2" />
                <span className="mb-2">Git</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-100 min-h-0">
        <footer className="max-w-screen-lg mx-auto border-2 border-gray-100" id="connect">
          <motion.div className=" flex flex-col lg:flex-row mb-40 md:px-8" initial={{y:300, opacity: 0}} whileInView={{y:0, opacity: 1, transition:{type:"spring", duration:1}}} viewport={{once:true}}>
            <div className="px-6">
              <h1 className="text-3xl mb-4 text-center lg:text-left sm:text-center font-bold">Let's Connect!</h1>
              <p className="text-xl text-center lg:text-left md:text-center mb-8 lg:px-0"> If you'd like to connect, feel free to reach out!</p>
              <div className="flex flex-row px-4 items-center justify-center lg:items-left">
                <a className="flex flex-col items-center px-4" href="https://github.com/m3zako" rel="noreferrer" target="_blank">
                  <SiGithub className="w-12 h-12 mb-2" />
                </a>
                <a className=" flex flex-col items-center px-4" href="https://www.linkedin.com/in/jonah-halili/"  rel="noreferrer" target="_blank">
                  <SiLinkedin className="w-12 h-12 mb-2" />
                </a>
              </div>
            </div>
            <div className="w-full mx-auto">
              <form className="px-4" ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="Name"/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Email"/>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  </label>
                  <textarea className="shadow appearance-none border rounded h-48 w-full py-2 px-3 text-gray-700 resize-none leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Message"></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button type="submit" className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </footer>
      </section>
    </portfolio>
  );
}


export default App;