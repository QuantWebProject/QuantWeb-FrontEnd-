import MyStategySVG from "@/assets/images/myStrategy.svg?react";
import styled from "styled-components";
import XButtonSVG from "@/assets/images/xIcon.svg?react";
import Button from "./Button";
import NotificationBadge from "./NotificationBadge";

type schema = "myStrategy" | "loadStrategy" | "x" | "addSignal";
interface Props {
  schema: schema;
  count?: number;
}
const MyStategyButton = ({ schema, count }: Props) => {
  return (
    <>
      {/* 내 전략 버튼 */}
      {schema === "myStrategy" && (
        <Button size="narrowShort" schema="blackWhite">
          <MyStrategyButtonStyle>
            <div className="icon">
              <MyStategySVG />
            </div>
            <div className="text">내 전략</div>
            {count && (
              <span className="count">
                <NotificationBadge count={count} />
              </span>
            )}
          </MyStrategyButtonStyle>
        </Button>
      )}

      {/* 전략 불러오기 */}
      {schema === "loadStrategy" && (
        <Button size="narrowShort" schema="grayBlack">
          <MyStrategyButtonStyle>
            <div className="text">전략 불러오기</div>
            {count && (
              <span className="count">
                <NotificationBadge count={count} />
              </span>
            )}
          </MyStrategyButtonStyle>
        </Button>
      )}

      {/* 매매 시그널 등록 */}
      {schema === "addSignal" && (
        <Button size="wideShort" schema="grayBlack">
          <MyStrategyButtonStyle>
            <div className="text">매매 시그널 등록</div>
          </MyStrategyButtonStyle>
        </Button>
      )}

      {/* x 버튼 */}
      {schema === "x" && (
        <Button size="small" schema="blackWhite">
          <XButtonSVG />
        </Button>
      )}
    </>
  );
};

const MyStrategyButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 100%;

  position: relative;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .count {
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.main};
    padding: 0.0394rem;
    border-radius: 6.25rem;
    line-height: 1.5;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(45%, -45%);
  }
`;
export default MyStategyButton;
