function LocationSearch() {
    LocationSearch.prototype.search = function(location,success) {
        var query = "";
        if (location) {
            query = "?name=" + location;
        }
        $.ajax({
            url: 'http://location-backend-service.herokuapp.com/locations' + query,
            success: success,
            dataType: 'json'
        });
    };
}


