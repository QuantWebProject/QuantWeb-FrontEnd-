import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Chart.js에서 사용할 요소를 등록합니다.
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Value Investment Strategy - PBR vs Number of Stocks"
    },
    legend: {
      display: false // 범례 숨기기
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `종목 수: ${tooltipItem.raw}개`;
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "PBR"
      },
      ticks: {
        stepSize: 1,
        min: 0.1,
        max: 10
      },
      grid: {
        display: false
      },
      // 막대가 딱 붙어 보이도록 설정
      barPercentage: 1.0, // 막대 너비 비율
      categoryPercentage: 0.9 // 카테고리 너비 비율
    },
    y: {
      title: {
        display: true,
        text: "Number of Stocks"
      },
      beginAtZero: true
    }
  }
};

// PBR 값에 대한 라벨과 종목 수 데이터를 정의합니다.
const labels = [
  "0.1-1",
  "1-2",
  "2-3",
  "3-4",
  "4-5",
  "5-6",
  "6-7",
  "7-8",
  "8-9",
  "9-10"
];

export const data = {
  labels, // 라벨 추가
  datasets: [
    {
      label: "Number of Stocks",
      data: [5, 8, 12, 7, 6, 5, 4, 3, 2, 1], // PBR 구간에 대한 종목 수 데이터
      backgroundColor: "#7467FF", // 막대의 배경색
      borderColor: "#0038FF", // 막대의 테두리 색상
      borderWidth: 1 // 막대의 테두리 두께
    }
  ]
};

export default function ValueChart() {
  return (
    <div className="contentWrap">
      <div className="contentInner">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
