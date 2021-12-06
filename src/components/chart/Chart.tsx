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
import faker from 'faker';

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
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    y: {
        ticks: {
            callback: function(value) {
                return '$' + value;
            }
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export function Chart() {
const data = useSelector(state => state.chart.chartData)
  return <Line options={options} data={data} />;
}
