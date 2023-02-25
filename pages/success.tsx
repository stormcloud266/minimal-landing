import Seo from "@components/layout/seo";
import Button from "@components/ui/button";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

const Success = () => {
  return (
    <Section className="min-h-[92vh] flex items-center justify-center">
      <Seo title="Thank You" />
      <Wrapper>
        <div className="text-center max-w-prose mx-auto">
          <h1 className="text-5xl mb-4">Form Submitted</h1>
          <p>
            Thank you for reaching out! Your interest in my work is greatly
            appreciated, and I&apos;ll get back to you as soon as possible.
          </p>
          <Button className="mt-6" to="/">
            Go Home
          </Button>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Success;
