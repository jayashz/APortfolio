
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/services/Services';
import Experiences from './Components/Experiences/Experiences';
import Work from './Components/Work/Work';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experiences />
      <Work />
      <Portfolio />
    </div>
  );
}

export default App;
