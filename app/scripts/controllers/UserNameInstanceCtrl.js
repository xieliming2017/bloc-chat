(function() {
    function UserNameInstanceCtrl($uibModalInstance, $scope) {
      this.ok = function () {
        console.log($scope.userName);
        if($scope.userName != '' && $scope.userName != undefined){
          $uibModalInstance.close($scope.userName);
        }
      };

    }

    angular
        .module('blocChat')
        .controller('UserNameInstanceCtrl', ['$uibModalInstance','$scope', UserNameInstanceCtrl]);
})();
