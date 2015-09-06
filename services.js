angular.module('tagoreApp.services', ['ui.bootstrap', 'ngDragDrop'])

	.service('PoemService', function() {
	  // Might use a resource here that returns a JSON array
	  // Some fake testing data
	  var poems = [{
	    poemId: 0,	    image: "http://i.imgur.com/061FaIO.jpg",	    date_created: new Date(),	    popularity: 1,	    author: 'Katie'
	  }, 
	  {
	    poemId: 1,	    image: "http://41.media.tumblr.com/12bd337a551c899f061ae3bcf680674b/tumblr_ni6c2iClsb1tm7bt2o1_500.jpg",	    date_created: new Date(),	    popularity: 3,	    author: 'Manu'
	  },	  {
	    poemId: 2,	    image: 'https://loftyshoresafar.files.wordpress.com/2012/03/fridge-magnet-poetry1.jpg',	    date_created: new Date(),	    popularity: 2,	    author: 'Bedford'
	  },	  {
	    poemId: 3,	    image: 'http://www.squaregear.net/picture/p070127.jpg',	    date_created: new Date(),	    popularity: 5,	    author: 'Erin'
	  },	  {
	    poemId: 4,	    image: 'http://40.media.tumblr.com/e2f0d9f91e0f73b89dbb6100088b06bf/tumblr_nkn7pbEmeW1tm7bt2o1_500.jpg',	    date_created: new Date(),	    popularity: 10,	    author: 'Daniel'
	  }

	    ];
	  return {
	    all: function() {
	      console.log('services works')
	      return poems;
	    },	    remove: function(poem) {
	      poems.splice(poems.indexOf(poem), 1);
	    },	    get: function(poemId) {
	      for (var i = 0; i < poems.length; i++) {
	        if (poems[i].id === parseInt(poemId)) {
	          return poems[i];
	        }
	      }
	      return null;
	    },	    post: function(poem){
	    poems.push(poem);
	    }
	  };
	})


	.service('WordService', function() {
		
		var hipsterIpsum = ["Selvage hashtag lo-fi, Carles farm-to-table Austin consectetur vinyl fap. PBR&B consequat Thundercats polaroid, adipisicing art party viral culpa. Locavore mlkshk velit, Banksy Godard slow-carb aliquip semiotics food truck messenger bag. Food truck organic aute assumenda normcore try-hard. +1 keffiyeh labore Odd Future aesthetic, cray trust fund. Authentic retro mustache pariatur cliche, slow-carb four loko Pitchfork officia stumptown VHS paleo anim organic. Narwhal vinyl single-origin coffee esse, mumblecore Helvetica do Odd Future.Bicycle rights cronut fingerstache gentrify esse, keffiyeh scenester labore aute selvage chillwave freegan try-hard. Artisan health goth dolor forage, pickled Intelligentsia nesciunt jean shorts ad aute selfies. Aliqua Odd Future ugh butcher letterpress hella pariatur voluptate, consequat viral dreamcatcher eu. Est XOXO mustache nulla sapiente. Etsy eu letterpress drinking vinegar nisi occaecat, kale chips Carles crucifix elit. Helvetica vinyl post-ironic paleo, 8-bit occupy art party consequat PBR sed tilde letterpress single-origin coffee. Portland shabby chic health goth, accusamus velit gentrify cardigan squid Intelligentsia keffiyeh mustache ullamco Wes Anderson pop-up you probably haven't heard of them. Mlkshk street art pickled, tousled cred church-key pour-over Banksy kitsch organic occupy. Actually voluptate assumenda plaid Banksy, XOXO Williamsburg wolf Schlitz meggings craft beer slow-carb Shoreditch tote bag dolore. Health goth ullamco swag, DIY Truffaut banjo taxidermy placeat elit aliquip roof party cray. Paleo magna Thundercats disrupt American Apparel adipisicing. Trust fund reprehenderit wolf placeat cronut narwhal. Etsy polaroid XOXO quinoa, literally forage Neutra freegan ea gastropub fashion axe wolf. Placeat dolore 90's, DIY vegan Blue Bottle kale chips sunt pop-up Schlitz.Williamsburg elit sartorial, typewriter Portland Kickstarter raw denim. Wolf dreamcatcher small batch street art hashtag, kogi cillum photo booth authentic flannel skateboard consequat aliquip. Aesthetic pork belly adipisicing, 90's photo booth wayfarers kale chips delectus lumbersexual. Occupy leggings minim migas tofu. Paleo roof party hella ea, anim fugiat meh ugh Wes Anderson keytar. Sed Pitchfork shabby chic put a bird on it, food truck brunch in beard iPhone qui retro gentrify elit American Apparel nulla. Austin Carles in ea, consectetur Pinterest cardigan viral."];

		var topWords = ["the","be","and","of","a","in","to","have","it","I","that","for","you","he","with","on","do","say","this","they","at","but","we","his","from","that","not","n't","n't","by","she","or","as","what","go","their","can","who","get","if","would","her","all","my","make","about","know","will","as","up","one","time","there","year","so","think","when","which","them","some","me","people","take","out","into","just","see","him","your","come","could","now","than","like","other","how","then","its","our","two","more","these","want","way","look","first","also","new","because","day","more","use","no","man","find","here","thing","give","many","well","only","those","tell","one","very","her","even","back","any","good","woman","through","us","life","child","there","work","down","may","after","should","call","world","over","school","still","try","in","as","last","ask","need","too","feel","three","when","state","never","become","between","high","really","something","most","another","much","family","own","out","leave","put","old","while","mean","on","keep","student","why","let","great","same","big","group","begin","seem","country","help","talk","where","turn","problem","every","start","hand","might","American","show","part","about","against","place","over","such","again","few","case","most","week","company","where","system","each","right","program","hear","so","question","during","work","play"];

		var verbs = ["be","have","do","say","go","get","make","know","think","take","see","come","want","use","find","give","tell","work","call","try","ask","need","feel","become","leave","were","had","did","said","went","got","made","knew","thought","took","saw","came","wanted","used","found","gave","told","worked","called","tried","asked","needed","felt","became","left","been","had","done","said","gone","got/gotten","made","known","thought","taken","seen","come","wanted","used","found","given","told","worked","called","tried","asked","needed","felt","become","left"]
		

		console.log(topWords)
		var hipsterPunctuationLess = hipsterIpsum[0].replace(/[.,\/!%\^&\*;:{}=\_`~()]/g,"");
		var hipsterPunctuationLessString = hipsterPunctuationLess.replace(/\s{2,}/g," ");
		console.log("punctuationLessString: "+hipsterPunctuationLessString)
		var hipsterLowerCase = hipsterPunctuationLessString.toLowerCase();
		console.log("lowercaseString: "+hipsterLowerCase)
		
		var hipsterAllWords = hipsterLowerCase.split(' ');

		var inputWords = hipsterAllWords.concat(topWords, verbs); 
		console.log(inputWords)
		var words = [];
		$.each(inputWords, function(i, el){
    		if($.inArray(el, words) === -1) 
    			words.push(el);
		});

		console.log(words);
		

	return {
	    all: function() {
	      console.log('services works')
	      return words;
	    },	
	        remove: function(word) {
	      words.splice(words.indexOf(word), 1);
	    },	
	        get: function(number) {
	     	function getRandom(arr, n) {
		    	var result = new Array(n),		    
		    	    len = arr.length,		
		    	    taken = new Array(len);
		    		if (n > len)
		        		throw new RangeError("getRandom: more elements taken than available");
		    		while (n--) {
		        		var x = Math.floor(Math.random() * len);
		        		result[n] = arr[x in taken ? taken[x] : x];
		        		taken[x] = --len;
		    		}
		    		return result;
			}
			var randomWords = getRandom(words,number)
			console.log(randomWords)
			return randomWords
	    },	    post: function(word){
	    words.push(word);
	    }
	  };


	});
