import Head from "next/head";
import { Starfield } from "../components/Starfield";
import { Navbar } from "../components/portfolio/Navbar";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Projects } from "../components/portfolio/Projects";
import { Experience } from "../components/portfolio/Experience";
import { Contact } from "../components/portfolio/Contact";


export default function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Head>
        <title>Yassine Yousfi — Full Stack Engineer</title>
        <meta name="description" content="Portfolio of Yassine Yousfi, full stack engineer at Société Générale CIB. Building robust, scalable software — from intuitive interfaces to resilient backends." />
        <meta property="og:title" content="Yassine Yousfi — Full Stack Engineer" />
        <meta property="og:description" content="Full stack engineer turning complex problems into elegant, performant applications. Explore selected work and get in touch." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/yassinecodes201/cosmos/main/public/images/cosmos-thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Yassine Yousfi — Full Stack Engineer. Cosmos portfolio." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/yassinecodes201/cosmos/main/public/images/cosmos-thumbnail.png" />
        <meta name="twitter:image:alt" content="Yassine Yousfi — Full Stack Engineer. Cosmos portfolio." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yassine Yousfi. Crafted among the stars.
      </footer>
    </div>
  );
}
