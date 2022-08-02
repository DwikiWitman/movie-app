import './App.css';
import NavigationBar from "./components/NavigationBar"
import "./style/landingPage.css"
import Intro from "./components/Intro"
import Trending from './components/Trending';
import SuperHero from './components/Superhero';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>

      {/* trending section */}
      <div className="trending" id="trending">
        <Trending />
      </div>

      {/* superhero section */}
      <div className="superhero" id="superhero">
        <SuperHero />
      </div>


    </div>
  );
}

export default App;
