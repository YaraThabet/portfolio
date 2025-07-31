import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useGSAP(() => {
    const projectRefs = [project1.current, project2.current, project3.current];

    projectRefs.forEach((card, index) => {
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
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <img src="/public/images/project4.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                It has become easier for companies to submit a job offer and
                provides opportunities for workers to obtain job offers.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#87afb9]">
                <img
                  src="/public/images/project5.jpg"
                  alt="Library Management Platform"
                  className="p-2 rounded-lg"
                />
              </div>
              <h2>Website for a medical clinic</h2>
            </div>

            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#4b4a4a]">
                <img
                  src="/public/images/project6.jpg"
                  alt="YC Directory App"
                  className="p-2 "
                />
              </div>
              <h2>Phones website</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div id="work" className="app-showcase">
    //   <div className="w-full">
    //     <div className="showcaselayout">
    //       {/* left */}
    //       <div className="first-project-wrapper">
    //         <div className="image-wrapper ">
    //           <img src="/public/images/project4.jpg" alt="Ryde App Interface" />
    //         </div>
    //         <div className="text-content">
    //           <h2>
    //             It has become easier for companies to submit a job offer and
    //             provides opportunities for workers to obtain job offers{" "}
    //           </h2>
    //           <p className="text-white-50 md:text-xl">
    //             An app built eith React , TailwindCSS for a fast ,user-friendly
    //             experience.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* {right} */}
    //     <div className="project-list-wrapper overflow-hidden">
    //       <div className="project">
    //         <div className="image-wrapper bg-[#165d7d]">
    //           <img
    //             src="/public/images/project5.jpg"
    //             alt="Library Management platform"
    //           />
    //         </div>
    //         <h2>Website for a medical clinic</h2>
    //       </div>
    //       <div className="project">
    //         <div className="image-wrapper bg-[#414647]">
    //           <img
    //             src="/public/images/project6.jpg"
    //             alt="Library Management platform"
    //           />
    //         </div>
    //         <h2>Phones website</h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ShowcaseSection;
