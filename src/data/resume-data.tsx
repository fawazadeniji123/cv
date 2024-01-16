import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Fawaz Adeniji",
  initials: "FA",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos",
  about:
    "Results-oriented Software Engineer leveraging diverse technical skills to develop cutting-edge solutions that drive innovation and exceed business objectives.",
  summary:
    "Highly skilled and results-driven Software Engineer with a proven track record of designing, developing, and maintaining innovative software solutions. Adept at analyzing complex problems and translating business requirements into technical solutions. Proficient in a variety of programming languages, frameworks, and methodologies, with a focus on delivering high-quality, scalable, and efficient code. Experienced in the full software development life cycle, from concept and design to testing and deployment. ",
  avatarUrl: "https://raw.githubusercontent.com/fawazadeniji123/myimages/master/picofme_whitebg.png",
  personalWebsiteUrl: "https://github.com/fawazadeniji",
  contact: {
    email: "fawazadeniji123@gmail.com",
    tel: "+2349032347999",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fawazadeniji123",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fawazadeniji123/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Phar_whaz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Federal University Of Agriculture, Abeokuta",
      degree: "Bachelor's degree, Mechatronic engineering",
      start: "2020",
      end: "2025",
    },
  ],
  work: [
    {
      company: "ThynkCity ",
      link: "https://thynkcity.com",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "Mar 2023",
      end: "Present",
      description:
        "Instructed students and pupils in fundamental principles of web development, imparting comprehensive knowledge of programming languages such as Python and JavaScript to foster a solid understanding of software development concepts. Technologies: HTML, CSS, JavaScript, Python",
    },
    {
      company: "Coderina EdTech Foundation",
      link: "https://coderina.com",
      badges: ["On-site"],
      title: "Software Development Educator",
      // logo: ParabolLogo,
      start: "Jun 2022",
      end: "Nov 2022",
      description:
        "Instructed students and pupils in fundamental principles of web development, imparting comprehensive knowledge of programming languages such as Python and JavaScript to foster a solid understanding of software development concepts. Technologies: HTML, CSS, JavaScript, Python",
    },
    {
      company: "Softlab Technologies",
      link: "",
      badges: ["On-site"],
      title: "Junior Frontend Engineer",
      start: "Jun 2020",
      end: "Jan 2021",
      description:
        "Played a key role in the development of user interface components for various clients, contributing to the creation and enhancement of visually appealing and user-friendly interfaces. Technologies: HTML, CSS, JavaScript",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "ExpressJs",
    "Rest",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
