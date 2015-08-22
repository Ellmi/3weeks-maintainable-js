function Like(el){
    this.el = $(el);
    var that = this;
    this.addPlace=function(place){
        var likedTemplate = _.template('<li class="like"><%= place %></li>');
        var alreadyInLikedPlaces = _.find($('#likedPlaces li'), function(list) { return list.textContent == place})
        if(!alreadyInLikedPlaces) {
            $('ul', that.el).append(likedTemplate({place: place}))
        }
    }
}