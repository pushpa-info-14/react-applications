interface Props {
  callback: CallableFunction;
}
function Child({ callback }: Props) {
  const data = 1234;
  return (
    <button onClick={() => callback(data)}>
      Pass data to Parent Component
    </button>
  );
}

function Parent() {
  const callThisFromChildComponent = (value: number) => {
    console.log(`Child passed in ${value}`);
  };

  return <Child callback={callThisFromChildComponent} />;
}

function ChildToParent() {
  return <Parent />;
}

export default ChildToParent;
