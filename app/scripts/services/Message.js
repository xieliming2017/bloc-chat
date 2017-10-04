(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId){
      Message.activatedMsg = $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
    }

    Message.formatTime = function(){
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours %12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours +":" + minutes + ' '+ ampm;
      return strTime;
    }

    Message.send = function(message, roomId){
      messages.$add({
        content: message,
        roomID: roomId,
        sentAt: Message.formatTime(),
        username: $cookies.get('blocChatCurrentUser')
      });
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();
