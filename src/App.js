import React, { useState } from "react";
import { Page } from "./components/Page";
import { IncreaseButton } from "./components/IncreaseButton";
import { DecreaseButton } from "./components//DecreaseButton";
import { Title } from "./components/Title";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Page>
      <Title>Counter React App</Title>
      <p>{counter}</p>
      <IncreaseButton onClick={() => setCounter(counter + 1)}>
        Increase
      </IncreaseButton>
      <DecreaseButton onClick={() => setCounter(counter - 1)}>
        Decrease
      </DecreaseButton>
    </Page>
  );
};

export default App;
