import styled from "styled-components";

export const Page = styled.main`
  text-align: center;
  font-size: 2.5em;
`;

// Add this prop to the Page component
Page.defaultProps = {
  lang: "en",
};
