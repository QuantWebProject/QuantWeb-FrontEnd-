import styled from "styled-components";

interface Props {
  title: string;
  info?: string;
}
const SetupTitle = ({ title, info }: Props) => {
  return (
    <SetupTitleStyle>
      <div className="title">{title}</div>
      {info && <div className="info">{info}</div>}
    </SetupTitleStyle>
  );
};

const SetupTitleStyle = styled.div`
  flex-shrink: 0;
  height: 4.5rem;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.sub5};

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.125rem 1.125rem 0rem 0rem;
  padding: 0 2rem;

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.6;
  }

  .info {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;
export default SetupTitle;
