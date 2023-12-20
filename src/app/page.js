import Image from 'next/image';
import HeroSec from './component/HeroSec';
import NavBar from './component/NavBar';
import { Container } from 'postcss';
import AboutMe from "./component/AboutMe";
import ProjectPage from "./component/ProjectPage";
import EmailSec from './component/EmailSec';
import Footer from './component/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container  ">
      <NavBar />
      <div class="container mt-24 mx-auto px-12">
        <HeroSec />
        <AboutMe />
        <ProjectPage />
        <EmailSec />
        <Footer />
      </div>
    </main>
  )
}
