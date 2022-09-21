import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

export const Page = styled.div`
  text-align: center;
  font-size: 35px;
`;

export const Title = styled.h1`
  font-style: italic;
`;

export const IncreaseButton = styled(Button)(
  () => css`
    &.MuiButtonBase-root {
      color: white;
      background-color: green;
      margin-right: 5px;
    }

    &.MuiButtonBase-root:hover {
      color:black;
  `
);

export const DecreaseButton = styled(Button)(
  () => css`
    &.MuiButtonBase-root {
      color: white;
      background-color: red;
      margin-left: 5px;
    }

    &.MuiButtonBase-root:hover {
      color:black;
  `
);
