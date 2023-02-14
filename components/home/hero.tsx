import Fade from "@components/animations/fade";
import Button from "@components/ui/button";
import Section from "@components/ui/section";
import TextLink from "@components/ui/textLink";
import Wrapper from "@components/ui/wrapper";

interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  linkText?: string;
  linkHref?: string;
}

const Hero = ({
  title,
  description,
  buttonText,
  buttonHref,
  linkText,
  linkHref,
}: HeroProps) => {
  return (
    <header className="min-h-screen flex items-center">
      <Section>
        <Wrapper>
          <Fade duration={0.8}>
            <h1 className="mb-8 max-w-6xl leading-snug">{title}</h1>
          </Fade>

          <Fade delay={0.2}>
            <p className="text-xl max-w-4xl leading-relaxed">{description}</p>
          </Fade>

          <div className="mt-10">
            <Fade inline delay={0.4} x={-5}>
              <Button className="mr-12" accent to={buttonHref}>
                {buttonText}
              </Button>
            </Fade>
            <Fade inline delay={0.5} x={-5}>
              <TextLink to={linkHref}>{linkText}</TextLink>
            </Fade>
          </div>
        </Wrapper>
      </Section>
    </header>
  );
};

export default Hero;
