import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Email from "./Email";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Footer() {
  return (
    <div className=" mt-10 mb-16 flex flex-row justify-between">
      <p className="text-2xl">
        Designed and developed by{" "}
        <a
          className="font-semibold underline"
          target="_blank"
          href="https://www.linkedin.com/in/galexanrova/"
        >
          Galina Aleksandrova
        </a>
      </p>
      
      <div>
        <a href="https://github.com/2007riot" target="_blank">
          <FontAwesomeIcon className="md:size-12 size-6" icon={faGithub} />
        </a>
        <a 
        className="lg:ml-12 md:ml-4 ml-0 sm:mt-64"
          target="_blank"
          href="https://www.linkedin.com/in/galexanrova/"
        >
          <FontAwesomeIcon className="md:size-12 size-6" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
