import './App.css';
import LoginPageCard from './components/LoginPageCard/LoginPageCard';
import Dashboard from './layouts/Dashboard/Dashboard';
import Footer from './layouts/Footer/Footer';
import Navi from './layouts/Navi/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
