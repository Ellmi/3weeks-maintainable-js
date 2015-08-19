function SearchPage() {
    var that = this;
    this.searcher =new LocationSearch();
    this.searchButtonHandler = function() {
        that.searchValue = $("#locationInput").val();
        that.searcher.search(that.searchValue,that.renderView);
    };
    this.renderView=function(data){
        $("#results").empty();
        if(data.length === 0){return;}
        $.each(data,function(i,location){
            $("#results").append('<div class=' +
            '"panel large-12 columns"><h5>'+location.name +
            '</h5><h6>'+location.description +
            '</h6><a href="#" class="like button tiny right">Like</a>'+
            '</div>')})
    };
    $('#searchButton').click(this.searchButtonHandler);
}


