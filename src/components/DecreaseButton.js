import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

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
