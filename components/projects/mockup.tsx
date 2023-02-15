import Image from "next/image";

import Fade from "@components/animations/fade";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

interface MockupProps {
  imageUrl: string;
}

const Mockup = ({ imageUrl }: MockupProps) => {
  return (
    <Section bottom={false}>
      <Wrapper>
        <Fade y={10} duration={0.8}>
          <div className="flex justify-center">
            <Image src={`https:${imageUrl}`} width={1000} height={630} alt="" />
          </div>
        </Fade>
      </Wrapper>
    </Section>
  );
};

export default Mockup;
