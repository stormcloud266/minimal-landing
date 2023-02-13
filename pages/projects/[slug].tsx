import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

import Seo from "@components/layout/seo";
import Button from "@components/ui/button";
import Section from "@components/ui/section";
import Wrapper from "@components/ui/wrapper";
import TextLink from "@components/ui/textLink";
import Tag from "@components/ui/tag";
import AngleRightIcon from "@components/icons/angleRightIcon";
import CheckIcon from "@components/icons/checkIcon";
import Fade from "@components/animations/fade";

import { TypeCase_studyFields } from "types/contentfulModels";
import { GetStaticProps } from "next";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_API_KEY || "",
});

export async function getStaticPaths() {
  const res = await client.getEntries<TypeCase_studyFields>({
    content_type: "case_study",
  });

  const paths = res.items.map(({ fields }) => ({
    params: { slug: fields.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries<TypeCase_studyFields>({
    content_type: "case_study",
    "fields.slug": params?.slug,
  });

  return {
    props: {
      project: items[0].fields,
    },
  };
};

const Projects = ({ project }: { project: TypeCase_studyFields }) => {
  return (
    <>
      <Seo title={project.title} description={project.intro_text} />
      <div className="min-h-screen flex items-center">
        <Section>
          <Wrapper>
            <div className="flex flex-col items-center lg:flex-row gap-16 max-w-xl lg:max-w-none mx-auto">
              <div className="flex-1">
                <Fade duration={0.8}>
                  <h1 className="mb-8 max-w-4xl leading-snug">
                    {project.title}
                  </h1>
                </Fade>
                <Fade delay={0.2}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.display_tags.list.map((text: string) => (
                      <Tag key={text}>{text}</Tag>
                    ))}
                  </div>
                  <p className="text-xl max-w-4xl leading-relaxed">
                    {project.intro_text}
                  </p>
                </Fade>
                <div className="mt-10">
                  {project.live_site_url && (
                    <Fade inline delay={0.4} x={-5}>
                      <Button
                        className="mr-12"
                        accent
                        href={project.live_site_url}
                      >
                        Visit Live Site
                      </Button>
                    </Fade>
                  )}
                  {project.github_link && (
                    <Fade inline delay={0.5} x={-5}>
                      <TextLink href={project.github_link}>
                        See the Code
                      </TextLink>
                    </Fade>
                  )}
                </div>
              </div>
              <div className="relative flex-1">
                <Fade delay={0.2} y={10}>
                  <Image
                    src={`https:${project.hero_image.fields.file.url}`}
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

      <Section top={false} bottom={false}>
        <Wrapper>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="basis-1/4 md:text-right pt-12 md:pt-12 lg:pt-20 pl-10 md:pl-0 md:pr-12 lg:pr-32 border-l border-gray-500 md:border-none">
              <Fade x={-10}>
                <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider leading-loose">
                  the motivation
                </p>
              </Fade>
            </div>

            <div className="basis-3/4 pl-10 md:pl-12 lg:pl-32 pt-6 md:pt-12 lg:pt-20 border-l border-gray-500 max-w-4xl">
              <Fade>
                <h2 className="text-4xl mb-6 font-light leading-normal">
                  {project.motivation_header}
                </h2>
              </Fade>
              <div className="text-block">
                <Fade delay={0.2}>
                  {documentToReactComponents(
                    project.motivation_body as Document
                  )}
                </Fade>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <div className="basis-1/4 md:text-right pt-10 md:pt-12 lg:pt-20 pl-10 md:pl-0 md:pr-12 lg:pr-32 border-l border-gray-500 md:border-none">
              <Fade x={-10}>
                <p className="text-lg font-semibold text-gray-500 uppercase pt-8 md:pt-0 tracking-wider leading-loose">
                  the solution
                </p>
              </Fade>
            </div>

            <div className="basis-3/4 pl-10 md:pl-12 lg:pl-32 pb-10 pt-6 md:py-12 lg:py-20 border-l border-gray-500 max-w-4xl">
              <Fade>
                <h2 className="text-4xl mb-6 font-light leading-normal">
                  {project.solution_header}
                </h2>
              </Fade>
              <div className="text-block">
                <Fade delay={0.2}>
                  {documentToReactComponents(project.solution_body as Document)}
                </Fade>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Fade y={10} duration={0.8}>
            <div className="flex justify-center">
              <Image
                src={`https:${project.multi_device_image.fields.file.url}`}
                width={1000}
                height={630}
                alt=""
              />
            </div>
          </Fade>

          <div className="mt-36">
            <Fade>
              <h2 className="mb-6">The Process</h2>
            </Fade>
            <div className="flex flex-col md:flex-row gap-16 justify-between">
              <Fade>
                <div className="text-block max-w-prose">
                  {documentToReactComponents(project.process_body as Document)}
                </div>
              </Fade>

              <ul className="max-w-prose">
                {project.process_list.list.map((text: string) => (
                  <li key={text}>
                    <Fade inline>
                      <span className="text-gray-200 mt-6 flex items-start">
                        <span className="mr-4 mt-1 text-gray-300 block bg-gray-700 rounded">
                          <AngleRightIcon />
                        </span>
                        {text}
                      </span>
                    </Fade>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Fade>
            <h2 className="text-center">The Challenges</h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 mt-16 md:max-w-7xl mx-auto">
            {project.challenges_list.list.map((text: string) => (
              <Fade key={text}>
                <p className="flex items-start">
                  <span className="mr-4 mt-2 text-gray-300 block bg-gray-700 rounded">
                    <CheckIcon />
                  </span>
                  {text}
                </p>
              </Fade>
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default Projects;
