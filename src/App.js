
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import NexGeneration from './components/NextGeneration';
import WhoChoose from './components/WhoChoose';
import LatestArticles from './components/LatesArticles';
//import { createPortal } from 'react-dom';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="App">
      <Navigation />
      <NexGeneration />
      <WhoChoose />
      <LatestArticles />
      <Contacts />
    </div>
  );
}

export default App;
