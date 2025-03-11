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
              <FaGithub
                className="hover:text-white transition duration-300 cursor-pointer"
                size={24}
              />
              <a href="www.linkedin.com/in/jamaleddin-muntasser-4b436b305">
                {" "}
                <FaLinkedin
                  className="hover:text-blue-500 transition duration-300 cursor-pointer"
                  size={24}
                />
              </a>
              <FaFacebook
                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                size={24}
              />
              <FaInstagram
                className="hover:text-pink-500 transition duration-300 cursor-pointer"
                size={24}
              />
            </div>
          </div>

          {/* About Me Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-2/3">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Who am I ?
            </h3>
            <p className="text-gray-300 text-sm">
              Hi there! I'm a passionate developer with expertise in building
              educational platforms and digital libraries. The IT Library
              project stems from my commitment to making educational resources
              more accessible and organized for students.
            </p>
            <p className="text-gray-300 text-sm mt-4">
              With over 5 years of experience in web development and a
              background in computer science, I understand the challenges
              students face when accessing study materials. This platform is
              designed to streamline that process and create a better learning
              experience.
            </p>

            {/* Skills & Technologies */}
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
