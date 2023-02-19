import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const Seo = ({
  title = "Tawnee.dev",
  url = "https://www.tawnee.dev",
  image = "https://www.tawnee.dev/metacard.png",
  description = "I'm a professional web developer specializing in building web apps and static sites with React frameworks and delivering clean, intuitive designs that enhance user experience.",
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/***********  twitter cards ***********/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/***********  open graph ***********/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/***********  schema ***********/}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${title}",
        "url": "${url}",
      }
      `}</script>
    </Head>
  );
};

export default Seo;
