import './App.css';
import './stylesheets/Variables.css';
import './stylesheets/HeaderComponent.css';


import HeaderComponent from './components/headers/HeaderComponent';
import FooterComponent from './components/footers/FooterComponent';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <LandingPage />
    </div>
  );
}

export default App;
