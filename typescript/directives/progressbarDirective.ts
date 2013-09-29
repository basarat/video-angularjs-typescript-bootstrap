///<reference path="../reference.ts"/>

myApp.directives.directive('progressbar', function (): ng.IDirective{
    return {
        restrict: 'EAC',
        scope: {
            click: "&",
            message: "@",
            progress: "="
        },
        template: progressbar.html
    }
});
