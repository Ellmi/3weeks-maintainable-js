function SearchPage() {
    this.searchButtonHandler = function(search) {
        this.searchValue = $("#locationInput").val();
        search(this.searchValue);
    };
    this.renderView=function(data){
        if(data.length === 0){return;}
        $.each(data,function(i,location){
            $("#results").append('<div class=' +
            '"panel large-12 columns"><h5>'+location.name +
            '</h5><h6>'+location.description +
            '</h6><a href="#" class="like button tiny right">Like</a>'+
            '</div>')})
    };

}


