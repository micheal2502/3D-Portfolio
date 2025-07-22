const navLinks = [
  {
    name: "Front-End Landing Page",
    link: "#frontend",
  },
  {
    name: "FullStack Applications",
    link: "#fullstack",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const showcase = [
  { text: "Front-End Application", imgPath: "/images/ideas.svg" },
  { text: "Front-End Application", imgPath: "/images/concepts.svg" },
  { text: "Front-End Application", imgPath: "/images/ideas.svg" },
  { text: "Front-End Application", imgPath: "/images/concepts.svg" },
];

const fullstack = [
  { text: "Fullstack Application", imgPath: "/images/code.svg" },
  { text: "Fullstack Application", imgPath: "/images/designs.svg" },
  { text: "Fullstack Application", imgPath: "/images/code.svg" },
  { text: "Fullstack Application", imgPath: "/images/designs.svg" },
];


const AI = [
  { text: "AI Application", imgPath: "/images/code.svg" },
  { text: "AI Application", imgPath: "/images/designs.svg" },
  { text: "AI Application", imgPath: "/images/code.svg" },
  { text: "AI Application", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Programming Language" },
  { value: 3, suffix: "+", label: "Internships & Industry Roles" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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
    review: "Michael helped us create an exceptional educational web experience beyond our expectations.",
    title: "Front-end Developer / UI Developer - Agua International Education",
    date: "Nov 2024 - Current",
    responsibilities: [
      "Created and maintained responsive web pages with HTML, CSS, JavaScript, React across devices and browsers.",
      "Developed interactive UI components and forms to collect and display data dynamically from the database.",
      "Used version control to manage front-end code and collaborate with the development team effectively.",
      "Connected front-end to AWS-hosted databases via RESTful APIs, supporting real-time data updates with latency under 300ms for 95% of transactions.",
      "Implemented client-side data validation and error handling, decreasing user input errors by 25% and improving overall data quality.",
      "Collaborated with backend developers to design and optimize API endpoints, resulting in a 15% improvement in data retrieval speeds.",
      "Monitored database activity logs and security settings daily, preventing unauthorized access attempts and maintaining 100% data integrity.",
    ],
  },
  {
    review: "Michael’s contributions to our machine learning research applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    title: "Machine Learning Reseacher - Victoria University of Wellington",
    date: "November 2023 - March 2024",
    responsibilities: [
      "Awarded a competitive AI and Machine Learning research collaboration scholarship with Health NZ, selected from over 50 applicants based on academic excellence.",
      "Built an ETL data preprocessing pipeline in Python for a complex dataset of 25,000 cancer patient records.",
      "Evaluated machine learning models to predict 1-year survival outcomes, achieving over 82% AUC and 96% early-prediction accuracy on a hold-out set.",
      "Developed a retrieval-augmented generation (RAG) framework integrating OpenAI GPT-4 with a custom SQLite-backed vector store to summarize clinician notes and generate patient-specific prognosis explanations.",
      "Developed and deployed a cloud-hosted interactive web dashboard to visualize model performance and dataset characteristics with dynamic data fetching.",
      "Collaborated with multidisciplinary teams to interpret results and translate findings into insights for a research publication on AI and machine learning applications in healthcare.",
    ],
  },
  {
    review: "Michael’s work brought a high level of quality and efficiency. He delivered solutions that enhanced our user experience & meet our product goals.",
    title: "Client application team - Ministry of Social Development",
    date: "November 2022 - February 2023",
    responsibilities: [
      "Supported the elicitation and documentation of business and technical requirements for system projects.",
      "Assisted in analyzing and interpreting data sets to generate insights for decision-making, preparing reports and visualizations using tools like Excel and Power BI.",
      "Optimized SQL queries to extract, filter, and analyze data from internal system databases, supporting data validation, reporting, and decision-making processes.",
      "Participated in Agile software development workflows by attending daily stand-ups, sprint planning meetings, and backlog grooming sessions to stay aligned with team goals and priorities.",
      "Provided post-implementation support by troubleshooting system issues, replicating bugs, and documenting findings for the development team to address in subsequent updates.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
]

const socialImgs = [
  {
    name: "git",
    imgPath: "/images/git.png",
    link: 'https://github.com/hienan2303'
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: 'https://www.linkedin.com/in/duongtran2502/'
  },
];

export {
  words,
  AI,
  showcase,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  fullstack,
};
