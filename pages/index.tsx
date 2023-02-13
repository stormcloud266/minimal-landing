import clsx from "clsx";
import { m as motion } from "framer-motion";
import { createClient } from "contentful";

import Seo from "@components/layout/seo";

import Button from "@components/ui/button";
import Section from "@components/ui/section";
import TextLink from "@components/ui/textLink";
import Wrapper from "@components/ui/wrapper";

import Fade from "@components/animations/fade";

import ReactIcon from "@components/icons/reactIcon";
import StylesIcon from "@components/icons/stylesIcon";
import GitIcon from "@components/icons/gitIcon";
import FigmaIcon from "@components/icons/figmaIcon";
import FramerIcon from "@components/icons/framerIcon";
import AngleRightIcon from "@components/icons/angleRightIcon";
import { useState } from "react";
import { TypeCase_study, TypeCase_studyFields } from "types/contentfulModels";

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

const iconData = [
  {
    icon: <ReactIcon />,
    text: "React for building dynamic web apps and enhanced static sites and blogs",
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
    icon: <FramerIcon />,
    text: "Framer Motion for smooth animations and an elevated user experience",
  },
  {
    icon: <FigmaIcon />,
    text: "Figma for design collaboration and prototyping",
  },
];

export default function Home({ projects }: { projects: TypeCase_study[] }) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Seo />

      <div className="min-h-screen flex items-center">
        <Section>
          <Wrapper>
            <Fade duration={0.8}>
              <h1 className="mb-8 max-w-6xl leading-snug">
                Crafting Engaging Digital Experiences
              </h1>
            </Fade>

            <Fade delay={0.2}>
              <p className="text-xl max-w-4xl leading-relaxed">
                I am a front-end developer specializing in building web apps and
                static sites with React. I love delivering clean, intuitive
                designs that enhance user experience.
              </p>
            </Fade>

            <div className="mt-10">
              <Fade inline delay={0.4} x={-5}>
                <Button className="mr-12" accent to="/#work">
                  See My Work
                </Button>
              </Fade>
              <Fade inline delay={0.5} x={-5}>
                <TextLink to="/#contact">Contact</TextLink>
              </Fade>
            </div>
          </Wrapper>
        </Section>
      </div>

      <Section id="about" top={false}>
        <Wrapper>
          <div className="flex flex-col gap-6 lg:flex-row justify-between max-w-xl lg:max-w-none mx-auto">
            <div className="flex-1">
              <Fade>
                <h2 className="text-4xl font-light leading-normal mt-1 mb-4 lg:mb-0">
                  Modern Challenges Require Modern Solutions
                </h2>
              </Fade>
            </div>
            <div className="flex-1 max-w-2xl lg:ml-6 lg:mt-2">
              <Fade inline>
                <p className="mb-6">
                  My journey as a professional web developer began with
                  freelancing for SMB clients, an incredible learning experience
                  that taught me a lot about the industry.
                </p>
              </Fade>
              <Fade inline>
                <p>
                  During this time I learned the importance of
                  conversion-focused design, on-page SEO, intuitive layouts, and
                  delivering a project from start to finish.
                </p>
              </Fade>
            </div>
            <div className="flex-1 max-w-2xl lg:mt-2">
              <Fade inline>
                <p className="mb-6">
                  I enjoy finding new and innovative solutions to integrate into
                  my front-end work, and I have recently started working with
                  web3 technologies in many of my projects.
                </p>
              </Fade>
              <Fade inline>
                <p>
                  I am eager to delve deeper into the constantly evolving world
                  of modern front-end tech and use my knowledge to create
                  meaningful, user-centered online experiences.
                </p>
              </Fade>
            </div>
          </div>

          <Fade>
            <ul className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {iconData.map(({ icon, text }, i) => (
                <li key={i} className="flex-1 flex text-gray-200 flex-col">
                  <span className="mr-4 mb-4 text-gray-600">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </Fade>
        </Wrapper>
      </Section>

      <Section id="work">
        <Wrapper>
          <motion.div layout>
            <h2 className="text-center mb-28">Recent Projects</h2>
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
              {projects.map(({ fields }, i: number) => (
                <button
                  key={fields.slug}
                  onClick={() => setIndex(i)}
                  className={clsx(
                    "transition-colors",
                    i === index
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  <h3 className="text-current">{fields.title}</h3>
                </button>
              ))}
            </div>
            <div className="mt-16 flex flex-col md:flex-row gap-16 lg:gap-36">
              <div className="max-w-prose flex-1">
                {/* <motion.p
                  key={projects[index].label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-base italic tracking-widest mb-4"
                >
                  {projectData[index].label}
                </motion.p> */}
                <motion.p
                  key={projects[index].fields.intro_text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-200 mb-4"
                >
                  {projects[index].fields.intro_text}
                </motion.p>
                <TextLink
                  to={`/projects/${projects[index].fields.slug}`}
                  accent
                >
                  Read More about This Project
                </TextLink>
              </div>
              <div className="max-w-2x flex-1">
                <h4 className="mb-6 text-xl">Highlights</h4>
                <ul>
                  {projects[index].fields.challenges_list.list.map(
                    (text: string, i: number) => (
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={text + i}
                        className="mb-8 flex items-start"
                      >
                        <span className="mr-4 mt-2 text-gray-300 block bg-gray-700 rounded">
                          <AngleRightIcon />
                        </span>{" "}
                        <span>{text}</span>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </Wrapper>
      </Section>
    </>
  );
}
