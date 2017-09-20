(function() {
    function NewRoomInstanceCtrl($uibModalInstance, $scope) {
      this.ok = function () {
        $uibModalInstance.close($scope.roomName);
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('NewRoomInstanceCtrl', ['$uibModalInstance','$scope', NewRoomInstanceCtrl]);
})();
