import React from "react";
import { Page, IncreaseButton, DecreaseButton, Title } from "./styles.js";

const { useState } = React;

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Page>
      <Title>This is a Counter</Title>
      <p>{counter}</p>
      <IncreaseButton
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </IncreaseButton>
      <DecreaseButton
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </DecreaseButton>
    </Page>
  );
};

export default App;
