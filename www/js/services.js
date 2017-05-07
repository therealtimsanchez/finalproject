angular.module('App.services', [])

.factory('presenter', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var presenter = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return presenter;
    },
    remove: function(presenter) {
      presenter.splice(presenter.indexOf(presenter), 1);
    },
    get: function(presenterId) {
      for (var i = 0; i < presenter.length; i++) {
        if (presenter[i].id === parseInt(presenterId)) {
          return presenter[i];
        }
      }
      return null;
    }
  };
});
