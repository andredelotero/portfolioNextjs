import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Home } from "../components/home";
import { About } from "../components/about";
import { Contact } from "../components/contact";

export default function Index() {
  return (
    <>
      <Head>
        <title>Andre Gama del Otero - Front-end developer</title>
        <meta
          name="description"
          content="I am a Frontend developer living in Mar del Plata, Argentina. I care about site speed, user experience, cross browser compatibility, and of course, responsiveness (I always start projects in a mobile-first approach)."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}
