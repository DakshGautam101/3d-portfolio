const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },

];

const counterItems = [
  { value: 1.5, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering top-notch solutions while ensuring precision and detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Transparent Communication",
    desc: "Keeping clients updated regularly to ensure smooth collaboration.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Completing projects on schedule without compromising on quality.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Daksh played a key role in enhancing our React-based web applications at TCS, delivering blazing-fast experiences for our users. His contribution was crucial for improving performance.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/tcs.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Built scalable, user-friendly UIs for enterprise-level clients.",
      "Worked closely with designers to create seamless user journeys.",
      "Optimized application performance by reducing bundle sizes by 30%.",
    ],
  },
  {
    review: "Daksh has been a fantastic addition to the Infosys development team. His skills in full-stack development and API integration have made a huge impact on our projects.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/infosys.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led development of SaaS dashboards for enterprise clients.",
      "Integrated RESTful APIs with efficient error handling and caching.",
      "Collaborated with cross-functional teams to deliver high-performance solutions.",
    ],
  },
  {
    review: "Daksh’s work at Zomato on React Native apps was top-notch. The app performance improved significantly, and users loved the redesigned experience.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/zomato.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Developed cross-platform food delivery apps using React Native.",
      "Enhanced app speed and reduced crashes by 40% through optimizations.",
      "Implemented features based on real-time customer feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "tcs",
    imgPath: "/images/logos/tcs.png",
  },
  {
    name: "infosys",
    imgPath: "/images/logos/infosys.png",
  },
  {
    name: "zomato",
    imgPath: "/images/logos/zomato.png",
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    mentions: "@rohitsharma",
    review:
      "Daksh transformed our complex e-commerce requirements into a seamless web app for Flipkart. His dedication and skill are unmatched.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Nehal Verma",
    mentions: "@nehalverma",
    review:
      "Working with Daksh was smooth and hassle-free. He delivered a robust backend architecture for our Paytm merchant APIs.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Aman Gupta",
    mentions: "@amangupta",
    review:
      "Daksh is a highly skilled developer who cares deeply about quality. Our team at Zoho loved collaborating with him on enterprise dashboards.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Priyanshu Singh",
    mentions: "@priyanshusingh",
    review:
      "Daksh revamped our company website at HCL, giving it a modern and intuitive look. His professionalism stood out throughout the project.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Arjun Mehta",
    mentions: "@arjunmehta",
    review:
      "Daksh’s expertise helped us build a highly optimized video streaming platform for SonyLIV. Excellent work and attention to detail.",
    imgPath: "/images/client5.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
