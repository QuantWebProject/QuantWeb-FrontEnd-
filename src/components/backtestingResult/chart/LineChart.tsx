import styled from "styled-components";
import theme from "@/style/theme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

//TODO: data 타입으로 수정 혹은 제거
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      line: {
        pointRadius: 0 // disable for all `'line'` datasets
      }
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const options: any = {
  spanGaps: true, // 데이터가 중간중간 없을 때 이어 그릴지의 여부.
  grouped: true, // x축 값이 같은 것끼리 묶일지의 여부. (주로 Line Chart 에서)
  responsive: true, // canvas 의 반응형 여부
  interaction: {
    // intersect: false, // 데이터 점과 상관없이 수직선을 표시
    mode: "index" as const, // - 같은 선상(index) 에 있는 값들 툴팁 다 보여줌
    // mode: 'point' as const, //- 특정 지점에 마우스를 호버하였을 때, 해당 툴팁 보여줌
    axis: "x" as const // mode 가 index 일 때, 같은 선상이 x축인지 y축인지
  },

  plugins: {
    legend: {
      // https://www.chartjs.org/docs/latest/configuration/legend.html
      display: true, // legend 표시 여부
      // position: 'top'|'left'|'bottom'|'right', // 범례의 위치
      // align: 'start' | 'center' | 'end', // 범례의 정렬
      labels: {
        // labels 에 대한 스타일링
        padding: 10,
        boxWidth: 13,
        color: "#000",
        font: {
          family: "Noto Sans KR",
          lineHeight: 2
        }
      }
    },
    tooltip: {
      enabled: true, // 툴팁 활성화
      gap: 16,
      padding: 32,
      backgroundColor: theme.color.gray9,
      titleFont: {
        size: 16,
        weight: 400,
        family: "Pretendard"
      },
      bodyFont: {
        size: 18,
        weight: 500,
        family: "Pretendard"
      },
      footerFont: {
        size: 12,
        style: "italic",
        family: "Pretendard"
      },
      usePointStyle: true,
      // external: function (context: any) {
      //   // 툴팁 커스텀 플러그인
      //   const { chart, tooltip } = context;
      //   const canvas = chart.canvas;
      //   const ctx = chart.ctx;
      //   const x = tooltip.caretX;
      //   const topY = chart.scales.y.top;
      //   const bottomY = chart.scales.y.bottom;

      //   if (tooltip.opacity === 0) {
      //     // 툴팁이 보이지 않을 때, 이전에 그린 선을 지움
      //     chart.draw();
      //     return;
      //   }

      //   // 차트 영역을 다시 그림
      //   chart.draw();

      //   // 점선 스타일 설정
      //   ctx.save();
      //   ctx.setLineDash([5, 5]); // 점선 패턴: [선 길이, 공백 길이]
      //   ctx.beginPath();
      //   ctx.moveTo(x, topY);
      //   ctx.lineTo(x, bottomY);
      //   ctx.lineWidth = 1;
      //   ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      //   ctx.stroke();
      //   ctx.restore();
      // },
      // https://www.chartjs.org/docs/latest/configuration/tooltip.html
      reverse: false, // 반대로 보일건지 여부
      caretPadding: 10,
      caretSize: 0,
      font: {
        size: "18px",
        family: "'Noto Sans KR', sans-serif" as const,
        color: "#000" as const
      },

      titleMarginBottom: 10,
      titleSpacing: 10,
      bodySpacing: 10,
      filter: (item: { parsed: any }) => item.parsed.y !== null,
      // 툴팁에 보여질 데이터를 필터링해줌. 위 코드는 null 인 값은 보이지 않게 함
      // usePointStyle: false, //true 로 하면 다른 모양으로 스타일을 설정할 수 있는데, 플러그인 등록
      callbacks: {
        labelPointStyle: function (context: any) {
          return {
            pointStyle: "circle",
            radius: 2,
            rotation: 0
          };
        },

        // 툴팁에 표시되는 내용 콜백함수
        // context.parsed.y 은 y 축 값, context.dataset.label는 표시되는 label
        label: (context: any) => {
          if (context.parsed.y === 0) {
            return " " + context.dataset.label + " -건";
          }
          return "  " + context.dataset.label + "  " + context.parsed.y;
        }
      },
      events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"] // 이벤트 발생 여부에 대해서. 컨트롤 가능
    }
  },
  scales: {
    //https://www.chartjs.org/docs/latest/axes/styling.html - [scaleId] 가 x 또는 y
    x: {
      axis: "x",
      display: true,

      grid: {
        drawOnChartArea: false, // 차트 영역 내에서는 눈금선을 그리지 않음
        drawTicks: true, // 눈금선을 그림
        color: theme.color.gray5, // 눈금선 색상 설정
        lineWidth: 1 // 그리드 굵기
      },
      afterDataLimits: (scale: { max: number }) => {
        scale.max = scale.max * 1;
        // 정해진 범위만큼 보일건지, 그 이상으로 넓혀지게 보일건지
      },

      title: {
        // 그리드 축에 대한 styles
        display: false,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300
        },
        text: "건수",
        padding: {
          top: 10,
          bottom: 10
        }
      },
      ticks: {
        display: false
        // stepSize: getStepSize(min, max), // 축에 표시될 값들에 대한 간격 설정
      }
    },
    y: {
      ticks: {
        callback: function (value: string) {
          return value + "%";
        }
      }
    }
  }
};
type Props = {
  data: typeof data;
  options?: typeof options;
};
const LineChart = (props: Props) => {
  return (
    <ChartContainer>
      <Line data={props.data} options={options} />
    </ChartContainer>
  );
};
const ChartContainer = styled.div`
  display: flex;
  width: 943px;
  height: 360px;
`;
export default LineChart;
