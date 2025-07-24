import Header from "./components/Header";
import About1 from "./components/aboutme";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="about">
          <About1 />
        </section>

        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
          
        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section> 
      </main>
    </>
  );
}

export default App;
