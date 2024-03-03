import { useState, useRef } from "react";

export default function Player() {
  const playerInputRef = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  

  function handleClick() {
    setEnteredPlayerName(playerInputRef.current.value);
    playerInputRef.current.value = ''; //! But be careful about usage

  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?? "guest-player, set your name?.."}</h2>
      <p>
        <input ref={playerInputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
