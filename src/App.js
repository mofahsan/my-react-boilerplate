

import Func from "./webdevsimplified/Func";
import { ThemeProvider } from "./webdevsimplified/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React </h1>
      <ThemeProvider>
      <Func/>
      </ThemeProvider>
    </div>
  );
}

export default App;
