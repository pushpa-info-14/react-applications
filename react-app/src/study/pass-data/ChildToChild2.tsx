import { configureStore } from "@reduxjs/toolkit";

const counter = (state = 5, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Increment");
      return state + 1;
    case "DECREMENT":
      console.log("Decrement");
      return state - 1;
    default:
      console.log("Get");
      return state;
  }
};

const store = configureStore({ reducer: counter });

const Counter = () => {
  const onIncrement = () => store.dispatch({ type: "INCREMENT" });
  const onDecrement = () => store.dispatch({ type: "DECREMENT" });

  return (
    <div className="container">
      <div className="display">{store.getState()}</div>
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

function ChildToChild2() {
  return <Counter />;
}

export default ChildToChild2;
