import { ToastContainer } from 'react-toastify';
import './App.css';
import { OverlayLoader } from './components/OverlayLoader/OverlayLoader';
import RouteDefinitions from './components/Routes/RouteDefinitions';
import Footer from './layouts/Footer/Footer';
import Navi from './layouts/Navi/Navi';
import Codecademy from './pages/Codecademy/Codeacademy';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer />
        <Navi />
        <OverlayLoader />
        <RouteDefinitions />
        <Footer />
      </>
    </div>
  );
} 

export default App;
