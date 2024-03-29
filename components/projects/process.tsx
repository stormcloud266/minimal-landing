import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { m as motion } from "framer-motion";

import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";
import AngleRightIcon from "@components/icons/angleRightIcon";

interface ProcessProps {
  body: Document;
  list: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Process = ({ body, list }: ProcessProps) => {
  return (
    <Section bottom={false}>
      <Wrapper>
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <Fade>
            <h2 className="mb-2 lg:mb-8">The Process</h2>
          </Fade>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
            <div className="flex-1">
              <Fade>
                <div className="text-block max-w-prose">
                  {documentToReactComponents(body)}
                </div>
              </Fade>
            </div>

            <motion.ul
              className="max-w-prose flex-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {list.map((text) => (
                <motion.li variants={itemVariants} key={text}>
                  <span className="text-gray-200 mt-6 flex items-start text-base">
                    <span className="mr-4 mt-1 text-gray-300 block bg-slate-700 rounded">
                      <AngleRightIcon />
                    </span>
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Process;
