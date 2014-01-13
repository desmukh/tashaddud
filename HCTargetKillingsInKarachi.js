$(function () {
	Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Arial'
            }
        }
    });
    $('#HCTargetKillingsInKarachi').highcharts({
        chart: {
            backgroundColor: '#4c4c4c',   
        },
            title: {
                style: {
                color: '#FFF'},
                text: 'Sectarian Target Killings in Karachi',
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
            series: [ {
                name: 'Attacks by suspected Sunni militant groups',
                data: [26, 
1, 
2, 
1, 
0, 
1, 
2, 
2, 
21, 
13, 
79, 
71],
                marker: {
                symbol: 'circle'
            },
                color: '#F40E58',
            }, {
                name: 'Attacks by suspected Shia militant groups',
                data: [3, 
8, 
12, 
4, 
0, 
1, 
1, 
7, 
26, 
9, 
65, 
24],
                marker: {
                symbol: 'circle'
            },
                color: '#6E20E1',
            }]
        });
    });
    
