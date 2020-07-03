//declared RTCMulticonnection
var connection = new RTCMultiConnection();

//generate socket url 
connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

// make video true 
connection.session = {
    audio: true,
    video: true
};
//and this line for ReceriveVideo 
connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};

connection.onstream = function(event) {
    document.body.appendChild( event.mediaElement );
};
var roomid=document.getElementById('myText').value;
console.log(roomid);

document.getElementById('btn-open-room').onclick = function() {
    this.disabled = true;
    console.log(roomid);

    connection.open( roomid );
};

document.getElementById('btn-join-room').onclick = function() {
    this.disabled = true;
    connection.join( roomid );
};