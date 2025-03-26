//import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export const Contact = () => {
  return (
    <>
      <div className="block md:flex">
        <div className="w-full md:w-300 bg-blue-950 contact-top-left-block mb-2 content-center">
          {" "}
          <h1 className="text-5xl font-bold text-white">Hire me!</h1>
        </div>
        <div className="w-full md:w-150 bg-gradient-to-l from-amber-200 to-white contact-top-right-block mb-2 justify-center pt-3 pb-3 flex">
          <Image
            src="/4.jpg" // Replace with your actual image path
            alt="HEMA Sports"
            width={200}
            height={200}
            priority
            className="contact-top-right-block"
          />
        </div>
      </div>
      <div className="block md:flex">
        <div className="w-full md:w-300 bg-gradient-to-r from-amber-200 to-white contact-bottom-left-block ">
          <div className="flex text-1xl md:text-5xl pt-20 pb-20 pl-20 gap-10 md:gap-20 ">
            <FontAwesomeIcon icon={faPhone} /> <h2>+48 698 973 660</h2>
          </div>
          <div className="flex text-1xl md:text-5xl pt-20 pb-20 pl-20 gap-10 md:gap-20">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <h2>cuch.aleksander@gmail.com</h2>
          </div>
        </div>
        <div className="w-full mt-2 md:mt-0 md:w-150 bg-blue-950 text-white contact-bottom-right-block content-center gap-10">
          <h2 className="text-3xl md:text-5xl pb-20 mt-2">Download CV</h2>
          <FontAwesomeIcon icon={faCircleDown} className="text-8xl mb-10" />
        </div>
      </div>
    </>
  );
};
