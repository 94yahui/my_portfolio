import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full mt-30 bg-linear-to-br from-blue-200 border-dashed border border-blue-500 p-15 rounded-2xl group scroll-mt-30"
    >
      <Send className="w-30 h-30 absolute left-0 bottom-0 rotate-20 opacity-0 group-hover:opacity-5 group-hover:bottom-7 group-hover:left-15 transition-all duration-1000" />
      <Mail className="w-30 h-30 absolute right-7 bottom-0 rotate-20 opacity-0 group-hover:opacity-5 group-hover:bottom-7 transition-all duration-1000" />
      <div className="text-center">
        <h1 className="text-3xl">Let's Create Amazing Mobile Experiences</h1>
        <p className="mt-5 max-w-150 m-auto">
          Ready to bring your mobile app idea to life? I specialize in creating
          polished, user-friendly mobile applications that deliver exceptional
          experiences.
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
            className="text-4xl text-blue-600 hover:scale-110 transition cursor-pointer"
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
            className="text-4xl text-gray-700 hover:scale-110 transition cursor-pointer"
          />
        </a>
        <a href="mailto:xuyahui12@gmail.com" className="inline-block">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl text-gray-600 hover:scale-110 transition cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
