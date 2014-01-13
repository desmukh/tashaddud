$(function () {
	Highcharts.setOptions({
			chart: {
				style: {
					fontFamily: 'Arial'
				}
			}
		});
    $('#HCDeathsInSectarianAttacks').highcharts({
        chart: {
            backgroundColor: '#4c4c4c',   
        },
            title: {
                style: {
                color: '#FFF'},
                text: 'Deaths in Sectarian Attacks',
                x: 0 //center
                
            },
			credits: {
                                enabled: false,
                                },
            xAxis: {
                
                categories: ['2002', '2003', '2004', '2005', '2006', '2007','2008', '2009', '2010', '2011', '2012', '2013'],
                labels: {
					style: {
						color: '#fff'
						}
					}
            },
            yAxis: {
               
                title: {
                    style: {
                color: '#FFF'},
                    text: 'Number of Deaths'
                },
				labels: {
					style: {
						color: '#fff'
						}
					},
                min: 0,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                
            },
            legend: {
                layout: 'vertical',
                align: 'bottom',
                verticalAlign: 'bottom',
                borderWidth: 0,
                itemStyle: {color: '#FFF'}
                
            },
            series: [{
                name: 'Total Deaths',
                data: [66, 101, 198, 64, 123, 207, 556, 183, 240, 211, 499, 534],
                marker: {
                symbol: 'circle'
            },
                color: '#7BF50E',
            }, {
                name: 'Deaths in attacks by suspected Sunni militant groups',
                data: [63, 94, 144, 37, 100, 37, 137, 171, 214, 198, 394, 503],
                marker: {
                symbol: 'circle'
            },
                color: '#F40E58',
            }, {
                name: 'Deaths in attacks by suspected Shia militant groups',
                data: [3, 7, 52, 4, 0, 4, 1, 11, 26, 12, 81, 25],
                marker: {
                symbol: 'circle'
            },
                color: '#6E20E1',
            }]
        });
    });
    
