angular

  .module('beerApp')

  .controller('myBeersCtrl', myBeersCtrl) 

function myBeersCtrl(User, $state, $sessionStorage, StoreData) {
  console.log('myBeersCtrl');
  var vm = this;
  vm.beers = {};
  User.getPerson($sessionStorage.currentUser)
    .then((res) => {
      vm.beers = res.data.ratings;
      console.log(vm.beers);
      vm.beers = vm.beers.filter((beer) => {
        return beer.score !== undefined;
      })
    })
  vm.deleteRating = (id) => {
    User.deleteRating(id)
      .then((res) => {
        User.getPerson($sessionStorage.currentUser)
          .then((res) => {
            vm.beers = res.data.ratings;
            console.log(vm.beers);
            vm.beers = vm.beers.filter((beer) => {
              return beer.score !== undefined;
            })
          })
      })
  }

  vm.sortBy = (order) => {
    if(vm.sortOrder === order) {
      vm.sortOrder = "-" + order;
    } else {
      vm.sortOrder = order;
    }
  };

  vm.editRating = (id, score, comment) => {
    StoreData.set({'edited': true, "load": { "score": score, "comment": comment }});
    $state.go('reviewspecific', { "id": id });
  }
};