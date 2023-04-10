import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

export const DecreaseButton = styled(Button)(
  () => css`
    &.MuiButtonBase-root {
      color: white;
      background-color: #b81414;
      margin-right: 5px;
      border: none;

      &:hover {
        background-color: #b81414;
        outline: 2px solid blue;
        outline-offset: 1px;
      }
    }
  `
);

// Add these props to the DecreaseButton component
DecreaseButton.defaultProps = {
  "aria-label": "Decrease counter",
  type: "button",
  title: "Click to decrease the counter",
  tabIndex: 0,
  role: "button",
};
