import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './ProfileRadar.css';

const ProfileRadarChart: React.FC = () => {
    const chartRef = useRef<any>(null);

    useEffect(() => {
        Chart.register(ChartDataLabels);

        const data = {
            labels: ['', '', '', '', '', '', '', ''],
            datasets: [
                {
                    label: '',
                    data: [4.7, 4.3, 4.9, 5, 4.6, 4.8, 4.6, 5],
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
                    backgroundColor: (context: any) => {
                        // Veri noktasının değerine bağlı olarak renk belirle
                        if (context.dataset.data[context.dataIndex] >= 4.7) {
                            return 'rgb(133, 160, 169)';
                        }
                        if (context.dataset.data[context.dataIndex] >= 4.0 && context.dataset.data[context.dataIndex] <= 4.7) {
                            return 'rgb(226, 136, 182)';
                        }
                    },
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
        <div className="profile-radar-container">
            <ProfileRadarChart />
            <div className='profile-radar-labels'>
                <div className="radar-labels">
                    <div className="label">
                        <span className="legend legend8">4.7</span>
                        <span className="legendName">Yeni dünyaya hazırlanıyorum</span>
                    </div>
                    <div className="label">
                        <span className="legend legend7">4.3</span>
                        <span className="legendName">Profesyonel duruşumu geliştiriyorum</span>
                    </div>
                    <div className="label">
                        <span className="legend legend1">4.9</span>
                        <span className="legendName">Kendimi tanıyor ve yönetiyorum</span>
                    </div>
                    <div className="label">
                        <span className="legend legend5">4.5</span>
                        <span className="legendName">Yaratıcı ve doğru çözümler geliştiriyorum</span>
                    </div>
                    <div className="label">
                        <span className="legend legend2">4.6</span>
                        <span className="legendName">Kendimi sürekli geliştiriyorum</span>
                    </div>
                    <div className="label">
                        <span className="legend legend4">4.8</span>
                        <span className="legendName">Başkaları ile birlikte çalışıyorum</span>
                    </div>
                    <div className="label">
                        <span className="legend legend6">4.6</span>
                        <span className="legendName">Sonuç ve başarı odaklıyım</span>
                    </div>
                    <div className="label">
                        <span className="legend legend3">5</span>
                        <span className="legendName">Anlıyorum ve anlaşılıyorum</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileRadar;
