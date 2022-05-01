import { useState } from "react";
import { callPeer, initStreamReceiver } from "../Broadcast/peer";

export const initStream = (stream) => {
  let audio = document.getElementById('audioCapture');
  audio.srcObject = stream;
  audio.play();
}

const Listen = () => {
  const [bcUUID, setbcUUID] = useState('');

  let audio = new Audio();

  const listenToBroadcaster = () => {
    callPeer(bcUUID, audio);
  }

  const setID = (e) => {
    setbcUUID(e.target.value);
  }

  return <>
    <audio id="audioCapture"></audio>
    <div>
      Please enter broadcaster's UUID
    </div>
    <input type = "text" value={bcUUID} onChange={(e) => setID(e)} id="broadcasterUUID" />
    <button onClick={listenToBroadcaster}>Press here to start listening</button>
    
  </>
}

export default Listen;