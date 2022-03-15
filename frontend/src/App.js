import './App.css';
import './stylesheets/Variables.css';
import './stylesheets/HeaderComponent.css';
import './stylesheets/FooterComponent.css';
import './stylesheets/DialogComponent.css';
import './stylesheets/CardComponent.css';
import './stylesheets/pages/LandingPage.css';
import './stylesheets/pages/NotesHomePage.css';
import './stylesheets/pages/CreateNotePage.css';
import './stylesheets/pages/NotePage.css';




import {BrowserRouter, Route} from 'react-router-dom';
import HeaderComponent from './components/headers/HeaderComponent';
import FooterComponent from './components/footers/FooterComponent';
import LandingPage from './pages/LandingPage';
import NotesHomePage from './pages/NotesHomePage';
import { AppState } from './AppContext';
import { LoadingComponent } from './components/dialog/LoadingComponent';
import SnackbarComponent from './components/dialog/SnackbarComponent';
import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';
import NotePage from './pages/NotePage';




function App() {

  const {loading,setLoading,message,setMessage,showMessage,setShowMessage,snackbarVariant,setSnackbarVariant} = AppState();

  return (
      <BrowserRouter>
        <HeaderComponent />

        <Route path='/' component={LandingPage} exact />
        <Route path='/notes' component={NotesHomePage} exact />
        <Route path='/createnote' component={CreateNotePage} exact />
        <Route path='/editnote/:id' component={EditNotePage} exact />
        <Route path='/note/:id' component={NotePage} exact />
        
        
        


        {loading===true?(<LoadingComponent />):(<></>)}

        <SnackbarComponent snackbarType={snackbarVariant} snackbarMessage={message} showMessage={showMessage} setShowMessage={setShowMessage} />
        

        <FooterComponent />
      </BrowserRouter>

  );
}

export default App;
