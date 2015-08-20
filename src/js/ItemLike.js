function ItemLike() {
    this.items = [];
    var that = this;
    ItemLike.prototype.renderView = function () {
        $('#likedPlaces ul').empty();
        if (that.items.length === 0) {
            return;
        }
        $.each(that.items, function (i, item) {
            $("#likedPlaces ul").append('<li class="like">' +
            item + '</li>')
        })
    };
    ItemLike.prototype.likeHander = function(){
        var item = $(this.parentElement.firstElementChild).text();
        if($.inArray(item, that.items) !== -1){
            that.items.splice( that.items.indexOf(item), 1 );
            $(this).text("Like");
        }else{
        that.items.push(item);
            $(this).text("Liked");
        }
        that.renderView();
    };
    $(document).on('click','#results a',that.likeHander);
}


