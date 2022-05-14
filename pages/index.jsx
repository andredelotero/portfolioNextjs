import Head from "next/head";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andre Gama del Otero - Front-end developer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
    </>
  );
}
