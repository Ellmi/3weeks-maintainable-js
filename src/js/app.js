var $ = require('jquery');
var SearchResults = require('./models/search-model');
var LikedPlaces = require('./models/liked-places-model');
var LikedPlacesView = require('./views/liked-places-view');
var SearchResultsView = require('./views/results-view');
var Search = require('./search');

$(function(){
    'use strict';

    var searchResultsModel = new SearchResults({'results': []});
    var likedItemsModel = new LikedPlaces({'likedPlaces': []});

    new Search($('#searchButton'),searchResultsModel);
    var likedPlaces = new LikedPlacesView(likedItemsModel);
    var results = new SearchResultsView(searchResultsModel,likedItemsModel);

});