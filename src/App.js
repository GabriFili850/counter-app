import React, { useState } from "react";
import { Page } from "./components/Page";
import { IncreaseButton } from "./components/IncreaseButton";
import { DecreaseButton } from "./components/DecreaseButton";
import { Title } from "./components/Title";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Page role='main'>
      <Title title='This is a Counter'>This is a Counter</Title>
      <span>{counter}</span>
      <div>
        <IncreaseButton
          onClick={() => setCounter(counter + 1)}
          aria-label='Increase counter'
          type='button'
          title='Click to increase the counter'
          tabIndex={0}
          role='button'
        >
          Increase
        </IncreaseButton>
        <DecreaseButton
          onClick={() => setCounter(counter - 1)}
          aria-label='Decrease counter'
          type='button'
          title='Click to decrease the counter'
          tabIndex={0}
          role='button'
        >
          Decrease
        </DecreaseButton>
      </div>
    </Page>
  );
};

export default App;
