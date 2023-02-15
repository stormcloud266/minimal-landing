import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

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
        <div className="flex flex-col md:flex-row justify-center">
          <div className="basis-1/4 md:text-right pt-12 md:pt-12 lg:pt-20 pl-10 md:pl-0 md:pr-12 lg:pr-32 border-l border-gray-500 md:border-none">
            <Fade x={-10}>
              <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider leading-loose">
                the motivation
              </p>
            </Fade>
          </div>

          <div className="basis-3/4 pl-10 md:pl-12 lg:pl-32 pt-6 md:pt-12 lg:pt-20 border-l border-gray-500 max-w-4xl">
            <Fade>
              <h2 className="text-4xl mb-6 font-light leading-normal">
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

        <div className="flex flex-col md:flex-row justify-center">
          <div className="basis-1/4 md:text-right pt-10 md:pt-12 lg:pt-20 pl-10 md:pl-0 md:pr-12 lg:pr-32 border-l border-gray-500 md:border-none">
            <Fade x={-10}>
              <p className="text-lg font-semibold text-gray-500 uppercase pt-8 md:pt-0 tracking-wider leading-loose">
                the solution
              </p>
            </Fade>
          </div>

          <div className="basis-3/4 pl-10 md:pl-12 lg:pl-32 pb-10 pt-6 md:py-12 lg:py-20 border-l border-gray-500 max-w-4xl">
            <Fade>
              <h2 className="text-4xl mb-6 font-light leading-normal">
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
