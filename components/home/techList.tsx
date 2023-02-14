import Fade from "@components/animations/fade";

interface ListItem {
  icon: JSX.Element;
  text: string;
}

interface TechListProps {
  list: ListItem[];
}

const TechList = ({ list }: TechListProps) => {
  return (
    <Fade>
      <ul className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {list.map(({ icon, text }, i) => (
          <li key={i} className="flex-1 flex text-gray-200 flex-col">
            <span className="mr-4 mb-4 text-gray-600">{icon}</span>
            {text}
          </li>
        ))}
      </ul>
    </Fade>
  );
};

export default TechList;
