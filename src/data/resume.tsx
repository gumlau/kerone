import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

type Hackathon = {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
};

export const DATA = {
  name: "Gan Liu",
  initials: "GL",
  url: "https://ganliu.blog",
  location: "Shenzhen, China",
  locationLink: "https://www.google.com/maps/place/shenzhen",
  description:
    "Scientific Machine Learning Researcher & Applied Data Scientist. Computer Science student at SUSTech researching physics-informed ML, surgical vision, and data-driven decision systems.",
  summary:
    "I'm a Computer Science student at SUSTech (GPA 3.79/4.0) researching physics-informed machine learning, surgical vision, and data-driven decision systems. I currently develop multitemporal crop yield pipelines as a Mitacs & CSC funded research intern at McGill University and previously built analytics products at Wego Singapore showcased at WiT conferences in Dubai and Japan. My projects explore frontier intersections of AI and physical systems—from Wave-CDAnet, a physics-informed neural network for water wave super-resolution, to event-based depth estimation for ophthalmic surgery and biomimetic underwater robotics funded by municipal innovation grants.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "PyTorch",
    "MATLAB",
    "C++",
    "React",
    "Next.js",
    "TypeScript",
    "SQL",
    "Git",
    "CUDA",
    "LaTeX",
    "Machine Learning",
    "Computer Vision",
    "Scientific Computing",
    "Data Analytics",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "keronelau@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gumlau",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ganliu-dev",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:keronelau@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "McGill University",
      href: "https://mcgill.ca",
      badges: [],
      location: "Montréal, Canada",
      title: "Research Intern (Mitacs & CSC Funded)",
      logoUrl: "/mcgill.svg",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Developing machine learning pipelines for crop yield and seed quality prediction using multitemporal drone data. Designed end-to-end data ingestion, preprocessing, and validation workflows for hyperspectral datasets. Benchmarked temporal ML models and physics-informed baselines to quantify yield forecast accuracy and model robustness.",
    },
    {
      company: "Wego Pte Ltd",
      badges: [],
      href: "https://wego.com",
      location: "Singapore",
      title: "Business Analyst",
      logoUrl: "/wego.png",
      start: "Jan 2025",
      end: "Jun 2025",
      description:
        "Designed strategic planning dashboard MVP with 300% efficiency lift; presented insights at WiT conferences in Dubai and Japan. Created reusable Tableau templates and data source configurations to eliminate repetitive SQL reporting tasks. Led analytics initiatives to launch a strategic planning dashboard adopted across international business units.",
    },
    {
      company: "National University of Singapore",
      href: "https://nus.edu.sg",
      badges: [],
      location: "Singapore",
      title: "Entrepreneurship (NUS NOC Inbound Programme)",
      logoUrl: "/logos/NUS_coat_of_arms.svg.png",
      start: "Jan 2025",
      end: "Jun 2025",
      description:
        "Focused on venture creation, product strategy, and analytics through immersive coursework and studio projects. Completed venture labs emphasising lean experimentation, market validation, and product strategy. Collaborated with cross-disciplinary teams on user research, analytics, and UX-driven product concepts.",
    },
  ],
  education: [
    {
      school: "Southern University of Science and Technology (SUSTech)",
      href: "https://sustech.edu.cn",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/sustech.png",
      start: "Sep 2022",
      end: "Jun 2026",
    },
    {
      school: "National University of Singapore (NUS)",
      href: "https://nus.edu.sg",
      degree: "Entrepreneurship & Business Analytics",
      logoUrl: "/logos/NUS_coat_of_arms.svg.png",
      start: "Jan 2025",
      end: "Jun 2025",
    },
  ],
  projects: [
    {
      title: "Wave-CDAnet: Physics-Informed Neural Network for Water Wave Modeling",
      href: "/publications#wave-cdanet",
      dates: "2025",
      active: true,
      description:
        "Developed a physics-informed neural network that combines a 3D U-Net encoder with an implicit decoder and Rayleigh–Bénard PDE residual regularization to recover multi-scale wave dynamics at super-resolution.",
      technologies: [
        "Python",
        "PyTorch",
        "Scientific Computing",
        "Physics-Informed ML",
      ],
      links: [
        {
          type: "Details",
          href: "/publications#wave-cdanet",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI-Powered 3D Visualization System for Ophthalmic Surgery",
      href: "/publications#surgmast3r-slam",
      dates: "2025",
      active: true,
      description:
        "Implemented event-based depth estimation and monocular 3D reconstruction for ophthalmic surgery video, coordinating AI engineers and clinicians to deliver clinical review prototypes backed by 10,000 RMB innovation funding.",
      technologies: [
        "Computer Vision",
        "3D Reconstruction",
        "Event Cameras",
        "Surgical Vision",
      ],
      links: [
        {
          type: "Details",
          href: "/publications#surgmast3r-slam",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Wego Travel Insights Dashboard",
      href: "https://wego-strategy.vercel.app/",
      dates: "Jan 2025 - Jun 2025",
      active: true,
      description:
        "Led an enterprise strategic planning analytics dashboard end to end, unlocking a 300% efficiency lift and presenting the product roadmap at WiT conferences in Dubai and Japan.",
      technologies: [
        "React",
        "Next.js",
        "Product Analytics",
        "Data Storytelling",
      ],
      links: [
        {
          type: "Website",
          href: "https://wego-strategy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Biomimetic AUV and Subsea Cable Recognition System",
      href: "https://gumlau.github.io/RayVision/",
      dates: "2024",
      active: true,
      description:
        "Designed a biomimetic autonomous underwater vehicle with synthetic dataset generation and subsea cable recognition, supervised by Academician Lin Jian and funded with 15,000 RMB municipal innovation support.",
      technologies: [
        "Robotics",
        "Computer Vision",
        "Underwater Systems",
      ],
      links: [
        {
          type: "Website",
          href: "https://gumlau.github.io/RayVision/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as readonly Hackathon[],
} as const;
