import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardHeaderProps = SpaceProps;

const CardHeader = styled.div<CardHeaderProps>`
  background: ${({ theme }) => theme.colors.textDisabled};

  ${space}
`;

CardHeader.defaultProps = {
  p: "24px",
};

export default CardHeader;
