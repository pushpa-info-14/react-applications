import { createContext, useContext, useState } from "react";

const CountContext = createContext({
  count: 0,
  onIncrement: () => {},
  onDecrement: () => {},
});

const Counter = () => {
  const { count, onIncrement, onDecrement } = useContext(CountContext);

  return (
    <div className="container">
      <div className="display">{count}</div>
      <div>
        <button className="btn btn-primary" onClick={onIncrement}>
          +<i className="fa fa-plus"></i>
        </button>
        <button className="btn btn-primary" onClick={onDecrement}>
          -<i className="fa fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

function ChildToChild3() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    setCount(count - 1);
  };
  return (
    <CountContext.Provider value={{ count, onIncrement, onDecrement }}>
      <Counter />;
    </CountContext.Provider>
  );
}

export default ChildToChild3;
