import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Catching Phrase */}
        <div className="mb-4 md:mb-0">
          <p className="text-xl font-semibold">Connect with me!</p>
        </div>

        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-white-400" />
            <a
              href="mailto:esther514514@gmail.com"
              className="hover:underline"
            >
              esther514514@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-white-400" />
            <span>404 606 0229</span>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white-400" />
            <span>Atlanta, GA</span>
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/estherpark514/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/estherpark514"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-gray-600 rounded-lg hover:bg-gray-700 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 Esther Park. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;