export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  logo?: string;
  live?: string;
  github?: string;
  type: ("web" | "app")[];
};

export const PROJECTS: Project[] = [
  {
    title: "Symphony Enterprise",
    description:
      "Website for Symphony Enterprise, an innovative music - artist - investor platform. Symphony bridges the gap between visionary artists and strategic investors.",
    tech: ["Express.Js", "Next.js", "MongoDB", "Typescript"],
    image: "symphony.png",
    logo: "symphony-logo.jpeg",
    live: "https://symphonyent.com",
    type: ["web"],
  },
  {
    title: "UK Web Designers",
    description:
      "Website for UK Web Designers, web dev agency in the UK. We build professional websites for businesses and organizations.",
    tech: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "uwd.png",
    logo: "uwd-logo.webp",
    live: "https://ukwebdesigners.co.uk",
    type: ["web"],
  },
  {
    title: "VeeTeeYou - fast, affordable topups",
    description:
      "A mobile app for quick data and airtime purchase in Nigeria. beautiful interface and straightforward user experience.",
    tech: [
      "Fintech",
      "React native",
      "Expo",
      "Animations",
      "Mongo DB",
      "Typescript",
    ],
    image: "veeteeyou.png",
    logo: "veeteeyou-logo.png",
    type: ["app"],
  },
  {
    title: "MBA Secured Ltd.",
    description:
      "Website for MBA Secured, an expert security company in the UK. MBA Secured LTD safeguards what matters most—your people, assets, and events.",
    tech: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "mba.png",
    logo: "mba-logo.webp",
    live: "https://mbasecuredltd.com",
    type: ["web"],
  },
  {
    title: "Center Point Network",
    description:
      "Website for Center Point Multi Solutions Limited is an Information Technology company with its core focus on information technology and deployment of software solutions.",
    tech: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "cpn.png",
    logo: "cpn-logo.png",
    live: "https://cpntechterminal.com",
    type: ["web"],
  },
  {
    title: "Movee - Movie App",
    description:
      "A free movie app that allows users to search for movies and view details about them, stream and download",
    tech: ["Next.js", "React native", "Mongo DB", "Typescript", "Tailwind CSS"],
    image: "movee.png",
    logo: "movee-logo.png",
    live: "https://movee.vercel.app",
    type: ["web", "app"],
  },
  // {
  //   title: "Aify global aluminum",
  //   description: "An Ecommerce website for aify-global aluminum company",
  //   tech: ["HTML", "Javascript", "Tailwind CSS"],
  //   image: "aify-global.png",
  //   logo: "aify-global-logo.png",
  //   live: "https://aify-global.com/",
  //   type: ["web"],
  // },
  {
    title: "OneSync - file sharing",
    description:
      "Mobile application for mobile and desktop devices that allows users to share files with others, and sync clipboard between devices.",
    tech: ["Flutter", "Next.js", "Tailwind CSS", "Local server"],
    image: "onesync.png",
    logo: "onesync-logo.png",
    live: "https://onesync.netlify.app/",
    github: "https://github.com/abundiko/onesync-website",
    type: ["web", "app"],
  },
  {
    title: "Quilly Blog",
    description:
      "A Social blogging full-stack web application where users can write, like, comment and get social with blogs.",
    tech: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    image: "quilly.png",
    logo: "quilly-logo.png",
    live: "https://quilly-blog.vercel.app/",
    github: "https://github.com/abundiko/quilly",
    type: ["web"],
  },
  // {
  //   title: "Hardware Mall",
  //   description:
  //     "An Ecommerce website for shopping electronics (Frontend developer @ Hardware House)",
  //   tech: ["React", "Next.js", "Tailwind CSS", "Typescript"],
  //   image: "hardwaremall.png",
  //   logo: "hardwaremall-logo.png",
  //   live: "https://hardwaremall.io",
  //   type: ["web"],
  // },
];
