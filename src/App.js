import Home from './components/home';
import Career from './components/career';
import Projects from './components/projects';



function App() {
  return (
    <div className="App">
      <section id="Home">
          <Home />
      </section>
      <section id="Career">
        <Career/>
      </section>
      <section id="Projects">
        <Projects/>
      </section>
    </div>
  );
}

export default App;
