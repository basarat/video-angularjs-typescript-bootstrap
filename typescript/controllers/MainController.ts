///<reference path="../reference.ts"/>

class MainController {

    message = "Some Message";
    progress = 0;

    constructor($scope) {
        $scope.vm = this;
    }

    increaseProgress() {        
        this.progress += 10;
    }
}

myApp.controllers.controller('MainController', MainController);