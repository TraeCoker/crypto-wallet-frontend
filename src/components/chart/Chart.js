import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Span = daily. Click to toggle visibility.',
    },
  },
  scales: {
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
        beginAtZero: true,
        ticks: {
            callback: function(value) {
                return '$' + value;
            },
            
        }
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
        ticks: {
            autoSkip: true,
            maxTicksLimit: 7
        }
    },
  },

}


export function Chart() {
const data = useSelector(state => state.chart.chartData)
  return <Line options={options} data={data} />;
}
