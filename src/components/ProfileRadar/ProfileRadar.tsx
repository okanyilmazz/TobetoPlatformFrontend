import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const ProfileRadarChart: React.FC = () => {
    const chartRef = useRef<any>(null);

    useEffect(() => {
        Chart.register(ChartDataLabels);

        const data = {
            labels: ['', '', '', '', '', '', '', ''],
            datasets: [
                {
                    label: '',
                    data: [5, 5, 5, 5, 5, 5, 5, 5],
                },
            ],
        };

        const options = {
            scales: {
                r: {
                    beginAtZero: true,
                    suggestedMax: 1,
                    ticks: {
                        stepSize: 1,
                        minTicksLimit: 11,
                        maxTicksLimit: 11,
                        display: false,
                    },
                    angleLines: {
                        display: true,
                        drawBorder: false,
                    },
                    grid: {
                        circular: true,
                    },
                },
            },
            elements: {
                line: {
                    borderWidth: 2,
                    borderColor: 'rgb(204, 204, 204)',
                    fill: true,
                },
                point: {
                    radius: 6,
                    backgroundColor: 'rgb(133, 160, 169)',
                },
            },
            responsive: true,
            maintainAspectRatio: true,
            tooltips: false,
            plugins: {
                legend: {
                    display: false, //Buton on-off
                },
                datalabels: {
                    formatter: (value: any, context: any) => {
                        return context.chart.data.labels[context.dataIndex];
                    },
                    color: (context: any) => {
                        return context.hovered ? 'white' : context.dataset.borderColor;
                    },
                    listeners: {
                        enter: (context: any) => {
                            context.hovered = true;
                            return true;
                        },
                        leave: (context: any) => {
                            context.hovered = false;
                            return true;
                        },
                    },
                },
            },
        };

        const ctx = document.getElementById('chart') as HTMLCanvasElement | null;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        if (ctx) {
            chartRef.current = new Chart(ctx, {
                type: 'radar',
                data: data,
                options: options,
            });
        }
    }, []);

    return (
        <div>
            <canvas id="chart" />
        </div>
    );
};

const ProfileRadar: React.FC = () => {
    return (
        <div>
            <ProfileRadarChart />
        </div>
    );
};

export default ProfileRadar;
