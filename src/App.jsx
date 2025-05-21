import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="hero">
        <h1>Hi, I'm Allen Davis</h1>
        <p>Full-Stack Developer building web apps with React & Node.js</p>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </section>
    </div>
  );
}

export default App;
