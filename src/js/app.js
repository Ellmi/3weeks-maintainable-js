$(function(){
    'use strict';

    var searchResultsModel = new SearchResults({'results': []});
    var likedItemsModel = new LikedPlaces({'likedPlaces': []});

    new Search($('#searchButton'),searchResultsModel);
    var likedPlaces = new LikedPlacesView(likedItemsModel);
    var results = new SearchResultsView(searchResultsModel,likedItemsModel);
    results.render();
    likedPlaces.render();
});