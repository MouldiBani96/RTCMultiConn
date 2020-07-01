var connection = new RTCMultiConnection();

// this line is VERY_important
connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

// all below lines are optional; however recommended.

connection.session = {
    audio: true,
    video: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};

connection.onstream = function(event) {
    document.body.appendChild( event.mediaElement );
};
var roomid=document.getElementById('myText').value;

document.getElementById('btn-open-room').onclick = function() {
    this.disabled = true;
    connection.open( roomid );
};

document.getElementById('btn-join-room').onclick = function() {
    this.disabled = true;
    connection.join( roomid );
};