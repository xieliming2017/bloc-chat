(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      var userNameModal = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modals/userNameModal.html',
        controller: 'UserNameInstanceCtrl',
        controllerAs: 'usernameModal',
        size: 'sm',
      });

      userNameModal.result.then(function (username) {
        $cookies.put('blocChatCurrentUser', username);
        currentUser = $cookies.get('blocChatCurrentUser');
      }, function () {

      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
