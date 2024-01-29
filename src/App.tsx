import './App.css';
import { OverlayLoader } from './components/OverlayLoader/OverlayLoader';
import RouteDefinitions from './components/Routes/RouteDefinitions';
import Footer from './layouts/Footer/Footer';
import Navi from './layouts/Navi/Navi';

function App() {
  return (
    <div className="App">
      <>
        <Navi />
        <OverlayLoader />
        <RouteDefinitions />
        <Footer />
      </>
    </div>
  );
}

export default App;
