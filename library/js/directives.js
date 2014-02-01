
app.directive("status", ["$location", function($location){
    return function(scope, element, attr){
        element.on('click', function(e){
            e.defaultPrevented;
            scope.$apply(attr.open);
            var status = attr.status;
            var url = $location.url();
            if(status == url){
                element.addClass('active');
            }
            else {
                element.removeClass('active');
            }
            this.click();

        });
    }
}]);