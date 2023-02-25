import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

interface MotivationProps {
  motivationHeader: string;
  motivationBody: Document;
  solutionHeader: string;
  solutionBody: Document;
}

const Motivation = ({
  motivationHeader,
  motivationBody,
  solutionHeader,
  solutionBody,
}: MotivationProps) => {
  return (
    <Section top={false} bottom={false}>
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-2xl lg:max-w-none">
          <div className="basis-1/4 lg:text-right pt-10  lg:pt-20 pl-6 md:pl-12 lg:pl-0 lg:pr-32 border-l border-gray-500 lg:border-none">
            <Fade x={-10}>
              <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider leading-loose">
                the motivation
              </p>
            </Fade>
          </div>

          <div className="basis-3/4 pl-6 md:pl-12 lg:pl-32 pt-6 lg:pt-20 border-l border-gray-500 max-w-4xl">
            <Fade>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-6 font-light leading-normal">
                {motivationHeader}
              </h2>
            </Fade>
            <div className="text-block">
              <Fade delay={0.2}>
                {documentToReactComponents(motivationBody)}
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-2xl lg:max-w-none">
          <div className="basis-1/4 lg:text-right pt-10 pl-6 md:pl-12 lg:pt-20 lg:pl-0 lg:pr-32 border-l border-gray-500 lg:border-none">
            <Fade x={-10}>
              <p className="text-lg font-semibold text-gray-500 uppercase pt-8 lg:pt-0 tracking-wider leading-loose">
                the solution
              </p>
            </Fade>
          </div>

          <div className="basis-3/4 pl-6 md:pl-12 lg:pl-32 pb-12 pt-6 lg:py-20 border-l border-gray-500 max-w-4xl">
            <Fade>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-6 font-light leading-normal">
                {solutionHeader}
              </h2>
            </Fade>
            <div className="text-block">
              <Fade delay={0.2}>{documentToReactComponents(solutionBody)}</Fade>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Motivation;
