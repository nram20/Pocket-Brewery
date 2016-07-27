angular.module('beerApp')
  .controller('allBeersCtrl', allBeersCtrl)



function allBeersCtrl(User, $state, $sessionStorage) {
  console.log('allBeersCtrl');

  var vm = this;

  vm.notSampled = [];

  vm.startreview = () => {
    $state.go('review');
  }

  vm.reviewThis = (id) => {
    $state.go('reviewspecific', { "id": id });
  }

  User.getNotSampled()
    .then((res) => {
      vm.notSampled = res.data;
    })
};