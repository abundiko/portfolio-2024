export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  logo?: string;
  live?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Center Point Network",
    description:
      "Website for Center Point Multi Solutions Limited is an Information Technology company with its core focus on information technology and deployment of software solutions.",
    tech: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "cpn.png",
    logo: "cpn-logo.png",
    live: "https://cpntechterminal.com",
  },
  {
    title: "Movee - Movie App",
    description:
      "A free movie app that allows users to search for movies and view details about them, stream and download",
    tech: ["Next.js", "React native", "Mongo DB", "Typescript", "Tailwind CSS"],
    image: "movee.png",
    logo: "movee-logo.png",
    live: "https://movee.vercel.app/",
  },
  {
    title: "Aify global aluminum",
    description: "An Ecommerce website for aify-global aluminum company",
    tech: ["HTML", "Javascript", "Tailwind CSS"],
    image: "aify-global.png",
    logo: "aify-global-logo.png",
    live: "https://aify-global.com/",
  },
  {
    title: "OneSync - file sharing",
    description:
      "Mobile application for mobile and desktop devices that allows users to share files with others, and sync clipboard between devices.",
    tech: ["Flutter", "Next.js", "Tailwind CSS", "Local server"],
    image: "onesync.png",
    logo: "onesync-logo.png",
    live: "https://onesync.netlify.app/",
    github: "https://github.com/abundiko/onesync-website",
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
  },
  {
    title: "Hardware Mall",
    description:
      "An Ecommerce website for shopping electronics (Frontend developer @ Hardware House)",
    tech: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "hardwaremall.png",
    logo: "hardwaremall-logo.png",
    live: "https://hardwaremall.io",
  },
];
