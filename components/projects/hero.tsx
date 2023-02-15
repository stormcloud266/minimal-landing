import Image from "next/image";

import Fade from "@components/animations/fade";
import Button from "@components/ui/button";
import Section from "@components/ui/section";
import Tag from "@components/ui/tag";
import TextLink from "@components/ui/textLink";
import Wrapper from "@components/ui/wrapper";

interface HeroProps {
  title: string;
  intro: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Hero = ({
  title,
  intro,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
}: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center">
      <Section>
        <Wrapper>
          <div className="flex flex-col items-center lg:flex-row gap-16 max-w-xl lg:max-w-none mx-auto">
            <div className="flex-1">
              <Fade duration={0.8}>
                <h1 className="mb-8 max-w-4xl leading-snug">{title}</h1>
              </Fade>
              <Fade delay={0.2}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((text: string) => (
                    <Tag key={text}>{text}</Tag>
                  ))}
                </div>
                <p className="text-xl max-w-4xl leading-relaxed">{intro}</p>
              </Fade>
              <div className="mt-10">
                {liveUrl && (
                  <Fade inline delay={0.4} x={-5}>
                    <Button className="mr-12" accent href={liveUrl}>
                      Visit Live Site
                    </Button>
                  </Fade>
                )}
                {githubUrl && (
                  <Fade inline delay={0.5} x={-5}>
                    <TextLink href={githubUrl}>See the Code</TextLink>
                  </Fade>
                )}
              </div>
            </div>
            <div className="relative flex-1">
              <Fade delay={0.2} y={10}>
                <Image
                  src={`https:${imageUrl}`}
                  width={1000}
                  height={570}
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </Wrapper>
      </Section>
    </div>
  );
};

export default Hero;
