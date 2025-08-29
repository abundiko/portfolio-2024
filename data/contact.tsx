import { type ContactCardProps } from "@/components/cards/ContactCard";
import { FaEnvelope, FaLinkedin, FaFacebook, FaWhatsapp, FaGithub, FaXTwitter } from "react-icons/fa6";

export const CONTACT_INFO: ContactCardProps[] = [
  {
    title: "Email",
    href: "mailto:abundiko111@gmail.com",
    icon: <FaEnvelope />,
    color: "#EA4335",
  },
  {
    href: "https://www.linkedin.com/in/abundiko/",
    icon: <FaLinkedin />,
    title: "Linkedin",
    color: "#0A66C2",
  },
  {
    href: "https://facebook.com/abundiko",
    icon: <FaFacebook />,
    title: "Facebook",
    color: "#1877F2",
  },
  {
    href: "https://wa.me/+2347031594603",
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    color: "#25D366",
  },
  {
    href: "https://github.com/abundiko",
    icon: <FaGithub />,
    title: "Github",
    color: "#ddd",
  },
  {
    href: "https://x.com/abundiko",
    icon: <FaXTwitter />,
    title: "Twitter",
    color: "#1DA1F2",
  },
];