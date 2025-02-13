import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Tech from './components/Tech';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
