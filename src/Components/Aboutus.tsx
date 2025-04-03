import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import img2 from "../Img/img2.jpg";
const Aboutus = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-[200px]  "
    >
      <div className="max-w-4xl w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:mt-2 after:mx-auto after:mb-4">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
            <div className="w-32 h-32 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              {/* Placeholder for Image */}
              <img src={img2} alt="img" />
            </div>
            <h3 className="text-xl font-semibold">Jamaleddin Muntasser</h3>
            <p className="text-blue-400">Full Stack Developer</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4 text-gray-400">
              <a
                href="https://github.com/JBM-05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="hover:text-white transition duration-300 cursor-pointer"
                  size={24}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/jamaleddin-muntasser-4b436b305"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="hover:text-blue-500 transition duration-300 cursor-pointer"
                  size={24}
                />
              </a>

              <a
                href="https://www.facebook.com/jbm.muntasser.12/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  size={24}
                />
              </a>

              <a
                href="https://www.instagram.com/05_jbm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="hover:text-pink-500 transition duration-300 cursor-pointer"
                  size={24}
                />
              </a>
            </div>
          </div>

          {/* About Me Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-2/3">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Who am I ?
            </h3>
            <p className="text-gray-300 text-sm ">
              I’m a dedicated software engineer with a passion for web
              development, application development, and cybersecurity. Currently
              pursuing my degree at Benghazi University, I have honed my skills
              through self-taught learning and hands-on experience in full-stack
              development. My expertise spans JavaScript, React, Node.js, SQL,
              NoSQL, and Flutter, allowing me to build efficient and secure
              applications.
            </p>
            <p className="text-gray-300 text-sm mt-4">
              I’m committed to creating impactful projects that enhance
              accessibility and user experience, particularly in education. My
              projects, including digital libraries and database-driven
              platforms, aim to streamline information access for students.
              Beyond development, I’m deeply interested in cybersecurity,
              ensuring that the solutions I build are not only functional but
              also secure and resilient.
            </p>

            <h3 className="text-lg font-semibold text-blue-400 mt-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "MongoDB",
                "C++",
                "C",
                "C#",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm transition duration-300 hover:bg-blue-500 hover:text-white cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
