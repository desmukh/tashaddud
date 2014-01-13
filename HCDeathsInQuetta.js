$(function () {
	Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Arial'
            }
        }
    });
    $('#HCDeathsInQuetta').highcharts({
        chart: {
          
            backgroundColor: '#4c4c4c',   
        },
            title: {
                style: {
                color: '#FFF'},
                text: 'Number of Deaths in Sectarian Violence in Quetta',
                x: 0 //center
                
               
              
            },
			credits: {
                                enabled: false,
                                },
            xAxis: {
                categories: ['Jan02','Feb02','Mar02','Apr02','May02','Jun02','Jul02','Aug02','Sep02','Oct02','Nov02','Dec02','Jan03','Feb03','Mar03','Apr03','May03','Jun03','Jul03','Aug03','Sep03','Oct03','Nov03','Dec03','Jan04','Feb04','Mar04','Apr04','May04','Jun04','Jul04','Aug04','Sep04','Oct04','Nov04','Dec04','Jan05','Feb05','Mar05','Apr05','May05','Jun05','Jul05','Aug05','Sep05','Oct05','Nov05','Dec05','Jan06','Feb06','Mar06','Apr06','May06','Jun06','Jul06','Aug06','Sep06','Oct06','Nov06','Dec06','Jan07','Feb07','Mar07','Apr07','May07','Jun07','Jul07','Aug07','Sep07','Oct07','Nov07','Dec07','Jan08','Feb08','Mar08','Apr08','May08','Jun08','Jul08','Aug08','Sep08','Oct08','Nov08','Dec08','Jan09','Feb09','Mar09','Apr09','May09','Jun09','Jul09','Aug09','Sep09','Oct09','Nov09','Dec09','Jan10','Feb10','Mar10','Apr10','May10','Jun10','Jul10','Aug10','Sep10','Oct10','Nov10','Dec10','Jan11','Feb11','Mar11','Apr11','May11','Jun11','Jul11','Aug11','Sep11','Oct11','Nov11','Dec11','Jan12','Feb12','Mar12','Apr12','May12','Jun12','Jul12','Aug12','Sep12','Oct12','Nov12','Dec12','Jan13','Feb13','Mar13','Apr13','May13','Jun13','Jul13','Aug13','Sep13'],
					labels: {
						rotation: 90,
						step: 6,
						y: 22,
						style: {
							color: '#FFF'
							}
					},
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
                    text: 'Number of Deaths'
                },
                min: 0,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
        plotOptions: {
           series: {
               marker: {
                   radius: 0
               }
           }
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
                name: 'Number of Deaths',
                data: [0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
12, 
56, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
45, 
0, 
0, 
0, 
0, 
0, 
5, 
0, 
0, 
0, 
0, 
2, 
0, 
0, 
0, 
0, 
0, 
0, 
2, 
1, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
1, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
0, 
3, 
0, 
3, 
0, 
4, 
0, 
7, 
5, 
0, 
0, 
0, 
3, 
0, 
1, 
0, 
2, 
0, 
0, 
0, 
0, 
0, 
0, 
12, 
0, 
0, 
0, 
65, 
4, 
0, 
3, 
0, 
0, 
0, 
2, 
6, 
4, 
21, 
0, 
0, 
14, 
1, 
0, 
4, 
0, 
5, 
22, 
6, 
33, 
7, 
9, 
8, 
8, 
9, 
4, 
98, 
84, 
0, 
6, 
8, 
53, 
0, 
0],
                marker: {
                symbol: 'circle'
                    
            },
                color: '#7BF50E',
            }]
         });
    });
    
