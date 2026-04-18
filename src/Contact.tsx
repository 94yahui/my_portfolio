import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-270 m-auto relative w-full mt-30 bg-linear-to-br from-blue-200 dark:from-blue-950 border-dashed border border-blue-500 dark:border-blue-700 p-20 rounded-2xl group scroll-mt-30"
    >
      <Send className="w-30 h-30 absolute left-0 bottom-0 rotate-20 opacity-0 group-hover:opacity-5 group-hover:bottom-7 group-hover:left-15 transition-all duration-1000" />
      <Mail className="w-30 h-30 absolute right-7 bottom-0 rotate-20 opacity-0 group-hover:opacity-5 group-hover:bottom-7 transition-all duration-1000" />
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-100">
          Let's Build Something Great Together
        </h1>
        <p className="mt-5 max-w-150 m-auto text-gray-700 dark:text-gray-400">
          Whether it's a polished mobile app or a full-featured web application,
          I bring ideas to life with clean code and great user experience. Let's
          collaborate and build something you're proud of.
        </p>
      </div>
      <div className="mt-15 flex gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/yahui-xu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl text-blue-600 dark:text-blue-400 hover:scale-110 transition cursor-pointer"
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
            className="text-4xl text-gray-700 dark:text-gray-300 hover:scale-110 transition cursor-pointer"
          />
        </a>
        <a href="mailto:xuyahui12@gmail.com" className="inline-block">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl text-gray-600 dark:text-gray-300 hover:scale-110 transition cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
