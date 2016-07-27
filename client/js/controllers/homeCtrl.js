angular
  .module('beerApp')

  .controller('homeCtrl', homeCtrl)

function homeCtrl(User, $state) {
  console.log('homeCtrl');
  var vm = this;
};