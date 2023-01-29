import Image from "next/image";

import Seo from "@components/layout/seo";
import Button from "@components/ui/button";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";
import TextLink from "@components/ui/textLink";
import Tag from "@components/ui/tag";

interface ProjectsProps {}

const projectData = {
  title: "Carteblock",
  tags: ["GATSBY", "SCSS", "FRAMER MOTION", "THEME TOGGLE"],
  links: {
    github: "https://sl.com",
    live: "https://sls.com",
  },
  intro:
    "I worked with Integral to develop a single-page website with custom animations and a unique light/dark mode functionality.",
  motivation: {
    title: "Work with a Design Studio to Create a Bespoke Website ",
    description:
      "Integral contacted me to build a Gatsby website based on designs they had created. I enjoyed working with this team in the past, and was looking forward to turning their bespoke design into code.",
  },
  solution: {
    title: "A Custom-Built Website Animated with Framer Motion",
    description:
      "This project had a heavy emphasis on animations. I chose Framer Motion because of their robust and customizable animation library which allowed me to build both stylish and functional animations. I was able to use Gatsby's built-in image plugin to optimize the images improving load speeds and user experience.",
  },
  process: {
    description: [
      "The website has light and dark modes that automatically change based on the time in Singapore, but once the user has chosen a particular theme the site remembers it using local storage.",
      "Combining Framer Motion and intersection observer, I was able to hide the header once a user scrolls to the call to action section.",
      "A custom services slider shows different images and information when a service is clicked. I used Framer Motion to animate the elements on enter and exit. l also added on-reveal fade and slide animations as well as parallax scroll animations to certain images.",
    ],
    bullets: [
      "Build and deploy the basic template so the team could see all updates",
      "Style website to the specifications provided in Figma",
      "Add responsive and light/dark styles using SCSS",
      "Hookup theme toggling and time-based functionality",
      "Add services, header, parallax, and on-reveal animations using Framer Motion",
      "Add SEO and metadata",
    ],
  },
  challenges: [
    "Having to implement several custom animations built from scratch helped me learn a lot more about Framer Motion.",
    "When integrating the light/dark theme, I had to make sure the default theme didn't flash before the theme preferences loaded.",
    "I had to ensure the theme switched at a certain time but not after a user was already on the page, while also overriding that functionality if a user had ever selected a theme manually.",
    "I leveraged Gatsby's image optimizations and Framer Motion animations to load and show/hide images in services to maximize load speeds and provide a good user experience.",
  ],
};

const Projects = ({}: ProjectsProps) => {
  return (
    <>
      <Seo title={projectData.title} description={projectData.intro} />
      <div className="min-h-screen flex items-center">
        <Section>
          <Wrapper>
            <div className="flex">
              <div className="flex-1">
                <h1 className="mb-8 max-w-4xl leading-snug">
                  {projectData.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projectData.tags.map((text) => (
                    <Tag key={text}>{text}</Tag>
                  ))}
                </div>
                <p className="text-xl max-w-4xl leading-loose">
                  {projectData.intro}
                </p>
                <div className="mt-10">
                  <Button className="mr-12" accent href="/#work">
                    Visit Live Site
                  </Button>
                  <TextLink href="/#contact">See the Code</TextLink>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  src={"/assets/carteblock-hero.webp"}
                  width={1000}
                  height={570}
                  alt=""
                />
              </div>
            </div>
          </Wrapper>
        </Section>
      </div>

      <Section top={false} bottom={false}>
        <Wrapper>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="basis-1/3 md:text-right pt-10 md:pt-12 lg:pt-20 pl-10 md:pl-0 md:pr-12 lg:pr-32 border-l border-gray-500 md:border-none">
              <p className="text-lg font-semibold text-gray-500 uppercase">
                the motivation
              </p>
            </div>

            <div className="basis-2/3 pl-10 md:pl-12 lg:pl-32 pt-6 md:pt-12 lg:pt-20 border-l border-gray-500 max-w-4xl">
              <h2 className="text-4xl mb-6">{projectData.motivation.title}</h2>
              <p>{projectData.motivation.description}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <div className="basis-1/3 md:text-right pt-10 md:pt-12 lg:pt-20 pl-10 md:pl-0 md:pr-12 lg:pr-32 border-l border-gray-500 md:border-none">
              <p className="text-lg font-semibold text-gray-500 uppercase pt-8 md:pt-0">
                the solution
              </p>
            </div>

            <div className="basis-2/3 pl-10 md:pl-12 lg:pl-32 pb-10 pt-6 md:py-12 lg:py-20 border-l border-gray-500 max-w-4xl">
              <h2 className="text-4xl mb-6">{projectData.solution.title}</h2>
              <p>{projectData.solution.description}</p>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <div className="flex justify-center">
            <Image
              src={"/assets/carteblock-multi-device-mockup.webp"}
              width={1000}
              height={630}
              alt=""
            />
          </div>

          <div className="mt-36">
            <h2 className="mb-8">The Process</h2>
            <div className="flex justify-between">
              <div className="max-w-prose">
                {projectData.process.description.map((text) => (
                  <p key={text} className="mt-4">
                    {text}
                  </p>
                ))}
              </div>

              <ul className="max-w-prose">
                {projectData.process.bullets.map((text) => (
                  <li key={text} className="text-gray-200 mt-4">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <h2 className="text-center">The Challenges</h2>
          <div className="grid grid-cols-2 gap-y-12 gap-x-16 mt-16 max-w-7xl mx-auto">
            {projectData.challenges.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default Projects;
