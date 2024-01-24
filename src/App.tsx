import './App.css';
import RouteDefinitions from './components/Routes/RouteDefinitions';
import Footer from './layouts/Footer/Footer';
import Navi from './layouts/Navi/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <RouteDefinitions />
      <Footer />
    </div>
  );
}

export default App;
