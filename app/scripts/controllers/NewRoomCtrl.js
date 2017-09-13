(function() {
    function NewRoomCtrl($uibModal, $document) {
      var $newRoom = this;

      $newRoom.open = function (parentSelector) {
          var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: $newRoom.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '/templates/newRoom.html'
            controller: 'NewRoomCtrl',
            controllerAs: '$newRoom',
            appendTo: parentElem,
          });

          modalInstance.result.then(function () {
            //empty function
          }, function () {
            //empty function
          });
        };
    }

    function ModalInstanceCtrl($uibModalInstance){
      var $newRoom = this;
      $newRoom.ok = function(){
        $uibModalInstance.close();
      };

      $newRoom.cancel = function(){
        $uibModalInstance.dismiss('cancel');
      };

    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$uibModal', '$document', NewRoomCtrl]);
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
