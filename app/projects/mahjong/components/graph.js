import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const CHART_DATA = {
  totalRounds: 4,
  scores: [
    {
      label: "Player 1",
      data: [0, 5, 20, 14],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Player 2",
      data: [0, -5, -5, -5],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Player 3",
      data: [0, 0, -5, 1],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Player 4",
      data: [0, 0, -5, -5],
      borderColor: "rgb(255, 205, 86)",
      backgroundColor: "rgba(255, 205, 86, 0.5)",
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
}

const data = {
  labels: Array.from({ length: CHART_DATA.totalRounds }, (_, i) => i + 1),
  datasets: CHART_DATA.scores,
}

export default function Graph() {
  return <Line options={options} data={data} />
}
