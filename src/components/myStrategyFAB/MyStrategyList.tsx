import { IAllStrategy } from "@/models/backtesting";
import { useState } from "react";
import styled from "styled-components";
import Title from "../common/Title";
import Body from "../common/Body";
import MyStrategyListItem from "./MyStrategyListItem";
import XButton from "../modal/XButton";

const MyStrategyList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [myStrategyList, setMyStrategyList] = useState<IAllStrategy[]>([
    {
      name: "PBR값 돌린거",
      isSubscribed: false
    },
    {
      name: "PBR값 돌린거랑 기술분석전",
      isSubscribed: true
    },
    {
      name: "이동평균모멘텀전략",
      isSubscribed: true
    },
    {
      name: "PBR값 돌린거랑 기술분석전",
      isSubscribed: false
    },
    {
      name: "PBR값 돌린거랑 기술분석전",
      isSubscribed: false
    },
    {
      name: "PBR값 돌린거랑 기술분석전",
      isSubscribed: true
    },
    {
      name: "PBR값 돌린거랑 기술분석전",
      isSubscribed: true
    }
  ]);

  const handleClose = () => setIsOpen(false);
  const handleItemClick = (index: number) => setCurrentIndex(index);
  return (
    <MyStrategyListStyle>
      <FABHeader>
        <Title size="T6" color="gray10">
          내 전략 <b>{myStrategyList.length}</b>
        </Title>
        <XButton onClose={handleClose} />
      </FABHeader>

      <div className="body">
        {myStrategyList.length === 0 && (
          <div className="empty">
            <Body color="#B0B0BF" size="B2">
              아직 저장된 전략이 없어요!
            </Body>
          </div>
        )}

        {myStrategyList.length > 0 && (
          <ul>
            {myStrategyList.map((strategy, index) => (
              <li key={index} onClick={() => handleItemClick(index)}>
                <MyStrategyListItem
                  isActive={currentIndex === index}
                  name={strategy.name}
                  isSubscribed={strategy.isSubscribed}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </MyStrategyListStyle>
  );
};

export const FABHeader = styled.div`
  display: flex;
  align-items: center;
  height: 3.75rem;
  padding: 0 1.375rem;
  border-bottom: 0.8px solid ${({ theme }) => theme.color.gray3};

  b {
    color: ${({ theme }) => theme.color.main};
  }

  button {
    margin-left: auto;
  }
`;

const MyStrategyListStyle = styled.div`
  width: 412px;
  height: 448px;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  background-color: #fff;

  .body {
    height: calc(100% - 3.75rem);
    overflow: auto;

    .empty {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      cursor: pointer;
      li {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

        &:hover {
          background-color: ${({ theme }) => theme.color.gray2};
        }
      }
    }
  }
`;

export default MyStrategyList;
