

import Func from "./webdevsimplified/Func";
import { ThemeProvider } from "./webdevsimplified/ThemeContext";
import ChildComponent from "./WrappingContextWithHoc/ChildComponent";
import Hoc from "./WrappingContextWithHoc/Hoc";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React </h1>
      <ThemeProvider>
      <Func/>
      </ThemeProvider>
      <Hoc Component = {ChildComponent}/>
      {/* <Comp2/> */} {/*this will be unable to access context since it's not wrapped with context */ }
    </div>
  );
}

export default App;
