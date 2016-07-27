angular

  .module('beerApp')

  .controller('reviewCtrl', reviewCtrl)

function reviewCtrl(User, $state, $sessionStorage, BeerAPI) {
  console.log('reviewCtrl');
  var vm = this;
  vm.beer = {};
  vm.loading = true;
  vm.rating = {};
  BeerAPI.getRandom()
    .then((res) => {
      vm.beer = res.data;
      vm.loading = false;
    })
  vm.rate = () => {
    var ratingObj = {
      beerId: vm.beer.id,
      beerName: vm.beer.name,
      score: vm.rating.score,
      comment: vm.rating.comment
    }
    User.addRating(ratingObj)
      .then((res) => {
        vm.loading = true;
        BeerAPI.getRandom()
          .then((res) => {
            vm.beer = res.data;
            vm.loading = false;
          })
      })
  }

  vm.notsampled = () => {
    console.log('whhaaat');
    var ratingObj = {
      beerId: vm.beer.id,
      beerName: vm.beer.name,
      score: undefined,
      comment: undefined
    }
    User.addRating(ratingObj)
      .then((res) => {
        vm.loading = true;
        BeerAPI.getRandom()
          .then((res) => {
            vm.beer = res.data;
            vm.loading = false;
          })
      })
  }

};