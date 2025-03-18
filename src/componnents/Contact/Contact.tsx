//import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className="flex">
        <div className="w-300 bg-blue-700">
          {" "}
          <h1 className="text-5xl font-bold text-white pt-12 pb-12">
            Hire me!
          </h1>
        </div>
        <div className="w-150">B2</div>
      </div>
      <div className="flex">
        <div className="w-300">
          <div className="flex">
            <FontAwesomeIcon icon={faPhone} /> <h2>+48 698 973 660</h2>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faEnvelope} /> <h2>+48 698 973 660</h2>
          </div>
        </div>
        <div className="w-150 bg-blue-700">B4</div>
      </div>
    </>
  );
};
