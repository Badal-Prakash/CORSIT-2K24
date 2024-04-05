import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { ExternalLink } from "react-external-link";
function Footer() {
  return (
    <footer className="relative bg-slate-900 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-4xl font-bold text-blueGray-700">CORSIT</h4>
            <h5 className="text-lg mt-3 mb-2 text-blueGray-600">
              Get Social with us! Follow, Like and Connect on our Social Media
              Platforms
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <ExternalLink
                href="https://www.instagram.com/corsit.sit/"
                className="text-blueGray-800 font-normal  items-center justify-center align-center  outline-none focus:outline-none mr-2 h-10 w-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ..."
                type="button"
              >
                <FaInstagramSquare className="h-10 w-10 rounded" />
              </ExternalLink>
              <ExternalLink
                href="https://www.facebook.com/thecorsit/"
                className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebook className="h-10 w-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." />
              </ExternalLink>
              <ExternalLink
                href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w"
                className=" text-red-600 font-normal  items-center justify-center align-center rounded-xl outline-none focus:outline-none mr-2 h-10 w-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ..."
                type="button"
              >
                <FaYoutube className="h-10 w-10 rounded" />
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/company/corsit/"
                className="text-blueGray-800 font-normal  items-center justify-center align-center  outline-none focus:outline-none mr-2 h-10 w-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                type="button"
              >
                <CiLinkedin className="h-10 w-10 rounded" />
              </ExternalLink>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-2xl font-bold mb-2">
                  EVENTS
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm bg-white text-transparent
                            hover:bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            bg-clip-text transition duration-300 cursor-pointer"
                    >
                      RoboExpo
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm bg-white text-transparent
                            hover:bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            bg-clip-text transition duration-300 cursor-pointer"
                    >
                      Workshop
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm bg-white text-transparent
                            hover:bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            bg-clip-text transition duration-300 cursor-pointer"
                    >
                      Robocor
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm bg-white text-transparent
                            hover:bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            bg-clip-text transition duration-300 cursor-pointer"
                    >
                      Hackthon
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <span className="block uppercase text-blueGray-500 text-2xl font-semibold mb-2">
                  NEED HELP?
                </span>
                <ul className="list-unstyled">
                  <li>
                    <div className="flex items-center my-2">
                      <FaWhatsapp />
                      <span
                        className="text-[16px] ml-3 bg-white text-transparent
                            hover:bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            bg-clip-text"
                      >
                        <ExternalLink href="https://wa.link/1t53tq">
                          Contact us on WhatsApp
                        </ExternalLink>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ">
                      <CiMail />
                      <span className="text-[16px] ml-3 text-white  ">
                        <ExternalLink href="mailto:lav14251@gmail.com">
                          <p
                            className="bg-white text-transparent
                            hover:bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            bg-clip-text
                            "
                          >
                            Contact us on Gmail
                          </p>
                        </ExternalLink>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
