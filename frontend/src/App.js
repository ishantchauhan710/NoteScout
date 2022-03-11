import './App.css';
import './stylesheets/Variables.css';
import './stylesheets/HeaderComponent.css';
import './stylesheets/FooterComponent.css';




import HeaderComponent from './components/headers/HeaderComponent';
import FooterComponent from './components/footers/FooterComponent';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <LandingPage />
      <FooterComponent />
    </div>
  );
}

export default App;
