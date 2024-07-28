import styled from "styled-components";
import CheckSVG from "@/assets/images/check.svg?react";
import Body from "../common/Body";

interface Props {
  isActive: boolean;
  name: string;
  isSubscribed: boolean;
}
const MyStrategyListItem = ({ isActive, name, isSubscribed }: Props) => {
  return (
    <MyStrategyListItemStyle $isActive={isActive}>
      {isActive && (
        <div className="icon">
          <CheckSVG />
        </div>
      )}
      <Body size="B2" color="#1F1F23">
        {name}
      </Body>

      {isSubscribed && (
        <>
          <div className="line"></div>
          <Body size="B3" color="#7467FF">
            구독
          </Body>
        </>
      )}
    </MyStrategyListItemStyle>
  );
};

interface MyStrategyListItemStyleProps {
  $isActive: boolean;
}
const MyStrategyListItemStyle = styled.div<MyStrategyListItemStyleProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0rem 1.375rem;

  background-color: ${({ $isActive, theme }) => $isActive && theme.color.gray2};

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem 0;
    svg {
      stroke: ${({ theme }) => theme.color.main};
    }
  }

  .line {
    width: 1px;
    height: 0.875rem;
    margin: 0 0.5rem;
    background-color: ${({ theme }) => theme.color.gray3};
  }
`;
export default MyStrategyListItem;
