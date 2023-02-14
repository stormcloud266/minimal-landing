import Fade from "@components/animations/fade";
import clsx from "clsx";

interface AboutProps {
  title: string;
  paragraphsLeft: string[];
  paragraphsRight: string[];
}

const About = ({ title, paragraphsLeft, paragraphsRight }: AboutProps) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-between max-w-xl lg:max-w-none mx-auto">
      <div className="flex-1">
        <Fade>
          <h2 className="text-4xl font-light leading-normal mt-1 mb-4 lg:mb-0">
            {title}
          </h2>
        </Fade>
      </div>
      <div className="flex-1 max-w-2xl lg:ml-6 lg:mt-2">
        {paragraphsLeft.map((text, i) => (
          <Fade inline key={i}>
            <p className={clsx({ "mb-6": i === 0 })}>{text}</p>
          </Fade>
        ))}
      </div>
      <div className="flex-1 max-w-2xl lg:mt-2">
        {paragraphsRight.map((text, i) => (
          <Fade inline key={i}>
            <p className={clsx({ "mb-6": i === 0 })}>{text}</p>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default About;
