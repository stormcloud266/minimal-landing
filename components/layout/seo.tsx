import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Seo = ({
  title = "Minimal Landing",
  description = "A minimalist landing page or portfolio",
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
