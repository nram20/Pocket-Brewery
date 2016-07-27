angular
  .module('beerApp')

  .controller('reviewspecificCtrl', reviewspecificCtrl)

function reviewspecificCtrl(User, $state, $sessionStorage, BeerAPI, $stateParams, StoreData) {
  console.log('reviewspecificCtrl');
  var vm = this;
  vm.beer = {};
  vm.loading = true;
  vm.rating = {};

  BeerAPI.getById($stateParams.id)
    .then((res) => {
      vm.beer = res.data;
      vm.loading = false;
      var info = StoreData.get();
      if(info.edited) {
        console.log(info.load.score);
        vm.rating.score = info.load.score;
        vm.rating.comment = info.load.comment;
      }
    })


  vm.rate = () => {
    var ratingObj = {
      beerId: vm.beer.id,
      beerName: vm.beer.name,
      score: vm.rating.score,
      comment: vm.rating.comment
    }
    User.addRatingToSpecific(ratingObj.beerId, ratingObj)
      .then((res) => {
        var info = StoreData.get();

        if(info.edited) return $state.go('myBeers');
        $state.go('allBeers')
      })
  }

  vm.notsampled = () => {
    $state.go('allBeers')
  }

};