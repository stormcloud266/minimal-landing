import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

import AngleRightIcon from "@components/icons/angleRightIcon";

interface ProcessProps {
  body: Document;
  list: string[];
}

const Process = ({ body, list }: ProcessProps) => {
  return (
    <Section top={false}>
      <Wrapper>
        <div className="mt-36">
          <Fade>
            <h2 className="mb-6">The Process</h2>
          </Fade>
          <div className="flex flex-col md:flex-row gap-16 justify-between">
            <Fade>
              <div className="text-block max-w-prose">
                {documentToReactComponents(body)}
              </div>
            </Fade>

            <ul className="max-w-prose">
              {list.map((text) => (
                <li key={text}>
                  <Fade inline>
                    <span className="text-gray-200 mt-6 flex items-start">
                      <span className="mr-4 mt-1 text-gray-300 block bg-gray-700 rounded">
                        <AngleRightIcon />
                      </span>
                      {text}
                    </span>
                  </Fade>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Process;
