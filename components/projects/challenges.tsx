import Fade from "@components/animations/fade";
import CheckIcon from "@components/icons/checkIcon";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

interface ChallengesProps {
  list: string[];
}

const Challenges = ({ list }: ChallengesProps) => {
  return (
    <Section bottom={false}>
      <Wrapper>
        <Fade>
          <h2 className="text-center mb-8 lg:mb-16">The Challenges</h2>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-16 max-w-2xl lg:max-w-7xl mx-auto">
          {list.map((text) => (
            <Fade key={text}>
              <p className="flex items-start">
                <span className="mr-4 mt-2 text-gray-200 block bg-slate-700 rounded">
                  <CheckIcon />
                </span>
                {text}
              </p>
            </Fade>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Challenges;
