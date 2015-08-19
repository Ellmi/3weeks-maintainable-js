function SearchPage() {
    this.searchButtonHandler = function(search) {
        this.searchValue = $("#locationInput").val();
        search(this.searchValue);
    };


}


