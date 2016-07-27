angular

  .module('beerApp')

  .controller('regCtrl', regCtrl)

function regCtrl(User, $state, $timeout) {
  console.log('regCtrl');
  var vm = this;
  vm.registration = {};
  vm.success = false;
  vm.passwordsNotMatch = false;
  vm.register = () => {
    if(vm.registration.password1 !== vm.registration.password2) return vm.passwordsNotMatch = true;
    var newUser = {
      email: vm.registration.email,
      password: vm.registration.password1
    }
    vm.success = true;
    User.signup(newUser)
      .then((res) => {
          $state.go('login')
      })
  }
};
