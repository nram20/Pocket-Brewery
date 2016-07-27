angular
  .module('beerApp')

  .controller('profileCtrl', profileCtrl)

function profileCtrl(User, $state, $sessionStorage) {
  console.log('profileCtrl');
  var vm = this;
  vm.user = {};
  User.getPerson($sessionStorage.currentUser)
    .then((res) => {
      vm.user = res.data;
    })
  vm.editProfile = () => {
    $state.go('editProfile');
  }
};