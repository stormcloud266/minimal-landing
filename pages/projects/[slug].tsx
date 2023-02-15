import { GetStaticProps } from "next";
import { createClient } from "contentful";
import { Document } from "@contentful/rich-text-types";

import Seo from "@components/layout/seo";

import Hero from "@components/projects/hero";
import Motivation from "@components/projects/motivation";
import Process from "@components/projects/process";
import Challenges from "@components/projects/challenges";
import Mockup from "@components/projects/mockup";

import { TypeCase_studyFields } from "types/contentfulModels";

const Projects = ({ project }: { project: TypeCase_studyFields }) => {
  return (
    <>
      <Seo title={project.title} description={project.intro_text} />

      <Hero
        title={project.title}
        intro={project.intro_text}
        tags={project.display_tags.list}
        imageUrl={project.hero_image.fields.file.url}
        liveUrl={project.live_site_url}
        githubUrl={project.github_link}
      />

      <Motivation
        motivationHeader={project.motivation_header}
        motivationBody={project.motivation_body as Document}
        solutionHeader={project.solution_header}
        solutionBody={project.solution_body as Document}
      />

      <Mockup imageUrl={project.multi_device_image.fields.file.url} />

      <Process
        body={project.process_body as Document}
        list={project.process_list.list}
      />

      <Challenges list={project.challenges_list.list} />
    </>
  );
};

export default Projects;

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
