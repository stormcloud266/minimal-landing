import clsx from "clsx";

import Seo from "@components/layout/seo";

import Button from "@components/ui/button";
import Section from "@components/ui/section";
import TextLink from "@components/ui/textLink";
import Wrapper from "@components/ui/wrapper";

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
            <h1 className="mb-8 max-w-4xl leading-snug">
              Crafting Unique Digital Experiences
            </h1>
            <p className="text-xl max-w-4xl leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              aut alias velit quis deleniti sapiente itaque nobis dolorem
              voluptatum accusantium.
            </p>

            <div className="mt-10">
              <Button className="mr-12" accent href="/#work">
                See Work
              </Button>
              <TextLink href="/#contact">Contact</TextLink>
            </div>
          </Wrapper>
        </Section>
      </div>

      <Section id="about" top={false}>
        <Wrapper>
          <div className="flex justify-between">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl font-light leading-normal ">
                Building web apps to smb websites with smooth user experience
              </h2>
            </div>
            <div className="flex-1 max-w-2xl ml-16 mt-2">
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus quos ab repellat corrupti nemo sequi nobis vitae
                dolores quas!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus quos ab repellat corrupti nemo sequi nobis vitae
                dolores quas!
              </p>
            </div>
            <div className="flex-1 max-w-2xl ml-10 mt-2">
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus quos ab repellat corrupti nemo sequi nobis vitae
                dolores quas!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus quos ab repellat corrupti nemo sequi nobis vitae
                dolores quas!
              </p>
            </div>
          </div>

          <ul className="mt-32 flex gap-8">
            {iconData.map(({ icon, text }, i) => (
              <li key={i} className="flex-1 flex text-gray-200 flex-col">
                <span className="mr-4 mb-4 text-gray-600">{icon}</span>
                {text}
              </li>
            ))}
          </ul>
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
          <div className="mt-16 flex justify-between">
            <div className="max-w-prose">
              <p className="text-base italic tracking-widest mb-4">
                interesting label thing
              </p>
              <p className="text-gray-200 mb-4">{projectData[0].description}</p>
              <TextLink href="/#contact" accent>
                Read More about This Project
              </TextLink>
            </div>
            <div className="max-w-2x ml-24">
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
