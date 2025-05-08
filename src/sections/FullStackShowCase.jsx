import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {fullstack} from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FullStackShowCase = () => {
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
   <div id="fullstack">
      <div className="hero-text w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center">
        <span className="slide">
          <span className="wrapper">
            {fullstack.map((word, index) => (
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
            <a href="https://carepulse-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src="/images/CarePulse.png" alt="CarePulse App Interface" />
              </div>
            </a>
            <div className="text-content">
              <h2>CarePulse</h2>
              <p className="text-white-50 md:text-xl">
                A medical registration and booking app that streamlines appointment scheduling and simplifies admin management for the healthcare sector.
              </p>
            </div>
          </div>

          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://tech-haven-ashy.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src="/images/Tech.png" alt="CarePulse App Interface" />
              </div>
            </a>
            <div className="text-content">
              <h2>Tech Haven</h2>
              <p className="text-white-50 md:text-xl">
                "A technology e-commerce platform where you can discover the best deals on a wide range of products."
              </p>
            </div>
          </div>



            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
              <a href="https://blogger-chi-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src="/images/bl.png" alt="blogger"/>
                </div>
              </a>
                <h2>Blogger - read about most recent news in tech industry</h2>
              </div>

              <div className="project" ref={ycDirectoryRef}>
                <a href="https://prep-wise-eight-olive.vercel.app/sign-in" target="_blank" rel="noopener noreferrer">
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <img src="/images/PrepWise.png" alt="prepwise" />
                  </div>
                </a>
                <h2>PrepWise: An AI-powered application designed to help developers enhance their interview skills through personalized practice and feedback.</h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default FullStackShowCase;
