import { createClient } from "contentful";

import Seo from "@components/layout/seo";
import Contact from "@components/layout/contact";

import Hero from "@components/home/hero";
import About from "@components/home/about";
import TechList from "@components/home/techList";
import Work from "@components/home/work";

import ReactIcon from "@components/icons/reactIcon";
import StylesIcon from "@components/icons/stylesIcon";
import GitIcon from "@components/icons/gitIcon";
import FigmaIcon from "@components/icons/figmaIcon";
import TypeScriptIcon from "@components/icons/typeScriptIcon";

import { TypeCase_study, TypeCase_studyFields } from "types/contentfulModels";

const Home = ({ projects }: { projects: TypeCase_study[] }) => {
  return (
    <>
      <Seo />

      <Hero
        title="Crafting Engaging Digital Experiences"
        description="I am a full-stack developer specializing in building web apps and sites with React and TypeScript. I love delivering clean, intuitive designs that enhance user experience."
        buttonText="See My Work"
        buttonHref="/#work"
        linkText="Contact"
        linkHref="/#contact"
      />

      <About
        title="Modern Challenges Require Modern Solutions"
        paragraphsLeft={[
          "My journey as a professional web developer began with freelancing for SMB clients, an incredible learning experience that taught me a lot about the industry.",
          "During this time I learned the importance of conversion-focused design, on-page SEO, intuitive layouts, and delivering a project from start to finish.",
        ]}
        paragraphsRight={[
          "I enjoy finding new and innovative solutions to integrate into my front-end work, and I have recently started working with web3 technologies in many of my projects.",
          "I am eager to delve deeper into the constantly evolving world of modern front-end tech and use my knowledge to create meaningful, user-centered online experiences.",
        ]}
      />

      <TechList
        list={[
          {
            icon: <ReactIcon />,
            text: "React for building dynamic web apps and enhanced static sites and blogs",
          },
          {
            icon: <TypeScriptIcon />,
            text: "TypeScript for strong typing and scalable full-stack development",
          },
          {
            icon: <StylesIcon />,
            text: "SCSS modules or Tailwind for maintainable, modern styling",
          },
          {
            icon: <GitIcon />,
            text: "Git and Github for version control and seamless collaboration",
          },
          {
            icon: <FigmaIcon />,
            text: "Figma for design collaboration and prototyping",
          },
        ]}
      />

      <Work projects={projects} />

      <Contact />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_API_KEY || "",
  });

  const res = await client.getEntries<TypeCase_studyFields>({
    content_type: "case_study",
    order: "fields.order",
  });

  return {
    props: {
      projects: res.items,
    },
  };
}
