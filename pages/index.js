import Head from 'next/head'
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));
const Landing = dynamic(() => import("../components/Landing"));
const AboutAuthor = dynamic(() => import("../components/AboutAuthor"));
const Contact = dynamic(() => import("../components/Contact"));
export default function Home() {
  return (
    <>
      <Layout>
        <Landing />
        <AboutAuthor />
        <Contact />
      </Layout>
    </>
  )
}
