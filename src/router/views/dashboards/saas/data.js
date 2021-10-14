const salesAnalyticsDonutChart = {
    series: [56, 38, 26],
    chartOptions: {
        chart: {
            type: 'donut',
            height: 240,
        },
        labels: ['Series A', 'Series B', 'Series C'],
        colors: ['#556ee6', '#34c38f', '#f46a6a'],
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                }
            }
        }
    }
};

const ChatData = [
    {
        id: 1,
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00',
    },
    {
        id: 2,
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        id: 3,
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        id: 4,
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        id: 5,
        align: 'right',
        name: 'Henry Wells',
        message: "Wow that's great",
        time: '10:02'
    },
]

export { salesAnalyticsDonutChart, ChatData };
