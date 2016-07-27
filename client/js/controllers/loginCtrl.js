angular
    .module('beerApp')

    .controller('loginCtrl', loginCtrl)

function loginCtrl(User, $state, $sessionStorage) {
  console.log('loginCtrl');
  var vm = this;
  vm.credentials = {};
  vm.login = () => {
    User.login(vm.credentials)
          .then(() => {
            $state.go('profile');
          });
  }
};
