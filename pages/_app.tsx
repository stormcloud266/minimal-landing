import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";

import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import Contact from "@components/layout/contact";

import "../styles/globals.css";

const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <main className={poppins.className}>
        <Component {...pageProps} />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  );
}
