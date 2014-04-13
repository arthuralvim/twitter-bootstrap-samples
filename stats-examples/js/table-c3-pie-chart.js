var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 52],
            ['data2', 160],
            ['data3', 120],
            ['data4', 249]
        ],
        type : 'pie',
        names: {
            data1: 'Name 1',
            data2: 'Name 2',
            data3: 'Name 3',
            data4: 'Name 4'
        },
    },
    pie: {
        onclick: function (d, i) { console.log(d, i); },
        onmouseover: function (d, i) { console.log(d, i); },
        onmouseout: function (d, i) { console.log(d, i); }
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
