import { Suspense } from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/navbar'), {
  suspense: true,
})
const Home = dynamic(() => import('../components/home'), {
  suspense: true,
})
const About = dynamic(() => import('../components/about'), {
  suspense: true,
})
const Contact = dynamic(() => import('../components/contact'), {
  suspense: true,
})

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
      <Suspense fallback={`Loading...`}>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </Suspense>
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
