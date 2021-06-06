import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const IconButton = styled(Button)<ButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === "sm" ? "0px" : "28px")};
  height:28px;
  border-radius:50%;
  background:${({theme}) => theme.colors.text};
  color:#FFFFFF !important;
`;

export default IconButton;
