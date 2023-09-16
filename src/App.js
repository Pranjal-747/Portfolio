
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Introduction/intro";
import Skills from "./components/Skills/skills";
import Project from "./components/Project/project";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Skills />
     <Project />
     <Work />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
