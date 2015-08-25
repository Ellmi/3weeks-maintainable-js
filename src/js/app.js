$(function(){
    'use strict';

    new Search($('#searchButton'));
    var liked = new Like($('#likedPlaces'));
    var results = new Results($('#results'));
    $(document).on('like',function(event,place){
        liked.addPlace(place);
    });
    $(document).on('renderResults',function(event,data){
        results.renderView(data);
    });

});