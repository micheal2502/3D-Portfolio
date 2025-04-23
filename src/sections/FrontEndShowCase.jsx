import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { words } from "../constants";
import {showcase} from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FrontEndShowCase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
   <div id="frontend">
      <div className="hero-text w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center">
        <span className="slide">
          <span className="wrapper">
            {showcase.map((word, index) => (
            <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
              <img src={word.imgPath} alt="person" className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
              <span>{word.text}</span>
            </span>))}
          </span>
        </span>
      </div>

      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://brainwave-nu-khaki.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src="/images/brainwave.png" alt="brainwave" />
              </div>
            </a>
              <div className="text-content">
                <h2>
                  Brainwave
                </h2>
                <p className="text-white-50 md:text-xl">
                  An AI chatting interface built with React Native, TailwindCSS for appealing frontend UX
                </p>
              </div>
            </div>

            <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://metaverse-4365cw86p-duong2s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src="/images/metaverse.png" alt="metaverse" />
              </div>
            </a>
              <div className="text-content">
                <h2>Metaverse</h2>
                <p className="text-white-50 md:text-xl">
                  The metaverse is an immersive virtual world where dreams become reality, letting you explore and feel lifelike experiences using just VR devices.
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
              <a href="https://nike-delta-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src="/images/nike.png" alt="nike"/>
                </div>
              </a>
                <h2>Nike Landing Page</h2>
              </div>

              <div className="project" ref={ycDirectoryRef}>
              <a href="https://3d-iphone-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/iphone.png" alt="iphone" />
                </div>
              </a>
                <h2>3D Iphone </h2>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  );
};

export default FrontEndShowCase;
