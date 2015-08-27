$(function(){
    'use strict';

    var searchResultsModel = new SearchResults({'results': []});
    var likedItemsModel = new LikedItems({'likedItems': []});

    new Search($('#searchButton'),searchResultsModel);
    var liked = new Like($('#likedPlaces'));
    var results = new SearchResultsView(searchResultsModel,likedItemsModel);
    results.render();
    $(document).on('like',function(event,place){
        liked.addPlace(place);
    });

});