import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/navbar'))
const Home = dynamic(() => import('../components/home'))
const About = dynamic(() => import('../components/about'))
const Contact = dynamic(() => import('../components/contact'))

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
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'home',
        'about',
        'common',
        'contact',
      ])),
    },
  }
}
