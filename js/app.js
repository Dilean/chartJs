
var app = angular.module("app", ["chart.js"])

app.controller("mainController", ['$scope', function ($scope) {

    $scope.userNameSelected = "";
    $scope.userTypeSelected = "";
    $scope.chartSelected = "bar";
    $scope.startDataSelected;
    $scope.endDataSelected;

    //Chart
    $scope.nyChart;
    $scope.myChartConfig;

    //Filters
    $scope.filter_users = [];
    $scope.filter_types = [];
    $scope.filter_chart = [];

    //Info
    $scope.items = [];
    $scope.rangeData = [
        "04-01-2021",
        "04-02-2021",
        "04-03-2021",
        "04-04-2021",
        "04-05-2021",
        "04-06-2021",
        "04-07-2021",
        "04-08-2021",
        "04-09-2021",
        "04-10-2021",
    ];
    $scope.series = [];
    $scope.data = {
        labels: [],
        datasets: []
    };

    //Functions ===================================================================================
    //Init chart ======================================

    //Change chart
    $scope.changeChart = function (newType) {

        var ctx = document.getElementById("myChart").getContext("2d");

        // Remove the old chart and all its event handles
        if ($scope.myChart) {
            $scope.myChart.destroy();
        }
        var temp = jQuery.extend(true, {}, $scope.myChartConfig);
        temp.type = newType;

        $scope.myChart = new Chart(ctx, temp);
    };

    $scope.getColor = function (x) {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 1; i <= 6; i++) {
            color += letters[Math.floor(((x + i / 5) / 10) * 16)];
        }
        return color;
    };

    $scope.getDataFormat = function (dateString) {
        let date = new Date(dateString);
        let day = date.toLocaleString('default', { day: '2-digit' });
        let month = date.toLocaleString('default', { month: 'short' });
        return day + '/' + month
    }

    //Init chart
    $scope.initChart = function () {

        let ctx = document.getElementById("myChart").getContext("2d");

        $scope.myChartConfig = {
            type: $scope.chartSelected,
            data: $scope.data,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Chart'
                }
            }
        };

        $scope.myChart = new Chart(ctx, $scope.myChartConfig);

    };

    // Get itens
    $scope.getItems = function () {

        //Busca items
        $scope.items = [
            {
                id: 1,
                name: "User A",
                type: "admin",
                access: [
                    { data: "04-01-2021", total: 1 },
                    { data: "04-02-2021", total: 4 },
                    { data: "04-03-2021", total: 2 },
                    { data: "04-04-2021", total: 3 },
                    { data: "04-05-2021", total: 3 },
                    { data: "04-06-2021", total: 5 },
                    { data: "04-07-2021", total: 8 },
                    { data: "04-08-2021", total: 3 },
                    { data: "04-09-2021", total: 1 },
                    { data: "04-10-2021", total: 6 }
                ]
            },
            {
                id: 2,
                name: "User B",
                type: "admin",
                access: [
                    { data: "04-01-2021", total: 2 },
                    { data: "04-02-2021", total: 4 },
                    { data: "04-03-2021", total: 3 },
                    { data: "04-04-2021", total: 3 },
                    { data: "04-05-2021", total: 7 },
                    { data: "04-06-2021", total: 5 },
                    { data: "04-07-2021", total: 0 },
                    { data: "04-08-2021", total: 3 },
                    { data: "04-09-2021", total: 6 },
                    { data: "04-10-2021", total: 6 }
                ]
            },
            {
                id: 3,
                name: "User C",
                type: "admin",
                access: [
                    { data: "04-01-2021", total: 2 },
                    { data: "04-02-2021", total: 5 },
                    { data: "04-03-2021", total: 1 },
                    { data: "04-04-2021", total: 3 },
                    { data: "04-05-2021", total: 2 },
                    { data: "04-06-2021", total: 6 },
                    { data: "04-07-2021", total: 2 },
                    { data: "04-08-2021", total: 3 },
                    { data: "04-09-2021", total: 1 },
                    { data: "04-10-2021", total: 2 }
                ]
            },
            {
                id: 4,
                name: "User D",
                type: "client",
                access: [
                    { data: "04-01-2021", total: 1 },
                    { data: "04-02-2021", total: 1 },
                    { data: "04-03-2021", total: 2 },
                    { data: "04-04-2021", total: 3 },
                    { data: "04-05-2021", total: 3 },
                    { data: "04-06-2021", total: 4 },
                    { data: "04-07-2021", total: 0 },
                    { data: "04-08-2021", total: 3 },
                    { data: "04-09-2021", total: 2 },
                    { data: "04-10-2021", total: 1 }
                ]
            },
            {
                id: 5,
                name: "User E",
                type: "client",
                access: [
                    { data: "04-01-2021", total: 1 },
                    { data: "04-02-2021", total: 4 },
                    { data: "04-03-2021", total: 3 },
                    { data: "04-04-2021", total: 2 },
                    { data: "04-05-2021", total: 3 },
                    { data: "04-06-2021", total: 2 },
                    { data: "04-07-2021", total: 0 },
                    { data: "04-08-2021", total: 1 },
                    { data: "04-09-2021", total: 2 },
                    { data: "04-10-2021", total: 4 }
                ]
            }
        ];

        //Data
        $scope.data = {
            datasets: $scope.items.map(elem => {
                return {
                    label: elem.name,
                    data: elem.access.map(x => x.total),
                    fill: false,
                    borderColor: $scope.getColor(elem.id),
                    backgroundColor: $scope.getColor(elem.id)
                }
            }),
            labels: $scope.rangeData.map(data => $scope.getDataFormat(data))
        };

        //Init chart
        $scope.initChart();
    };
    $scope.getItems();

    //Init filters
    $scope.initFilters = function () {
        $scope.filter_users = $scope.items.map(x => ({ id: x.id, name: x.name }))
        $scope.filter_types = $.unique($scope.items.map(x => x.type));
        $scope.filter_chart = [
            { type: "bar" },
            { type: "line" }
        ]
    };
    $scope.initFilters();

    //Filter userName
    $scope.filter_userName = function () {

        let ctx = document.getElementById("myChart").getContext("2d");

        // Remove the old chart and all its event handles
        if ($scope.myChart) $scope.myChart.destroy();

        let temp = jQuery.extend(true, {}, $scope.myChartConfig);

        //Filtra datasets
        if ($scope.userNameSelected != "") {
            temp.data.datasets = $scope.items
                .filter(x => x.name == $scope.userNameSelected)
                .map(elem => {
                    return {
                        label: elem.name,
                        data: elem.access.map(x => x.total),
                        fill: false,
                        borderColor: $scope.getColor(elem.id),
                        backgroundColor: $scope.getColor(elem.id)
                    }
                })
        }

        $scope.myChart = new Chart(ctx, temp);
    };

    //Filter userType
    $scope.filter_userType = function () {
        let ctx = document.getElementById("myChart").getContext("2d");

        // Remove the old chart and all its event handles
        if ($scope.myChart) $scope.myChart.destroy();

        let temp = jQuery.extend(true, {}, $scope.myChartConfig);

        //Filtra datasets
        if ($scope.userTypeSelected != "") {
            temp.data.datasets = $scope.items
                .filter(x => x.type == $scope.userTypeSelected)
                .map(elem => {
                    return {
                        label: elem.name,
                        data: elem.access.map(x => x.total),
                        fill: false,
                        borderColor: $scope.getColor(elem.id),
                        backgroundColor: $scope.getColor(elem.id)
                    }
                })
        }

        $scope.myChart = new Chart(ctx, temp);
    };
    $scope.filter_userType();

    //Filter data
    $scope.filter_data = function (start, end) {

        let startDt = new Date(start);
        let endDt = new Date(end);

        let ctx = document.getElementById("myChart").getContext("2d");

        // Remove the old chart and all its event handles
        if ($scope.myChart) $scope.myChart.destroy();

        let temp = jQuery.extend(true, {}, $scope.myChartConfig);

        //Filtra datasets
        temp.data.datasets = $scope.items
            .map(elem => {
                return {
                    label: elem.name,
                    data: elem.access.filter(a => {
                        let currentDt = new Date(a.data);
                        if (currentDt >= startDt && currentDt <= endDt)
                            return a
                    }).map(x => x.total),
                    fill: false,
                    borderColor: $scope.getColor(elem.id),
                    backgroundColor: $scope.getColor(elem.id)
                }
            });
        temp.data.labels = $scope.rangeData.filter(dt => {
            let currentDt = new Date(dt);
            if (currentDt >= startDt && currentDt <= endDt)
                return dt
        }).map(dt => $scope.getDataFormat(dt));

        $scope.myChart = new Chart(ctx, temp);
    };

    //Filter chartType
    $scope.filter_chartType = function () {

        var chartType = $scope.chartSelected ?? "bar";
        $scope.changeChart(chartType);
    };

    //Init datapicker
    $scope.initDatapicker = function () {

        var dtPicker = $('input[name="daterange"]');
        dtPicker.val("04-01-2021 - 04-10-2021");

        dtPicker.daterangepicker({
            opens: 'left'
        }, function (start, end, label) {
            $scope.filter_data(start.format('MM-DD-YYYY'), end.format('MM-DD-YYYY'));
            // console.log("A new date selection was made: " + start.format('MM-DD-YYYY') + ' to ' + end.format('MM-DD-YYYY'));
        });
    };
    $scope.initDatapicker();

}]);