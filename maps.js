$(document).ready(function(){
	$.get('maps/nicaragua-data.json', function(data){
		var mapas = data;
		var keys = [{
				drilldown: 'chinandega',
                'hc-key': 'ni-ci',
                value: 0
            }, {
            	drilldown: 'leon',
                'hc-key': 'ni-le',
                value: 1
            }, {
            	drilldown: 'managua',
                'hc-key': 'ni-mn',
                value: 2
            }, {
            	drilldown: 'masaya',
                'hc-key': 'ni-ms',
                value: 3
            }, {
            	drilldown: 'carazo',
                'hc-key': 'ni-ca',
                value: 4
            }, {
            	drilldown: 'granada',
                'hc-key': 'ni-gr',
                value: 5
            }, {
            	drilldown: 'rio-san-juan',
                'hc-key': 'ni-6330',
                value: 6
            }, {
            	drilldown: 'rivas',
                'hc-key': 'ni-224',
                value: 7
            }, {
            	drilldown: 'chontales',
                'hc-key': 'ni-co',
                value: 8
            }, {
            	drilldown: 'boaco',
                'hc-key': 'ni-bo',
                value: 9
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
                value: 12
            }, {
            	drilldown: 'jinotega',
                'hc-key': 'ni-ji',
                value: 13
            }, {
            	drilldown: 'raan',
                'hc-key': 'ni-an',
                value: 14
            }, {
            	drilldown: 'raas',
                'hc-key': 'ni-as',
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
        		mapData: Highcharts.maps['countries/ni/ni-all'],
        		name: 'Nicaragua',
        		dataLables: {
        			enabled: true,
        			format: '{point.properties.postal-code}'
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
        });
	});
});