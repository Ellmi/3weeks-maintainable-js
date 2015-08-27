$(function(){
    'use strict';

    var searchResultsModel = new SearchResults({'results': []});

    new Search($('#searchButton'),searchResultsModel);
    var liked = new Like($('#likedPlaces'));
    var results = new SearchResultsView(searchResultsModel);
    results.render();
    $(document).on('like',function(event,place){
        liked.addPlace(place);
    });

});