import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

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
