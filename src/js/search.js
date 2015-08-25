function Search(el) {
    this.el = $(el);
    this.el.click(function(){
        var name = $('#locationInput').val(),
            filter = name ? '?name=' + name : '' ;
        var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';
        $.ajax({
            url: LOCATION_SERVICE_API + filter,
            success: function(data){
                $(document).trigger('renderResults', [data]);
            },
            dataType: 'json'
        });
    });
}