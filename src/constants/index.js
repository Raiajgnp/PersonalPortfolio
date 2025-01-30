import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  flutter,
  tailwind,
  nodejs,
  cplus,
  git,
  figma,
  python1,
  frontend,
  pr,
  python,
  script,
  tutor,
  dresscode,
  genai,
  roman,
  batch,
  people01,
  people02,
  people03,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Project Management",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Learning New Technologies",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python1,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Lead Techinical Writer & Associate Front - End Developer",
    company_name: "Thesis: Utilizing CV for Supervising Dress Code Compliance",
    icon: frontend,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Responsible for system testing, test cases and documenting project progress.",
      "Integrates visual output from the computer vision model into front - end application.",
      "Collaborate with the team to accurately present the implementation and results.",
      "Investigates dress code compliance standards and their implementation accross various settings.",
    ],
  },
  {
    title: "Full Stack Python Developer",
    company_name: "Generative AI Chatbot for Mental Health Checking & Roman Numeral Modifier",
    icon: python,
    iconBg: "#E6DEDD",
    date: "Year 2024",
    points: [
      "Integrates machine learning models to generate personalized mental health check ins and responses based on user input.",
      "Developed logic for the AI chatbot system.",
      "Implements algorithms to handle both inter to roman numeral and vice versa.",
      "Designed and builed the back - end system to handle user inputs.",
    ],
  },
  {
    title: "Batch Script Developer",
    company_name: "Real - Time System Resource Tracker",
    icon: script,
    iconBg: "#383E56",
    date: "Year 2024",
    points: [
      "Developed and maintains batch scripts to automate the monitoring system resources in real - time",
      "Created logging mechanism to track system performance and generates alerts for resource overuse.",
      "Maintains script that generate the log files.",
      "Review system performance data captured by batch scripts, making recommendations for system optimization",
    ],
  },
  {
    title: "Junior Public Relations Specialist",
    company_name: "Former Vice President of PR @CYB:ORG &  SK PR Officer",
    icon: pr,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Provides support in executing PR campaigns by leading with tasks like public speeches, media kits and external relations.",
      "Participates in brainstorming sessions to contribute creative ideas for public relations campaigns and strategies.",
      "Supports the management of social media accounts, contributing to content creation and audience engagement.",
      "Analyzes media coverage and prepares reports to assess the effectiveness of PR activities.",
    ],
  },
  {
    title: "Part Time English Tutor",
    company_name: "Kong Language Center",
    icon: tutor,
    iconBg: "#383E56",
    date: "Year 2022",
    points: [
      "Teaches foundational English language skills to Korean students, focusing on basic vocabulary, grammar, and sentence structure.",
      "Instructs Korean students on intermediate English concepts, including complex sentence construction, tenses, and vocabulary expansion.",
      "Tracks students' progress and provides feedback to help them build confidence in using English for daily communication.",
      "Provides personalized coaching on pronunciation, intonation, and stress to improve speaking clarity and comprehension.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This website contains a lot of information regarding Miss Roan Jagunap's works which is quite useful for immediate scanning.",
    name: "Sarah Nicole D. Calinagan",
    designation: "Cadet",
    company: "Warp Technologies by Prometheus",
    image: people01,
  },
  {
    testimonial:
      "Being a project manager requires a lot of patience and must have an organized lifestyle to cope up with the range, and can communicate well to the clients.",
    name: "Kyne Gabriel A. de Leon",
    designation: "Cadet",
    company: "Warp Technologies by Prometheus",
    image: people02,
  },
  {
    testimonial:
      "The detailed information about Miss Roan Jagunap's works, technologies used and projects is very helpful for me.",
    name: "Humphrey John Montalban",
    designation: "Intern",
    company: "Quirao Group of Companies",
    image: people03,
  },
];

const projects = [
  {
    name: "Dress Code Compliance",
    description:
      "A web application that utilizes Computer Vision, specifically, YOLOv8 for object detection and Haar Cascade Classifier for Face Recognition. In order to detect the dress code and violators information.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "roboflow",
        color: "green-text-gradient",
      },
      {
        name: "html&css",
        color: "pink-text-gradient",
      },
    ],
    image: dresscode,
    source_code_link: "https://github.com/",
  },
  {
    name: "Generative AI for Mental Health Checking",
    description:
      "A web application that chatbot that checks the user emotional feeling and generates an advices. Uses git to automatically deploy in Streamlit.",
    tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "geminiai",
        color: "pink-text-gradient",
      },
    ],
    image: genai,
    source_code_link: "https://github.com/Raiajgnp/GenerativeAIforMentalHealthChecking",
  },
  {
    name: "Roman Numeral Modifier",
    description:
      "A backend that converts the roman numeral to integer and vice versa. This was tested using three programming languages; Python, C++ and Assembly, in order to identify which Programming Languages is the fastest when it cpomes in coversion.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "assembly",
        color: "pink-text-gradient",
      },
    ],
    image: roman,
    source_code_link: "https://github.com/Raiajgnp/RomanNumeralModifier",
  },
  {
    name: "Real - time System Resource Tracker",
    description:
      "A Windows batch script that monitor and display essential system resource usage metrics in real - time. Focusing on CPU, Memory and Disk, it also shows clearing system if the usage is high ",
    tags: [
      {
        name: "batchscript",
        color: "blue-text-gradient",
      },
      {
        name: "systemresource",
        color: "green-text-gradient",
      },
      {
        name: "realtime",
        color: "pink-text-gradient",
      },
    ],
    image: batch,
    source_code_link: "https://github.com/Raiajgnp/RealtimeSystemResourceTracker",
  },
];

export { services, technologies, experiences, testimonials, projects };