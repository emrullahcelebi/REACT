import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button, ButtonGroup, Container, Stack } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import AnimatedExample from "./bar.js";


const Odev3 = () => {
  const [count, setCount] = useState(0);

  const control = (sayi) => {
    if (sayi < 0) sayi = 0;

    if (sayi > 100) sayi = 100;

    setCount(sayi);
  };
  console.log(count);
  return (
    <Container className="mt-3 p-4 bg-light border">
      <Stack
        direction="horizontal"
        gap={3}
        id="btnGrup"
        className="mb-4 p-3 text-center"
      >
        <Button variant="primary" onClick={() => control(count + 10)}>
          <AiOutlinePlusCircle />
        </Button>

        <Button
          variant="danger"
          onClick={() => control(count - 10)}
          disabled={!count}
        >
          <AiOutlineMinusCircle />
        </Button>
      </Stack>

      <AnimatedExample now={count} />
    </Container>
  );
};
export default Odev3;
