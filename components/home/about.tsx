import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";
import clsx from "clsx";

interface AboutProps {
  title: string;
  paragraphsLeft: string[];
  paragraphsRight: string[];
}

const About = ({ title, paragraphsLeft, paragraphsRight }: AboutProps) => {
  return (
    <Section id="about" top={false} bottom={false}>
      <Wrapper>
        <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row justify-between max-w-2xl lg:max-w-none mx-auto">
          <div className="flex-1 lg:mt-1 mb-2 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-light leading-normal">
              <Fade inline>{title}</Fade>
            </h2>
          </div>
          <div className="flex-1 max-w-2xl lg:ml-6 lg:mt-2">
            {paragraphsLeft.map((text, i) => (
              <p className={clsx({ "mb-6": i === 0 })} key={i}>
                <Fade inline>{text}</Fade>
              </p>
            ))}
          </div>
          <div className="flex-1 max-w-2xl lg:mt-2">
            {paragraphsRight.map((text, i) => (
              <p className={clsx({ "mb-6": i === 0 })} key={i}>
                <Fade inline>{text}</Fade>
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default About;
