
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import NexGeneration from './components/NextGeneration';
import WhoChoose from './components/WhoChoose';
import LatestArticles from './components/LatesArticles';
//import { createPortal } from 'react-dom';
import Contacts from './components/Contacts';
import { useState } from 'react';
import Modal from './components/Modal';
function App() {
  const [showModal, setShowModal] = useState(false)
  const handleButtonClick = () => {
    setShowModal(!showModal)
  }


  return (
    <div className="App">

      <Navigation showModal={showModal} handleButtonClick={handleButtonClick} />
      {showModal && <Modal onClose={handleButtonClick} />}
      <NexGeneration />
      <WhoChoose />
      <LatestArticles />
      <Contacts />

    </div>
  );
}

export default App;
