(function() {
    function HomeCtrl(Room, $uibModal, $scope, Message) {
      var $ctrl = this;
      $ctrl.rooms = Room.all;




      $ctrl.open = function(){
        var newRoomModal = $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '/templates/modals/newRoom.html',
          controller: 'NewRoomInstanceCtrl',
          controllerAs: 'modal',
          size: 'sm',
          resolve: {
            rooms: function() {
              return $ctrl.rooms;
            }
          }
        });

        newRoomModal.result.then(function (room) {
          Room.add(room);
        }, function () {

        });
      }

// activate a chat room and show the content to the right of the side bar
      $ctrl.activateRoom = function(room){
        $ctrl.activatedRoom = room.$value;
        $ctrl.activatedRoomKey = room.$id;
        $ctrl.getChatList($ctrl.activatedRoomKey);
      }

      $ctrl.getChatList = function(roomId){
        Message.getByRoomId(roomId);
        $ctrl.activatedMessage = Message.activatedMsg;

      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal','$scope','Message',HomeCtrl]);
})();
