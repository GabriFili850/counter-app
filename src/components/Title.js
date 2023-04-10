import styled from "styled-components";

export const Title = styled.h1`
  font-style: italic;
`;

// Add these props to the Title component
Title.defaultProps = {
  title: "This is a Counter",
  lang: "en",
};
