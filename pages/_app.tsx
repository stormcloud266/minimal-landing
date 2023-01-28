import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import Header from "@components/header";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
