import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactIcon = ({ disableDarkMode = false }) => {
  return (
    <div className="flex gap-4 justify-center">
      <a
        href="https://www.linkedin.com/in/yahui-xu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`text-4xl ${disableDarkMode ? "text-blue-400" : "text-blue-600 dark:text-blue-400"} hover:scale-110 transition cursor-pointer`}
        />
      </a>

      <a
        href="https://github.com/94yahui"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={`text-4xl ${disableDarkMode ? "text-gray-300" : "text-gray-700 dark:text-gray-300"} hover:scale-110 transition cursor-pointer`}
        />
      </a>
      <a href="mailto:xuyahui12@gmail.com" className="inline-block">
        <FontAwesomeIcon
          icon={faEnvelope}
          className={`text-4xl ${disableDarkMode ? "text-gray-300" : "text-gray-600 dark:text-gray-300"} hover:scale-110 transition cursor-pointer`}
        />
      </a>
    </div>
  );
};

export default ContactIcon;
