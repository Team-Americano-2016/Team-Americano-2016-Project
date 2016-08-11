/**
 * Created by KaloyanIT on 8/5/2016.
 */

var bitCoinData;
$.getJSON("https://www.quandl.com/api/v3/datasets/BCHAIN/MWNUS.json?api_key=wMBMxVtkiGybBVFTHx2q", function (dataNew) {
    bitCoinData = dataNew;
    return bitCoinData;
});

//TODO: make up the labels of different charts!!!!!

function createChart(type) {
    var currentType = type.toString();
    require(['../scripts/libs/chartjs/chart.js'], function (Chart) {
        var $canvasContainer=$('#char-container').html('');  //clears the previous canvas
        $('<canvas id="myChart" width="400" height="250" />').appendTo($canvasContainer); //creates a new (clear) canvas
        let ctx = document.getElementById("myChart"),
            myChart = new Chart(ctx, {
                type: currentType,
                data: {
                    labels: [bitCoinData.dataset.data[0][0], bitCoinData.dataset.data[1][0], bitCoinData.dataset.data[2][0], bitCoinData.dataset.data[3][0], bitCoinData.dataset.data[4][0], bitCoinData.dataset.data[5][0]],
                    datasets: [{
                        label: 'Exchange rates for the Lithuanian Lita (LTL) to US Dollars (USD)',
                        data: [bitCoinData.dataset.data[0][1], bitCoinData.dataset.data[1][1], bitCoinData.dataset.data[2][1], bitCoinData.dataset.data[3][1], bitCoinData.dataset.data[4][1], bitCoinData.dataset.data[5][1]],
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
                        // backgroundColor: [
                        //     'rgba(255, 99, 132, 0.2)',
                        //     // 'rgba(54, 162, 235, 0.2)',
                        //     // 'rgba(255, 206, 86, 0.2)',
                        //     // 'rgba(75, 192, 192, 0.2)',
                        //     // 'rgba(153, 102, 255, 0.2)',
                        //     // 'rgba(255, 159, 64, 0.2)'
                        // ],
                        // borderColor: [
                        //     'rgba(255,99,132,1)',
                        //     // 'rgba(54, 162, 235, 1)',
                        //     // 'rgba(255, 206, 86, 1)',
                        //     // 'rgba(75, 192, 192, 1)',
                        //     // 'rgba(153, 102, 255, 1)',
                        //     // 'rgba(255, 159, 64, 1)'
                        // ],
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


//TODO: add a button which change the chart type
