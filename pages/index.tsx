import clsx from "clsx";

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

const iconData = [
  {
    icon: <ReactIcon />,
    text: "Build using React and its frameworks such as Next, Redwood, Gatsby",
  },
  {
    icon: <StylesIcon />,
    text: "Style with modern CSS solutions like SCSS Modules, Tailwind, or PostCSS",
  },
  {
    icon: <GitIcon />,
    text: "Version control with Git and Github",
  },
  {
    icon: <FramerIcon />,
    text: "Animate with the Framer Motion library and CSS Keyframes",
  },
  {
    icon: <FigmaIcon />,
    text: "Wire frame and prototype with Figma",
  },
];

const projectData = [
  {
    name: "AABS",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate laboriosam quam nesciunt voluptate consectetur exercitationem dolore labore reiciendis quis.",
    tech: ["NextJS", "Tailwind", "Contentful"],
  },
  {
    name: "Carteblock",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate laboriosam quam nesciunt voluptate consectetur exercitationem dolore labore reiciendis quis.",
    tech: ["NextJS", "Tailwind", "Contentful"],
  },
  {
    name: "InsureDAO",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate laboriosam quam nesciunt voluptate consectetur exercitationem dolore labore reiciendis quis.",
    tech: ["NextJS", "Tailwind", "Contentful"],
  },
  {
    name: "Cody Bookkeeping",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate laboriosam quam nesciunt voluptate consectetur exercitationem dolore labore reiciendis quis.",
    tech: ["NextJS", "Tailwind", "Contentful"],
  },
];

export default function Home() {
  return (
    <>
      <Seo />

      <div className="min-h-screen flex items-center">
        <Section>
          <Wrapper>
            <Fade duration={0.8}>
              <h1 className="mb-8 max-w-4xl leading-snug">
                Crafting Unique Digital Experiences
              </h1>
            </Fade>

            <Fade delay={0.2}>
              <p className="text-xl max-w-4xl leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aut alias velit quis deleniti sapiente itaque nobis dolorem
                voluptatum accusantium.
              </p>
            </Fade>

            <div className="mt-10">
              <Fade inline delay={0.4} x={-5}>
                <Button className="mr-12" accent href="/#work">
                  See Work
                </Button>
              </Fade>
              <Fade inline delay={0.5} x={-5}>
                <TextLink href="/#contact">Contact</TextLink>
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
                <h2 className="text-4xl font-light leading-normal mb-4 lg:mb-0">
                  Building web apps to smb websites with smooth user experience
                </h2>
              </Fade>
            </div>
            <div className="flex-1 max-w-2xl lg:ml-6 lg:mt-2">
              <Fade inline>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus quos ab repellat corrupti nemo sequi nobis vitae
                  dolores quas!
                </p>
              </Fade>
              <Fade inline>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus quos ab repellat corrupti nemo sequi nobis vitae
                  dolores quas!
                </p>
              </Fade>
            </div>
            <div className="flex-1 max-w-2xl lg:mt-2">
              <Fade inline>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus quos ab repellat corrupti nemo sequi nobis vitae
                  dolores quas!
                </p>
              </Fade>
              <Fade inline>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus quos ab repellat corrupti nemo sequi nobis vitae
                  dolores quas!
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
          <h2 className="text-center mb-28">Recent Projects</h2>
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
            {projectData.map(({ name }) => (
              <h3
                key={name}
                className={clsx(
                  name === "AABS" ? "text-white" : "text-gray-500"
                )}
              >
                {name}
              </h3>
            ))}
          </div>
          <div className="mt-16 flex flex-col md:flex-row gap-16 lg:gap-24 justify-between">
            <div className="max-w-prose">
              <p className="text-base italic tracking-widest mb-4">
                interesting label thing
              </p>
              <p className="text-gray-200 mb-4">{projectData[0].description}</p>
              <TextLink href="/#contact" accent>
                Read More about This Project
              </TextLink>
            </div>
            <div className="max-w-2x">
              <h4 className="mb-6 text-xl">Highlights</h4>
              <ul>
                {[1, 2, 3].map((i) => (
                  <li key={i} className="mb-8 flex items-start">
                    <span className="mr-4 mt-2 text-gray-300 block bg-gray-700 rounded">
                      <AngleRightIcon />
                    </span>{" "}
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel vitae earum recusandae repellendus itaque.
                      Consequuntur sapiente tempora.
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
