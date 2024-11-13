'use client'

import { ContactCard, ContactCardProps } from "@/components/cards/ContactCard";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";
import { animateProps } from "./About";

export default function Contact() {
  return (
    <section id="Contact">
      <div className="container mx-auto flex flex-wrap-reverse justify-center mb-5 md:mb-none">
        <div className="w-11/12 md:w-8/12 md:pt-10 text-center md:text-left">
        <motion.h3
        {...animateProps}
        className="font-bold text-2xl md:text-4xl"
      > Get in Touch
      </motion.h3>
          <p className="w-full  mb-4 opacity-80">
            I&apos;m always open to new opportunities and collaborations. <br /> Let&apos;s build that next-level product together!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {contactInfo.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const contactInfo: ContactCardProps[] = [
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

export const old = `
<div className="flex flex-wrap justify-center md:justify-start gap-2">
            <a
              href="mailto:abundiko111@gmail.com"
              id="#FF0000"
              className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-background rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-background"
              target="_blank"
            >
              <style>
                {/* .ContactTile#\#FF0000:hover{
          color:#FF0000
         } */}
              </style>
              <h4 className="text-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="svg-inline--fa fa-envelope "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  ></path>
                </svg>
              </h4>
              <h4 className="text-md font-bold">Email</h4>
            </a>
            <a
              href="https://github.com/abundiko"
              id="#000000"
              className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-background rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-background"
              target="_blank"
            >
              <style>
                {/* .ContactTile#\#000000:hover{
          color:#000000
         } */}
              </style>
              <h4 className="text-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="svg-inline--fa fa-github "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </h4>
              <h4 className="text-md font-bold">Github</h4>
            </a>
            <a
              href="https://twitter.com/abundiko"
              id="#1DA1F2"
              className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-background rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-background"
              target="_blank"
            >
              <style>
                {/* .ContactTile#\#1DA1F2:hover{
          color:#1DA1F2
         } */}
              </style>
              <h4 className="text-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="svg-inline--fa fa-twitter "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </h4>
              <h4 className="text-md font-bold">Twitter</h4>
            </a>
            <a
              href="https://linkedin.com/in/abundiko"
              id="#2867B2"
              className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-background rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-background"
              target="_blank"
            >
              <style>
                {/* .ContactTile#\#2867B2:hover{
          color:#2867B2
         } */}
              </style>
              <h4 className="text-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin"
                  className="svg-inline--fa fa-linkedin "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
              </h4>
              <h4 className="text-md font-bold">Linkedin</h4>
            </a>
            <a
              href="https://facebook.com/abundiko"
              id="#1877F2"
              className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-background rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-background"
              target="_blank"
            >
              <style>
                {/* .ContactTile#\#1877F2:hover{
          color:#1877F2
         } */}
              </style>
              <h4 className="text-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook"
                  className="svg-inline--fa fa-facebook "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  ></path>
                </svg>
              </h4>
              <h4 className="text-md font-bold">Facebook</h4>
            </a>
            <a
              href="https://wa.me/+2347031594603"
              id="#25D366"
              className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-background rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-background"
              target="_blank"
            >
              <style>
                {/* .ContactTile#\#25D366:hover{
          color:#25D366
         } */}
              </style>
              <h4 className="text-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="whatsapp"
                  className="svg-inline--fa fa-whatsapp "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  ></path>
                </svg>
              </h4>
              <h4 className="text-md font-bold">Whatsapp</h4>
            </a>
          </div>
`;
