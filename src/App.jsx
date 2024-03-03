import React, { useState } from 'react';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import ResultModal from './components/ResultModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  function handleShowModal(props) {
    setShowModal(true);
    setModalProps(props);
  }

  function handleCloseModal() {
    setShowModal(false);
    setModalProps({});
  }

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} onShowModal={handleShowModal} />
        <TimerChallenge title="Not easy" targetTime={5} onShowModal={handleShowModal} />
        <TimerChallenge title="Getting tough.. " targetTime={10} onShowModal={handleShowModal} />
        <TimerChallenge title="Pros Only!.. " targetTime={15} onShowModal={handleShowModal} />
      </div>
      {showModal && <ResultModal {...modalProps} onClose={handleCloseModal} />}
    </>
  );
}

export default App;
