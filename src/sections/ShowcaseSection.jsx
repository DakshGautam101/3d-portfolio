import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    const ctx = gsap.context(() => {
      // Fade-in section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      );

      // Animate projects alternately: left, right, bottom
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            x: index === 0 ? -100 : index === 1 ? 100 : 0,
            y: index === 2 ? 80 : 0,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-16 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="showcaselayout grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* First Project */}
          <div ref={rydeRef} className="flex flex-col items-start">
            <div className="image-wrapper w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/project1.png"
                alt="Ryde App Interface"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">
              Built a food ordering / showcasing website for a local cafe as a freelance project.
            </h2>
            <p className="text-gray-300 text-lg mt-2">
              An app built with React, Tailwind CSS, and Zustand for a fast, user-friendly experience.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/DakshGautam101/bhiwani-mumbai-chai-cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <div
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300 cursor-not-allowed opacity-50"
              >
                <FaExternalLinkAlt size={18} />
                <span>Live Demo - Not available</span>
              </div>
            </div>
          </div>

          {/* Project List */}
          <div className="flex flex-col gap-10">
            {/* Second Project */}
            <div ref={libraryRef} className="project">
              <div className="image-wrapper bg-[#FFEFDB] w-full h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/project2.png"
                  alt="Realtime Spotify Website"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-semibold mt-3">
                The Realtime Spotify Website — A real-time music player with messaging features.
              </h2>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://github.com/DakshGautam101/Realtime-spotify-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://realtime-spotify-clone-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            {/* Third Project */}
            <div ref={ycDirectoryRef} className="project">
              <div className="image-wrapper bg-[#FFE7EB] w-full h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/project3.png"
                  alt="SensAI App"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-semibold mt-3">
                SensAI — An AI assistant helping to create simple React applications.
              </h2>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://github.com/DakshGautam101/sensai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://sensai-ecru.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
