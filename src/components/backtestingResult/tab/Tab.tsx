import styled from "styled-components";

interface Props {
  activeTab: string;
  setActiveTab: (tabname: string) => void;
}

const Tab = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div>
      <TabContainer>
        <TabList
          className={activeTab === "industry" ? "active" : ""}
          onClick={() => setActiveTab("industry")}
        >
          산업구성
        </TabList>
        <TabList
          className={activeTab === "asset" ? "active" : ""}
          onClick={() => setActiveTab("asset")}
        >
          자산구성
        </TabList>
      </TabContainer>
    </div>
  );
};

const TabContainer = styled.div`
  width: 192px;
  height: 38px;
  border-radius: 8px;
  background: var(--Sub-subcolor_3, #dedaff);
  display: flex;
  padding: 2px;
  align-items: flex-start;
  gap: 4px;
`;

const TabList = styled.button`
  display: flex;
  width: 92px;
  height: 34px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  color: var(--Gray-Gray_8, #6d6d7d);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  &.active {
    background: var(--white, #fff);
    color: var(--Gray-Gray_10, #1f1f23);
  }
`;

export default Tab;
