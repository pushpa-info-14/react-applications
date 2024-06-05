// type Props = {
//   name: string;
// };
interface Props {
  name: string;
}
function Child({ name }: Props) {
  return <div>{name}</div>;
}

function Parent() {
  return (
    <div>
      <Child name="Chris" />
      <Child name="Angelo" />
      <Child name="Jane" />
      <Child name="John" />
    </div>
  );
}

function ParentToChild() {
  return <Parent />;
}

export default ParentToChild;
