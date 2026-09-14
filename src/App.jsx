import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experiences from './sections/Experiences.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Hobbies from './sections/Hobbies.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}
