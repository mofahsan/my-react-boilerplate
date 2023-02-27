import Hod from "./Hod";
import Hod2 from "./Hod2";
import Lod from "./Lod";

// Hod is excellent for reusing same code for multiple uses


function App() {
  return (
    <div className="App">
      <h1>Welcome to React </h1>
      <Hod component={'HII'} />  {/* A very basic example of Hod */}

      {/* we have wrapped Lod component in a higher order component Hod2 and passing component as prop as well as colour property */}
      <Hod2 colour = {'red'} component={Lod}/>
      <Hod2 colour = {'blue'} component={Lod}/>
      <Hod2 colour = {'green'} component={Lod}/>

    </div>

  );
}

export default App;
