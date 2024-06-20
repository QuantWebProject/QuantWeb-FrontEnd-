import styled from "styled-components";
import CheckBox from "../common/Checkbox";
import ToolTip from "../common/ToolTip";

interface Props {
  id: number;
  name: string;
  info: string; // tooltip info
  checked: boolean;
  onCheck: (id: number) => void;
}
const FactorItem = ({ id, name, info, checked, onCheck }: Props) => {
  const handleCheck = (id: number) => {
    onCheck(id);
  };

  return (
    <FactorItemStyle $isChecked={checked}>
      <div className="icon">
        <CheckBox isChecked={checked} onCheck={() => handleCheck(id)} />
      </div>
      <div className="text">{name}</div>
      <div className="tooltip">
        <ToolTip info={info} />
      </div>
    </FactorItemStyle>
  );
};

const FactorItemStyle = styled.div<{ $isChecked: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 0 0 2rem;
  width: 23rem;
  height: 3.75rem;
  width: 100%;
  background: ${({ theme }) => theme.color.white};

  .icon {
    margin-right: 0.75rem;
  }

  .text {
    font-weight: ${({ $isChecked }) => ($isChecked ? 500 : 400)};
    margin-right: 0.25rem;
  }
`;
export default FactorItem;
