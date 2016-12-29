$(document).ready(function(){

    var test = Highcharts.maps.nicaragua;
    $.each(test, function(i){
        this.drilldown = this.key;
        this.value = i;
    });
    console.log(test);

    Highcharts.mapChart('nicaragua', {
        chart: {
            events: {
                drilldown: function(e){
                    if (!e.seriesOptions){
                        var chart = this;
                        mapkey = 'maps/' + e.point.drilldown;
                        $.get(mapkey + '.json', function(data) {

                            $.each(data, function (i) {
                                this.value = i;
                            });
                            
                            chart.addSeriesAsDrilldown(e.point, {
                                name: e.point.name,
                                data: data.data,
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            });
                            console.log(data);
                        });
                    }
                }
            }
        },
        title: {
            text: 'Mapa de Nicaragua'
        },

        subtitle: {
            text: 'NIC',
            floating: true,
            align: 'right',
            y: 50,
            style: {
                fontSize: '16px'
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#99DAFF',
            maxColor: '#569CC4'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },
        series: [{
            data: test,
            name: 'NIC',
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textOutline: '1px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });

	
});