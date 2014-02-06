var myApp = angular.module('myApp', []);

//service style, probably the simplest one
myApp.service('helloWorldFromService', function() {
    this.sayHello = function() {
        return "Hello, World! From Service"
    };
});

//factory style, more involved but more sophisticated
myApp.factory('helloWorldFromFactory', function() {
    return {
        sayHello: function() {
            return "Hello, World! From Factory"
        }
    };
});
//provider style, full blown, configurable version
myApp.provider('helloWorld', function() {
// In the provider function, you cannot inject any
// service or factory. This can only be done at the
// "$get" method.

    this.name = 'Default';

    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "!"
            }
        }
    };

    this.setName = function(name) {
        this.name = name;
    };
});

//hey, we can configure a provider!
myApp.config(function(helloWorldProvider){
    helloWorldProvider.setName('World');
});

function MyCtrl($scope, helloWorld, helloWorldFromFactory, helloWorldFromService) {
    $scope.ctrlhello = helloWorld.sayHello();
    $scope.facthello = helloWorldFromFactory.sayHello();
    $scope.servhello = helloWorldFromService.sayHello();

    $scope.hellos = [
       helloWorld.sayHello(),
       helloWorldFromFactory.sayHello(),
       helloWorldFromService.sayHello()];
}
