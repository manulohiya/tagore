angular.module('tagoreApp.services', ['ui.bootstrap', 'ngDragDrop'])

.service('PoemService', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var poems = [{
    poemId: 0,
    image: "http://i.imgur.com/061FaIO.jpg",
    date_created: new Date(),
    popularity: 1,
    author: 'Katie'
  }, 
  {
    poemId: 1,
    image: "http://41.media.tumblr.com/12bd337a551c899f061ae3bcf680674b/tumblr_ni6c2iClsb1tm7bt2o1_500.jpg",
    date_created: new Date(),
    popularity: 3,
    author: 'Manu'
  },
  {
    poemId: 2,
    image: 'https://loftyshoresafar.files.wordpress.com/2012/03/fridge-magnet-poetry1.jpg',
    date_created: new Date(),
    popularity: 2,
    author: 'Bedford'
  },
  {
    poemId: 3,
    image: 'http://www.squaregear.net/picture/p070127.jpg',
    date_created: new Date(),
    popularity: 5,
    author: 'Erin'
  },
  {
    poemId: 4,
    image: 'http://40.media.tumblr.com/e2f0d9f91e0f73b89dbb6100088b06bf/tumblr_nkn7pbEmeW1tm7bt2o1_500.jpg',
    date_created: new Date(),
    popularity: 10,
    author: 'Daniel'
  }

    ];
  return {
    all: function() {
      console.log('services works')
      return poems;
    },
    remove: function(poem) {
      poems.splice(poems.indexOf(poem), 1);
    },
    get: function(poemId) {
      for (var i = 0; i < poems.length; i++) {
        if (poems[i].id === parseInt(poemId)) {
          return poems[i];
        }
      }
      return null;
    },
    post: function(poem){
    poems.push(poem);
    }
  };
});