import styled from "styled-components";
import Title from "../common/Title";
import Tab from "./tab/Tab";
import { useState } from "react";
import DoughnutChart from "./chart/DoughnutChart";
import { ChartData, ChartOptions } from "chart.js";
import "./chart/chart.css";

const InvestmentSectors = () => {
  const [activeTab, setActiveTab] = useState("industry");

  const industryChartData = [
    { sector: "Technology", percentage: 40 },
    { sector: "Healthcare", percentage: 30 },
    { sector: "Finance", percentage: 20 },
    { sector: "Energy", percentage: 10 }
  ];
  const industryLabel = industryChartData.map((info) => info.sector);
  const industryData = industryChartData.map((info) => info.percentage);

  const getchartLabel = activeTab === "industry" ? industryLabel : ["asset"];
  const getchartData = activeTab === "industry" ? industryData : [30];

  const chartData: ChartData<"doughnut"> = {
    labels: getchartLabel,
    datasets: [
      {
        data: getchartData,
        backgroundColor: [
          "rgb(72, 98, 234)",
          "rgb(40, 140, 213)",
          "rgb(35, 180, 162)",
          "rgb(147, 213, 40)",
          "rgb(222, 165, 80)",
          "rgb(228, 191, 63)"
        ],
        borderColor: [
          "rgb(72, 98, 234)",
          "rgb(40, 140, 213)",
          "rgb(35, 180, 162)",
          "rgb(147, 213, 40)",
          "rgb(222, 165, 80)",
          "rgb(228, 191, 63)"
        ],
        borderWidth: 1,
        hoverOffset: 40
      }
    ]
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "50%",
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        usePointStyle: true,
        cornerRadius: 8,
        padding: {
          left: 16 + 12,
          top: 10,
          right: 16 + 12,
          bottom: 10
        },
        boxPadding: 12,
        caretSize: 0,
        bodyAlign: "center",
        xAlign: "center",
        yAlign: "center",
        bodyFont: {
          size: 16,
          weight: "normal",
          lineHeight: "150%",
          family: "Pretendard"
        },
        callbacks: {
          title: () => "",
          label: function (context) {
            return `${context.label}    ${context.raw}%`;
          },
          labelTextColor: function () {
            return "#FFFFFF";
          },
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              rotation: 0
            };
          }
        }
      }
    },
    hover: {
      mode: "nearest",
      intersect: true
    },

    radius: "100%",

    layout: {
      padding: {
        top: 60,
        bottom: 32
      }
    }
  };

  return (
    <InvestmentSectorsContainer>
      <TopContainer>
        <Title size="T3" color="gray10">
          투자 종목
        </Title>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </TopContainer>

      <DoughnutChart data={chartData} options={chartOptions} />

      <div className="custom-legend">
        {chartData.labels?.map((label, index) => {
          const value = chartData.datasets[0].data[index];
          const total = chartData.datasets[0].data.reduce(
            (acc, val) => acc + val,
            0
          );
          const percentage = ((value / total) * 100).toFixed(2);

          return (
            <div className="legend-item" key={index}>
              <span
                className="legend-color"
                style={{
                  backgroundColor: chartData.datasets[0].backgroundColor[index]
                }}
              ></span>
              <div className="legend-content">
                <span className="legend-label">{label as string}</span>
                <span className="legend-percentage">{percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </InvestmentSectorsContainer>
  );
};

const InvestmentSectorsContainer = styled.div`
  display: flex;
  width: 474px;
  padding: 28px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 18px;
  border: 1px solid #d7d7e3;
  background: #fff;
  box-shadow: 1px 2px 16px 0px rgba(0, 0, 0, 0.08);
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export default InvestmentSectors;
