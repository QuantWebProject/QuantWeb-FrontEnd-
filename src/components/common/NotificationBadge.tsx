import styled from "styled-components";

interface Props {
  count: number;
}

const NotificationBadge = ({ count }: Props) => {
  return (
    <NotificationBadgeStyle $count={count}>
      {count > 99 ? "99+" : count}
    </NotificationBadgeStyle>
  );
};

interface BadgeStyleProps {
  $count: number;
}

const NotificationBadgeStyle = styled.div<BadgeStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 1.75rem;
  height: 1.75rem;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border-radius: 6.25rem;

  font-size: 1rem;
  line-height: 1.5;

  padding: ${({ $count }) => ($count > 99 ? " 0 0.56rem" : 0)};
`;
export default NotificationBadge;
