import { initStream } from "../Listen/Listen";
import { initAnswer, myPeer } from "./peer";

const addAudioStream = (stream) => {
  initStream(stream);
}

const initAudioStream = (stream) => {
  initAnswer(stream);
}

const BroadcastButton = () => {

  const myPeerId = myPeer.id;

  const broadcast = (e) => {
    const media = navigator.mediaDevices.getUserMedia({
      audio:true,
      video:false
    }).then(stream => {
      // addAudioStream(stream);
      initAudioStream(stream);
    }); 
  }
  
  return <>
    <div>
      My Peer Id is {myPeerId}
    </div> 
    <button onClick={broadcast}>Press here to broadcast your voice to others</button>
  </>
}

export default BroadcastButton;