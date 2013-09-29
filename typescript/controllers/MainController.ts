///<reference path="../reference.ts"/>

class MainController {
    progress = 0;

    constructor($scope) {
        $scope.vm = this;
    }

    increaseProgress() {
        this.progress += 10;
    }
}
