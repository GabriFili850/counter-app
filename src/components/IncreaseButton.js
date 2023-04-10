import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

export const IncreaseButton = styled(Button)(
  () => css`
    &.MuiButtonBase-root {
      color: white;
      background-color: #14b82e;
      margin-right: 5px;
      border: none;
      outline: none;

      &:hover {
        background-color: #14b82e;
        outline: 2px solid blue;
        outline-offset: 1px;
      }
    }
  `
);

// Add these props to the IncreaseButton component
IncreaseButton.defaultProps = {
  "aria-label": "Increase counter",
  type: "button",
  title: "Click to increase the counter",
  tabIndex: 0,
  role: "button",
};
