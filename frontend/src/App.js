import './App.css';
import './stylesheets/Variables.css';
import './stylesheets/HeaderComponent.css';


import HeaderComponent from './components/headers/HeaderComponent';
import FooterComponent from './components/footers/FooterComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
