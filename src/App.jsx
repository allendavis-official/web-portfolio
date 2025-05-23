import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
