var app = angular.module("Charts", ["chart.js"])

app.controller("ChartCtrl", ['$scope', '$timeout', function ($scope, $timeout) {
    'use strict';

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
    $scope.labels = ["01/Jan", "02/Jan", "03/Jan", "04/Jan", "05/Jan", "06/Jan", "07/Jan", "08/Jan", "09/Jan", "10/Jan"];
    $scope.series = ['User A', 'User B'];
    $scope.data = [
        [6, 5, 8, 8, 5, 5, 4, 0, 3, 9],
        [2, 4, 4, 1, 8, 2, 9, 1, 1, 5]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    // Simulate async data update
    $timeout(function () {
        $scope.data = [
            [2, 4, 4, 1, 8, 2, 9, 3, 8, 6],
            [6, 5, 8, 8, 5, 5, 4, 0, 2, 7]
        ];
    }, 3000);
}]);

app.controller('OverrideCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    'use strict';

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
    $scope.labels = ["01/Jan", "02/Jan", "03/Jan", "04/Jan", "05/Jan", "06/Jan", "07/Jan", "08/Jan", "09/Jan", "10/Jan"];
    $scope.data = [
        [6, 5, 8, 8, 5, 5, 4, 0, 3, 9],
        [2, 4, 4, 1, 8, 2, 9, 1, 1, 5]
    ];
    $scope.datasetOverride = [
        {
            label: 'User A',
            borderWidth: 1,
            type: 'bar'
        },
        {
            label: 'User B',
            borderWidth: 3,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            type: 'line'
        }
    ];
    // Simulate async data update
    $timeout(function () {
        $scope.data = [
            [2, 4, 4, 1, 8, 2, 9, 3, 8, 6],
            [6, 5, 8, 8, 5, 5, 4, 0, 2, 7]
        ];
    }, 3000);
}]);

app.controller('StackedBarCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    'use strict'

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
    $scope.labels = ["01/Jan", "02/Jan", "03/Jan", "04/Jan", "05/Jan", "06/Jan", "07/Jan", "08/Jan", "09/Jan", "10/Jan"];
    $scope.type = 'StackedBar';
    $scope.series = ['User A', 'User B'];
    $scope.options = {
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

    $scope.data = [
        [6, 5, 8, 8, 5, 5, 4, 0, 3, 9],
        [2, 4, 4, 1, 8, 2, 9, 1, 1, 5]
    ];

    // Simulate async data update
    $timeout(function () {
        $scope.data = [
            [2, 4, 4, 1, 8, 2, 9, 3, 8, 6],
            [6, 5, 8, 8, 5, 5, 4, 0, 2, 7]
        ];
    }, 3000);
}]);