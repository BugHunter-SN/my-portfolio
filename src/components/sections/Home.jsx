import { RevealOnScroll } from "../RevealOnScroll";
import Image from "../../../public/Profile.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left z-10 px-4 max-w-5xl w-full mx-auto space-y-8 md:space-y-0 md:space-x-10">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Samuel E.H. Nimely
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition duration-300 hover:bg-blue-600 shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition duration-300 hover:bg-blue-500 hover:text-white shadow"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={Image}
              alt="Profile Image"
              className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-2 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
