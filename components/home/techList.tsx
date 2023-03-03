import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

interface ListItem {
  icon: JSX.Element;
  text: string;
}

interface TechListProps {
  list: ListItem[];
}

const TechList = ({ list }: TechListProps) => {
  return (
    <Section top={false} bottom={false}>
      <Wrapper>
        <Fade>
          <ul className="mt-12 md:mt-32 max-w-2xl mx-auto lg:max-w-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-base">
            {list.map(({ icon, text }, i) => (
              <li key={i} className="flex-1 flex text-gray-200 flex-col">
                <span className="mr-4 mb-4 text-slate-600">{icon}</span>
                {text}
              </li>
            ))}
          </ul>
        </Fade>
      </Wrapper>
    </Section>
  );
};

export default TechList;
