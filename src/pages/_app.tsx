import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Lexend } from "@next/font/google";
import { Footer, Navbar } from "@components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Anaïs Rev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main
        className={`${inter.variable} ${lexend.variable} flex flex-col gap-12`}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
