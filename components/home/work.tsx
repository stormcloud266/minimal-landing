import { useState } from "react";
import clsx from "clsx";
import { m as motion } from "framer-motion";

import Tag from "@components/ui/tag";
import TextLink from "@components/ui/textLink";

import AngleRightIcon from "@components/icons/angleRightIcon";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

import { TypeCase_study } from "types/contentfulModels";
interface WorkProps {
  projects: TypeCase_study[];
}

const Work = ({ projects }: WorkProps) => {
  const [index, setIndex] = useState(0);

  return (
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
              <motion.div
                key={projects[index].fields.display_tags.list}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-2 mb-4"
              >
                {projects[index].fields.display_tags.list.map(
                  (text: string) => (
                    <Tag key={text + index}>{text}</Tag>
                  )
                )}
              </motion.div>

              <motion.p
                key={projects[index].fields.intro_text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-200 mb-4"
              >
                {projects[index].fields.intro_text}
              </motion.p>
              <TextLink to={`/projects/${projects[index].fields.slug}`} accent>
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
  );
};

export default Work;
