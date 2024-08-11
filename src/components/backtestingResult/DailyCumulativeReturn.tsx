import styled from "styled-components";
import Title from "../common/Title";
import DailyCumulativeReturnChart from "./DailyCumulativeReturnChart";
import theme from "@/style/theme";
const DailyCumulativeReturn = () => {
  const DailyCumulativeReturnChartData = [
    { date: "2020-01-01", return: 0 },
    { date: "2020-06-01", return: 5.12 },
    { date: "2021-01-01", return: 7.34 },
    { date: "2021-06-01", return: 10.45 },
    { date: "2022-01-01", return: 12.89 },
    { date: "2022-06-01", return: 15.23 }
  ];

  const US500 = [
    { date: "2020-01-01", return: 0 },
    { date: "2020-06-01", return: 4.12 },
    { date: "2021-01-01", return: 5.34 },
    { date: "2021-06-01", return: 11.45 },
    { date: "2022-01-01", return: 8.89 },
    { date: "2022-06-01", return: 12.23 }
  ];

  const xDailyCumulativeReturn = DailyCumulativeReturnChartData.map(
    (chartData) => chartData.date
  );
  const yDailyCumulativeReturn = DailyCumulativeReturnChartData.map(
    (chartData) => chartData.return
  );

  const yUS500 = US500.map((chartData) => chartData.return);
  const data = {
    labels: xDailyCumulativeReturn,
    datasets: [
      {
        type: "line",
        label: "내 투자",
        borderColor: theme.color.main,
        borderWidth: 4,

        fill: false,
        pointRadius: 0, // 기본 상태에서 포인트를 숨깁니다.
        pointHoverRadius: 6, // hover 시에 포인트를 나타나게 합니다.
        pointBackgroundColor: "rgba(0, 0, 0, 0)", // 기본 상태에서 포인트 배경을 투명하게 합니다.
        pointHoverBackgroundColor: theme.color.white, // hover 시에 포인트 배경을 투명하게 합니다.
        pointBorderColor: theme.color.sub5, // hover 시에 포인트 테두리 색상을 설정합니다.
        pointHoverBorderColor: theme.color.sub5, // hover 시에 포인트 테두리 색상을 설정합니다.
        pointHoverBorderWidth: 4, // hover 시에 포인트 테두리 두께를 설정합니다.
        data: yDailyCumulativeReturn
      },
      {
        type: "line",
        label: "U.S 500",
        borderColor: theme.color.gray5,
        borderWidth: 4,

        fill: false,
        pointRadius: 0, // 기본 상태에서 포인트를 숨깁니다.
        pointHoverRadius: 6, // hover 시에 포인트를 나타나게 합니다.
        pointBackgroundColor: "rgba(0, 0, 0, 0)", // 기본 상태에서 포인트 배경을 투명하게 합니다.
        pointHoverBackgroundColor: theme.color.white, // hover 시에 포인트 배경을 투명하게 합니다.
        pointBorderColor: theme.color.gray5, // hover 시에 포인트 테두리 색상을 설정합니다.
        pointHoverBorderColor: theme.color.gray5, // hover 시에 포인트 테두리 색상을 설정합니다.
        pointHoverBorderWidth: 4, // hover 시에 포인트 테두리 두께를 설정합니다.
        data: yUS500
      }
    ]
  };

  return (
    <DailyCumulativeReturnContainer>
      <DailyCumulativeReturnBox>
        <Title size="T6" color="gray10">
          누적 수익률
        </Title>
        <ChartContainer>
          <DailyCumulativeReturnChart data={data} />
        </ChartContainer>
      </DailyCumulativeReturnBox>
    </DailyCumulativeReturnContainer>
  );
};

const DailyCumulativeReturnContainer = styled.div``;
const DailyCumulativeReturnBox = styled.div`
  display: flex;
  width: 998px;
  padding: 28px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 18px;
  border: 1px solid #d7d7e3;
  background: #fff;
  box-shadow: 1px 2px 16px 0px rgba(0, 0, 0, 0.08);
`;
const ChartContainer = styled.div`
  display: flex;
  width: 943px;
  height: 360px;
`;

export default DailyCumulativeReturn;
