
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/services/Services';
import Experiences from './Components/Experiences/Experiences';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experiences />
    </div>
  );
}

export default App;
