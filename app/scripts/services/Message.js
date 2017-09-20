(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId){
      var message = ref.orderByChild('roomID').equalTo(roomId).on('value', function(snapshot) {
        Message.activatedMsg = snapshot.val();
      });
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
