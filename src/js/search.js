function Search(el,model) {
    this.model = model;
    this.el = $(el);
    var that = this;
    this.el.click(function(){
        var name = $('#locationInput').val(),
            filter = name ? '?name=' + name : '' ;
        var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';
        $.ajax({
            url: LOCATION_SERVICE_API + filter,
            success: function(data){
                that.model.set({"results": data});
                that.model.trigger('change:results', data);
            },
            dataType: 'json'
        });
    });
}