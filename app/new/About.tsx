import Copy from "@/components/animation/Copy";
import AboutExperience from "./About.experience";
import AboutStack from "./About.stack";

export default function About() {
  return (
    <section id="ABOUT" className="bg-white py-14 app-container">
      <AboutMain />
      <AboutExperience />
      <AboutStack />
    </section>
  );
}

function AboutMain() {
  return (
    <div className="grid md:grid-cols-3 border border-gray-200">
      <div className="p-6">
        <Copy>
          <h2 className="font-bold text-4xl md:text-[4vw] leading-[1.1] uppercase text-gray-800">
            About <br />
            Me
          </h2>
        </Copy>
      </div>
      <div className="p-6 md:col-span-2 md:border-l border-gray-200 text-gray-700">
        <Copy>
          <p className="text-lg">
            As a passionate and dedicated software developer, I thrive on
            creating innovative solutions to complex problems. With a strong
            foundation in various programming languages and frameworks, I&apos;m
            constantly expanding my skill set to stay at the forefront of
            technology. My experience spans from developing frontend design
            systems to crafting intuitive user interfaces. I&apos;m committed to
            writing clean, efficient code and collaborating effectively in team
            environments with attention to detail.
          </p>
        </Copy>
        <Copy>
          <p className="text-lg mt-2">
            Outside of coding, I enjoy staying active in the tech community,
            gaming, movies, and contributing to open-source projects. I&apos;m
            always eager to take on new challenges and learn from every
            experience, aiming to make a positive impact through technology.
          </p>
        </Copy>
      </div>
    </div>
  );
}
