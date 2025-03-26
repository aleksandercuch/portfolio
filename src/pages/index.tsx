import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Hobbys } from "@/componnents/Hobbys/Hobbys";
import { Contact } from "@/componnents/Contact/Contact";
import { Projects } from "@/componnents/Projects/Projects";
import { Experience } from "@/componnents/Experience/Experience";
import { About } from "@/componnents/About/About";

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <nav className="fixed top-0 w-full bg-white shadow-md p-4  z-3 ">
        <div className="flex justify-between items-center">
          <a className="text-2xl">Aleksander Cuch</a>
          <div className="flex space-x-6 hidden md:block">
            <Link
              to="about"
              smooth
              className="cursor-pointer hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="experience"
              smooth
              className="cursor-pointer hover:text-blue-600"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth
              className="cursor-pointer hover:text-blue-600"
            >
              My Work
            </Link>
            <Link
              to="hobbies"
              smooth
              className="cursor-pointer hover:text-blue-600"
            >
              Hobbies
            </Link>
            <Link
              to="contact"
              smooth
              className="cursor-pointer hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <header className="h-screen  bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="h-screen w-full md:w-1/2 justify-center flex flex-col items-center text-center float-right">
          <h2 className="text-3xl font-bold pb-10">Welcome to my website!</h2>
          <h1 className="text-5xl font-bold pb-7">I am Web Developer</h1>
          <div className="flex space-x-4 pb-5">
            <a
              href="https://www.facebook.com/aleksander.cuch/"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/aleksandercuch/"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksander-cuch-161118180/"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/aleksandercuch"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <div className="flex space-x-4">
            <Link to="projects" smooth>
              <button className="bg-blue-950 text-white px-6 py-3 rounded-2xl hover:bg-blue-800">
                View Work
              </button>
            </Link>
            <Link to="contact" smooth>
              <button className="bg-blue-950 text-white px-6 py-3 rounded-2xl hover:bg-blue-800">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </header>

      <section
        id="about"
        className="p-10 text-center bg-blue-950 text-white pb-60 relative"
      >
        <About />
      </section>
      <section
        id="experience"
        className="flex max-w-5xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 -mt-50 relative"
      >
        <Experience />
      </section>
      <section
        id="projects"
        className="p-10 bg-blue-950 text-white pt-20 -mt-10"
      >
        <Projects />
      </section>

      <section id="hobbies" className=" bg-gray-200">
        <Hobbys />
      </section>

      <section id="contact" className="p-10 bg-white text-center">
        <Contact />
      </section>

      <footer className="p-4 text-center bg-gray-800 text-white">
        <p>&copy; 2025 Aleksander Cuch. All rights reserved.</p>
      </footer>
    </div>
  );
}
