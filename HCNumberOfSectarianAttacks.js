$(function () {
	Highcharts.setOptions({
			chart: {
				style: {
					fontFamily: 'Arial'
				}
			}
		});
    $('#HCNumberOfSectarianAttacks').highcharts({
        chart: {
            backgroundColor: '#4c4c4c',   
        },
            title: {
                style: {
                color: '#FFF'},
                text: 'Number of Sectarian Attacks',
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
                labels: {
					style: {
						color: '#fff'
						}
					},
                title: {
                    style: {
                color: '#FFF'},
                    text: 'Number of Attacks'
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
                name: 'Total Number of Attacks',
                data: [34, 16, 20, 14, 8, 29, 23, 40, 57, 43, 176, 116],
                marker: {
                symbol: 'circle'
            },
                color: '#7BF50E',
            }, {
                name: 'Attacks by suspected Sunni militant groups',
                data: [27, 13, 12, 9, 7, 24, 21, 32, 37, 33, 141, 93],
                marker: {
                symbol: 'circle'
            },
                color: '#F40E58',
            }, {
                name: 'Attacks by suspected Shia militant groups',
                data: [3, 2, 6, 2, 0, 5, 1, 8, 20, 10, 35, 23],
                marker: {
                symbol: 'circle'
            },
                color: '#6E20E1',
            }]
        });
    });
    
