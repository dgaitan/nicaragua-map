$(document).ready(function(){
	$.get('maps/nicaragua-data.json', function(data){
		var mapas = data;
		var keys = [{
				drilldown: 'chinandega',
                'hc-key': 'ni-ci',
                value: 10
            }, {
            	drilldown: 'leon',
                'hc-key': 'ni-le',
                value: 50
            }, {
            	drilldown: 'managua',
                'hc-key': 'ni-mn',
                value: 25
            }, {
            	drilldown: 'masaya',
                'hc-key': 'ni-ms',
                value: 70
            }, {
            	drilldown: 'carazo',
                'hc-key': 'ni-ca',
                value: 40
            }, {
            	drilldown: 'granada',
                'hc-key': 'ni-gr',
                value: 10
            }, {
            	drilldown: 'rio-san-juan',
                'hc-key': 'ni-rio',
                value: 60
            }, {
            	drilldown: 'rivas',
                'hc-key': 'ni-rivas',
                value: 70
            }, {
            	drilldown: 'chontales',
                'hc-key': 'ni-co',
                value: 80
            }, {
            	drilldown: 'boaco',
                'hc-key': 'ni-bo',
                value: 90
            }, {
            	drilldown: 'matagalpa',
                'hc-key': 'ni-mt',
                value: 10
            }, {
            	drilldown: 'esteli',
                'hc-key': 'ni-es',
                value: 11
            }, {
            	drilldown: 'nueva-segovia',
                'hc-key': 'ni-ns',
                value: 20
            }, {
            	drilldown: 'jinotega',
                'hc-key': 'ni-ji',
                value: 30
            }, {
            	drilldown: 'raan',
                'hc-key': 'ni-raan',
                value: 90
            }, {
            	drilldown: 'raas',
                'hc-key': 'ni-raas',
                value: 15
            }, {
            	drilldown: 'madriz',
                'hc-key': 'ni-md',
                value: 17
            }];

        $('#nicaragua').highcharts('Map', {
        	series: [{
        		data: keys,
        		joinBy: 'hc-key',
        		//mapData: Highcharts.maps['countries/ni/ni-all'],
        		mapData: Highcharts.maps.nicaragua,
                name: 'Nicaragua',
        		dataLables: {
        			enabled: true,
        			format: '{this.data.name}'
        		}
        	}],
        	drilldown: {
        		series: mapas,
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
        	},
        	title: {
        		text: 'Nicaragua'
        	},
        	legend: false,
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
        					color: '#0DDEF2'
        				}
        			}
        		}
        	},
            colorAxis: {
                min: 0,
                minColor: '#99DAFF',
                maxColor: '#569CC4'
            },
        });
	});
});