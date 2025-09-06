import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const expCards = [
  {
    title: "Student - BCA (Industry Integrated)",
    date: "Aug 2024 - Aug 2027",
    imgPath: "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1650970225_ILo4FcrEpm_thumb.jpg", // replace with actual image path
    logoPath: "/logo_cblu.png", // replace with CBLU logo
    responsibilities: [
      "Pursuing Bachelor of Computer Applications (Industry Integrated) at Chaudhary Bansi Lal University, Premnagar, Bhiwani.",
      "Learning core computer science concepts, software development, and industry-integrated practices.",
      "Working on academic projects focused on web development, MERN stack, and problem-solving.",
    ],
  },
  {
    title: "Student - CodeQuotient School of Technology",
    date: "Jul 2024 - Present",
    imgPath: "/campus.png", // replace with actual image path
    logoPath: "https://media.licdn.com/dms/image/v2/D4D0BAQF8VEsA_aQQ0g/company-logo_200_200/company-logo_200_200/0/1724137734318/codequotient_school_of_technology_logo?e=1759968000&v=beta&t=8yicsKzI79KtiL6r7LT99ZCEBy181otHUekRw1pjk50", // replace with CQST logo
    responsibilities: [
      "Enrolled in CodeQuotient's UG Program in Software Engineering (Panipat).",
      "Building real-world projects using MERN, Next.js, Python, C++, and JavaScript.",
      "Collaborating with peers on multiple industry-level projects to gain practical exposure.",
      "Participating in hackathons, coding challenges, and skill development workshops.",
    ],
  },
];

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Educational Journey & Projects"
          sub="🎓 Learning | Building | Growing"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper timeline-card">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                        <p className="text-[#839CB5] italic">Highlights</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
