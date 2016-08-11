
var currdata={
    "dataset":{
        "id":14686250,
        "dataset_code":"EURBGN",
        "database_code":"ECB",
        "name":"EUR vs BGN Foreign Exchange Reference Rate",
        "description":"Euro (EUR) vs. Bulgarian Lev (BGN) reference exchange rate. Foreign exchange reference rates are published by the European Central Bank.  Reference rates are usually updated by 3:00pm CET, based on a regular daily concertation procedure between various central banks across Europe and around the world.  This procedure normally takes place at 2:15pm CET.  Reference rates are mid-market rates, calculated as averages of the buying and selling rate; they do not necessarily reflect actual transaction rates.  Euro foreign exchange reference rates are always quoted using the 'certain' method (i.e EUR 1 = X foreign currency units, where X is the published reference rate).",
        "refreshed_at":"2016-08-10T23:19:25.227Z",
        "newest_available_date":"2016-08-10",
        "oldest_available_date":"2000-07-19",
        "column_names":["Date","Value"],
        "frequency":"daily",
        "type":"Time Series",
        "premium":false,
        "limit":null,
        "transform":null,
        "column_index":null,
        "start_date":"2002-02-17",
        "end_date":"2002-07-18",
        "data":[["2002-07-18",1.9485],["2002-07-17",1.9462],["2002-07-16",1.9463],["2002-07-15",1.9466],["2002-07-12",1.9462],["2002-07-11",1.9461],["2002-07-10",1.9461],["2002-07-09",1.9461],["2002-07-08",1.947],["2002-07-05",1.9473],["2002-07-04",1.9485],["2002-07-03",1.9512],["2002-07-02",1.9509],["2002-07-01",1.951],["2002-06-28",1.9517],["2002-06-27",1.9484],["2002-06-26",1.9462],["2002-06-25",1.9461],["2002-06-24",1.9463],["2002-06-21",1.9466],["2002-06-20",1.9464],["2002-06-19",1.9468],["2002-06-18",1.9464],["2002-06-17",1.9462],["2002-06-14",1.9478],["2002-06-13",1.9472],["2002-06-12",1.9493],["2002-06-11",1.9505],["2002-06-10",1.9513],["2002-06-07",1.9524],["2002-06-06",1.9517],["2002-06-05",1.9521],["2002-06-04",1.953],["2002-06-03",1.9503],["2002-05-31",1.9521],["2002-05-30",1.9535],["2002-05-29",1.9535],["2002-05-28",1.9533],["2002-05-27",1.9527],["2002-05-24",1.9528],["2002-05-23",1.953],["2002-05-22",1.9533],["2002-05-21",1.9533],["2002-05-20",1.9528],["2002-05-17",1.9524],["2002-05-16",1.9521],["2002-05-15",1.9491],["2002-05-14",1.9512],["2002-05-13",1.9519],["2002-05-10",1.9525],["2002-05-09",1.9512],["2002-05-08",1.9514],["2002-05-07",1.9515],["2002-05-06",1.9515],["2002-05-03",1.9514],["2002-05-02",1.9515],["2002-04-30",1.9513],["2002-04-29",1.951],["2002-04-26",1.9504],["2002-04-25",1.949],["2002-04-24",1.9504],["2002-04-23",1.9504],["2002-04-22",1.9502],["2002-04-19",1.9495],["2002-04-18",1.9484],["2002-04-17",1.9477],["2002-04-16",1.947],["2002-04-15",1.9477],["2002-04-12",1.9484],["2002-04-11",1.9487],["2002-04-10",1.9498],["2002-04-09",1.9498],["2002-04-08",1.9507],["2002-04-05",1.952],["2002-04-04",1.9521],["2002-04-03",1.952],["2002-04-02",1.951],["2002-03-28",1.9504],["2002-03-27",1.9503],["2002-03-26",1.951],["2002-03-25",1.9515],["2002-03-22",1.9512],["2002-03-21",1.9505],["2002-03-20",1.9503],["2002-03-19",1.9497],["2002-03-18",1.9489],["2002-03-15",1.9489],["2002-03-14",1.9487],["2002-03-13",1.9485],["2002-03-12",1.9486],["2002-03-11",1.9488],["2002-03-08",1.9488],["2002-03-07",1.9487],["2002-03-06",1.9484],["2002-03-05",1.9484],["2002-03-04",1.9481],["2002-03-01",1.948],["2002-02-28",1.948],["2002-02-27",1.949],["2002-02-26",1.9485],["2002-02-25",1.9486],["2002-02-22",1.9485],["2002-02-21",1.9485],["2002-02-20",1.9479],["2002-02-19",1.9476],["2002-02-18",1.9476]],
        "collapse":null,
        "order":null,
        "database_id":8917}};

function createChart(type) {
    var currentType = type.toString();
    require(['../scripts/libs/chartjs/chart.js'], function (Chart) {
        var $canvasContainer=$('#char-container').html('');  //clears the previous canvas
        $('<canvas id="myChart" width="400" height="250" />').appendTo($canvasContainer); //creates a new (clear) canvas
        let ctx = document.getElementById("myChart"),
            myChart = new Chart(ctx, {
                type: currentType,
                data: {
                    labels:[currdata.dataset.data[0][0],currdata.dataset.data[1][0],currdata.dataset.data[2][0],currdata.dataset.data[3][0],currdata.dataset.data[4][0],currdata.dataset.data[5][0],currdata.dataset.data[6][0],currdata.dataset.data[7][0],currdata.dataset.data[8][0],currdata.dataset.data[9][0],currdata.dataset.data[10][0]],
                    datasets: [{
                        label: 'Exchange rates for the Bulgarian Lev (BGN) to Euro (EUR)',
                        data: [[0][1],currdata.dataset.data[1][1],currdata.dataset.data[2][1],currdata.dataset.data[3][1],currdata.dataset.data[4][1],currdata.dataset.data[5][1],currdata.dataset.data[6][1],currdata.dataset.data[7][1],currdata.dataset.data[8][1],currdata.dataset.data[9][1],currdata.dataset.data[10][1]],
                        fill: false,
                        lineTension: 0.1,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 3,
                        pointHitRadius: 10,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderWidth: 1,
                        spanGaps: false,
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    }
                }
            });

    });

}







//chart type change - added by Ivaylo Iliev; TODO: needs a bug fix for proper visualuzation of the chart
var lineChart = document.getElementById("line-ch"),
    barChart = document.getElementById("bar-ch"),
    polarChart = document.getElementById("polar-ch");

lineChart.addEventListener("click", function () {
    createChart('line');
}, false);

barChart.addEventListener("click", function () {
    createChart('bar');
}, false);

polarChart.addEventListener("click", function () {
    createChart('polarArea');
}, false);
//end of chart type change

createChart('line');
