import styled from "styled-components";
import Title from "../common/Title";
// import { Line } from "react-chartjs-2";
const DailyCumulativeReturn = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: [1, 2, 3, 4, 5]
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "rgb(255, 99, 132)",
        data: [1, 2, 3, 4, 5, 6],
        borderColor: "red",
        borderWidth: 2
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "rgb(75, 192, 192)",
        data: [1, 2, 3, 4, 5, 6]
      }
    ]
  };

  const options = {
    // 옵션 (1)
    responsive: false,
    // 옵션 (2)
    interaction: {
      mode: "index" as const,
      intersect: false
    },
    // 옵션 (3)
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: "#E3E3E3"
        }
      }
    }
  };
  return (
    <DailyCumulativeReturnContainer>
      <DailyCumulativeReturnBox>
        <Title size="T6" color="gray10">
          누적 수익률
        </Title>
        <ChartContainer>
          {/* <Line options={options} data={data} width="894px" height="320px" /> */}
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
const ChartContainer = styled.div``;

export default DailyCumulativeReturn;
