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
        beginAtZero: true,
        ticks: {
            callback: function(value) {
                return '$' + value;
            },
            
        }
    },
    x: {
        ticks: {
            autoSkip: true,
            maxTicksLimit: 7
        }
    },
  },

}


export function Chart() {
const data = useSelector(state => state.chart.chartData)
console.log(data)
  return <Line options={options} data={data} />;
}
