import './App.css';
import './stylesheets/Variables.css';
import './stylesheets/HeaderComponent.css';
import './stylesheets/FooterComponent.css';
import './stylesheets/CardComponent.css';
import './stylesheets/pages/LandingPage.css';
import './stylesheets/pages/NotesHomePage.css';

import {BrowserRouter, Route} from 'react-router-dom';
import HeaderComponent from './components/headers/HeaderComponent';
import FooterComponent from './components/footers/FooterComponent';
import LandingPage from './pages/LandingPage';
import NotesHomePage from './pages/NotesHomePage';



function App() {
  return (
      <BrowserRouter>
        <HeaderComponent />

        <Route path='/' component={LandingPage} exact />
        <Route path='/notes' component={NotesHomePage} exact />
        

        <FooterComponent />
      </BrowserRouter>

  );
}

export default App;
