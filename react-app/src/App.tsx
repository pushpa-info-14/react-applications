import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ParentToChild from "./study/pass-data/ParentToChild";
import ChildToParent from "./study/pass-data/ChildToParent";
import ChildToChild1 from "./study/pass-data/ChildToChild1";
import ChildToChild2 from "./study/pass-data/ChildToChild2";
import ChildToChild3 from "./study/pass-data/ChildToChild3";

function App() {
  return (
    <>
      <h1>Hello from React</h1>
      <ParentToChild />
      <br />
      <ChildToParent />
      <br />
      <br />
      <ChildToChild1 />
      <br />
      <ChildToChild2 />
      <br />
      <ChildToChild3 />
      <br />
    </>
  );
}

export default App;
