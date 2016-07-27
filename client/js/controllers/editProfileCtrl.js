angular
  .module('beerApp')
  
  .controller('editProfileCtrl', editProfileCtrl)

function editProfileCtrl(User, $state, $sessionStorage) {
  console.log('editProfileCtrl');

  var vm = this;

  vm.editing = {};
  User.getPerson($sessionStorage.currentUser)
    .then((res) => {
      vm.editing = res.data;
    })
  vm.cancel = () => {
    $state.go('profile');
  }

  vm.save = () => {
    if(vm.editing.password1 !== vm.editing.password2) return;
    var newUser;
    if(vm.editing.password1 !== undefined) {
      newUser = {
        email: vm.editing.email,
        password: vm.editing.password1
      }
    } else {
      newUser = {
        email: vm.editing.email
      }
    }
    User.editprofile(newUser)
      .then((res) => {
        User.logout()
          .then(res => {
            console.log(res);
            $sessionStorage.currentUser = null;
            $state.go('home');
          });
    })
  }
};