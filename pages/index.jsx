import Head from "next/head";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andre Gama del Otero - Front-end developer</title>
        <description>
          I am a Frontend developer, living in Mar del Plata, Argentina. I care
          about site speed, user experience, cross browser compatibility, and of
          course, responsiveness (I always start projects in a mobile-first
          approach)
        </description>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
    </>
  );
}
