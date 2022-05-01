import Peer from "peerjs";
import { uuid as uuidv4 } from "uuidv4";
import { initStream } from "../Listen/Listen";

const id = uuidv4().substr(0, 4);

export let myPeer = new Peer(id, {
  host: window.location.hostname,
  port: 9000,
  debug: 1,
  path : "/myapp"
});

myPeer.on('open', id => {
  console.log(`id => ${id}`);
});

export const initAnswer = (stream) => {
  myPeer.on('call', (call) => {
    console.log(`someone is calling, answering...`);
    call.answer(stream);
  });
  console.log(`initialized oncall event`);
}

export const callPeer = (remotePeerId) => {

  let userMedia = navigator.mediaDevices.getUserMedia({
    audio:true,
    video:false
  }).then(stream => {

    var call = myPeer.call(remotePeerId, stream);
    console.log(`called remote peer with id ${remotePeerId}`);
  
    call.on('stream', (stream) => {
      console.log(`gotTheStream, now need to put it to an element`);
      initStream(stream);
    });  
  });

  
}




