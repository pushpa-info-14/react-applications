import { useState } from "react";

interface DisplayProps {
  number: number;
}
function Display({ number }: DisplayProps) {
  return <div>{number}</div>;
}

interface DiceProps {
  callback: CallableFunction;
}
function Dice({ callback }: DiceProps) {
  return (
    <button onClick={() => callback(Math.floor(Math.random() * 6) + 1)}>
      Roll Dice
    </button>
  );
}

function Parent() {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <Display number={number} />
      <Dice callback={setNumber} />
    </div>
  );
}

function ChildToChild1() {
  return <Parent />;
}

export default ChildToChild1;
