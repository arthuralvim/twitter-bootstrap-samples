var chart = c3.generate({
    bindto: '#chart',
    data: {
        x: 'x',
        columns: [
            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06', '2013-01-07', '2013-01-08', '2013-01-09', '2013-01-10', '2013-01-11', '2013-01-12', '2013-01-13', '2013-01-14', '2013-01-15', '2013-01-16', '2013-01-17', '2013-01-18', '2013-01-19', '2013-01-20'],
            ['data1', 52, 55, 210, 178, 176, 193, 237, 176, 246, 77, 102, 39, 233, 121, 68, 39, 97, 246, 105, 173],
            ['data2', 160, 34, 83, 138, 185, 102, 96, 128, 174, 15, 250, 70, 190, 171, 202, 217, 188, 207, 40, 109],
            ['data3', 120, 93, 163, 239, 152, 229, 134, 23, 134, 99, 64, 153, 199, 158, 247, 60, 201, 132, 243, 34],
            ['data4', 249, 119, 42, 211, 178, 35, 37, 203, 247, 102, 241, 60, 240, 246, 235, 223, 219, 223, 131, 42]
        ],
        selection: {
            enabled: true,
            grouped: false,
            multiple: false
        },
        onclick: function (d, element) { console.log("onclick", d, element); },
        onselected: function (d, element) { console.log("onselected", d, element); },
        onunselected: function (d, element) { console.log("onunselected", d, element); },
        ondragstart: function () { console.log("ondragstart"); },
        ondragend: function () { console.log("ondragend"); },
        onenter: function (d) { console.log("onenter", d); },
        onleave: function (d) { console.log("onleave", d); }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    legend: {show: true, position: 'right'},
    subchart: {show: false },
    tooltip: {show: false },
    zoom: {enabled: false }
});

var chart_ = $('#chart'),
    container = chart_.parent();

function resize() {
    if ($(window).width() < 480) {
        chart.resize({height: 240, width:container.width()});
    }
    else if ($(window).width() > 480 &&  $(window).width() <= 768) {
        chart.resize({height: 330, width: container.width()});
    }
    else if ($(window).width() > 768 &&  $(window).width() <= 992) {
        chart.resize({height: 330, width: container.width()});
    }
    else if ($(window).width() > 992 &&  $(window).width() <= 1200) {
        chart.resize({height: 330, width: container.width()});
    }
    else  {
        chart.resize({height: 330, width: container.width()});
    }
}
$(document).ready(function() { resize(); });

$(window).on('resize', resize);
