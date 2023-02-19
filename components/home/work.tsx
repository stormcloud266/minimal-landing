import { useState } from "react";
import clsx from "clsx";
import { m as motion } from "framer-motion";

import Tag from "@components/ui/tag";
import TextLink from "@components/ui/textLink";

import AngleRightIcon from "@components/icons/angleRightIcon";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

import { TypeCase_study } from "types/contentfulModels";
import Fade from "@components/animations/fade";
interface WorkProps {
  projects: TypeCase_study[];
}

const Work = ({ projects }: WorkProps) => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <Section id="work">
      <Wrapper>
        <Fade>
          <h2 className="text-center mb-28">Recent Projects</h2>
        </Fade>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
          {projects.map(({ fields }, i: number) => (
            <button
              key={fields.slug}
              onClick={() => setIndex(i)}
              className={clsx(
                "transition-colors",
                i === index ? "text-white" : "text-gray-500 hover:text-gray-300"
              )}
            >
              <Fade inline>
                <h3 className="text-current">{fields.title}</h3>
              </Fade>
            </button>
          ))}
        </div>
        <Fade>
          <motion.div
            key={project.sys.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-16 flex max-w-2xl mx-auto lg:max-w-none flex-col lg:flex-row gap-16 xl:gap-36">
              <div className="max-w-prose flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.fields.display_tags.list.map((text: string) => (
                    <Tag key={text + index}>{text}</Tag>
                  ))}
                </div>

                <p className="text-gray-200 mb-4">
                  {project.fields.intro_text}
                </p>

                <TextLink to={`/projects/${project.fields.slug}`} accent>
                  Read More about This Project
                </TextLink>
              </div>
              <div className="max-w-2x flex-1">
                <h4 className="mb-6 text-xl">Highlights</h4>
                <ul>
                  {project.fields.highlights.list.map(
                    (text: string, i: number) => (
                      <motion.li
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        key={i}
                        className="mb-8 flex items-start"
                      >
                        <span className="mr-4 mt-[6px] text-gray-300 block bg-gray-700 rounded">
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
        </Fade>
      </Wrapper>
    </Section>
  );
};

export default Work;
