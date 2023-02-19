import Fade from "@components/animations/fade";
import CodepenIcon from "@components/icons/codepenIcon";
import GithubIcon from "@components/icons/githubIcon";
import TwitterIcon from "@components/icons/twitterIcon";
import Form from "@components/ui/form";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";

interface ContactProps {}

const socialData = [
  { icon: <GithubIcon />, label: "go to github", href: "https://github.com" },
  { icon: <TwitterIcon />, label: "go to twitter", href: "https://github.com" },
  { icon: <CodepenIcon />, label: "go to codepen", href: "https://github.com" },
];

const Contact = ({}: ContactProps) => {
  return (
    <Section id="contact">
      <Wrapper>
        <Fade>
          <h2 className="mb-16 text-center">Let&apos;s Connect</h2>
        </Fade>
        <Fade delay={0.2}>
          <div className="flex flex-col-reverse lg:flex-row gap-16">
            <div className="flex-1">
              <Form />
            </div>
            <div className="flex-1 max-w-2xl mx-auto md:mt-6">
              <p className="mb-6">
                While I am not actively seeking new job opportunities at the
                moment, I am always open to connecting with like-minded
                individuals in the tech community.
              </p>
              <p className="mb-4">
                Whether you have questions about my work or simply want to
                connect and network, feel free to reach out to me. I would be
                happy to hear from you.
              </p>
              <div className="flex gap-4">
                {socialData.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 p-1 rounded-sm text-gray-200 transition-all hover:bg-accent hover:text-gray-1000"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </Wrapper>
    </Section>
  );
};

export default Contact;
