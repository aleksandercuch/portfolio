import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Hobbys } from "@/componnents/Hobbys/Hobbys";
import { Contact } from "@/componnents/Contact/Contact";

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <nav className="fixed top-0 w-full bg-white shadow-md p-4  z-3">
        <div className="flex justify-between items-center">
          <a className="text-2xl">Aleksander Cuch</a>
          <div className="flex space-x-6">
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
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-4xl hover:bg-blue-600">
              View Work
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-4xl hover:bg-blue-600">
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <section
        id="about"
        className="p-10 text-center bg-blue-600 text-white pb-60 relative"
      >
        <h2 className="text-3xl font-bold">
          Hi, I'm Aleksander. Nice to meet you.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Based in Gdańsk, Poland, I have been working as a fullstack developer
          since 2020 and started my freelance journey in 2024. I’ve always been
          someone who has both a creative and a logical side. I've done remote
          work for agencies and startups to create digital products for both
          business and consumer use in pharmacy, financial, logistics and real
          estate industries. I'm quietly confident, naturally curious, and
          perpetually working on improving my chops.
        </p>
      </section>
      <section
        id="experience"
        className="flex max-w-5xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 -mt-50 relative"
      >
        <div className="w-1/3">
          <h2 className="text-2xl text-center mb-10">Fullstack Developer</h2>
          <ul className="list-disc">
            <li>
              Creating fullstack applications using such technologies:{" "}
              <ul className="list-disc ml-4">
                <li>React.js with Redux.js</li>
                <li>Next.js</li>
                <li>Javascript, Typescript</li>
                <li>Typescript</li>
                <li>SCSS, Tailwind, Styled Components, MUI</li>
                <li>REST API, GraphQL</li>
                <li>Docker, Firebase</li>
                <li>Jest, Cypress, CI/CD</li>
              </ul>
            </li>
            <li>Deep understanding of developer and business processes</li>
          </ul>
        </div>
        <div className="w-1/3 ">
          <h2 className="text-2xl text-center mb-10">Leader</h2>
          <ul className="border-l border-gray-300 px-4">
            <li>first element</li>
          </ul>
        </div>
        <div className="w-1/3 ">
          <h2 className="text-2xl text-center mb-10">Mentor</h2>
          <ul className="border-l border-gray-300 px-4">
            <li>first element</li>
          </ul>
        </div>
      </section>
      <section
        id="projects"
        className="p-10 bg-blue-600 text-white pt-20 -mt-10"
      >
        <h2 className="text-3xl font-bold text-center pb-10">My Work</h2>
        <div className="flex flex-row gap-4">
          <div className="w-1/2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="./globe.svg"
              width={800}
              height={300}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-1/2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="./globe.svg"
              width={800}
              height={300}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
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
