angular
  .module('beerApp')

  .controller('mainCtrl', mainCtrl)

function mainCtrl(User, $scope, $state, $sessionStorage) {
  console.log('mainCtrl');
  var vm = this;
  vm.isLoggedIn = !!$sessionStorage.currentUser;
  $scope.$watch(function() {
    return $sessionStorage.currentUser;
  }, function(newVal, oldVal) {
    vm.isLoggedIn = !!newVal;
  });

  vm.logOut = () => {
    User.logout()
      .then(res => {
        console.log(res);
        $sessionStorage.currentUser = null;
        $state.go('home');
      });
  }
};