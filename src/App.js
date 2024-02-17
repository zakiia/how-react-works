import logo from "./logo.svg";
import "./App.css";
import Device from "./Component/device/Device";
import Watch from "./Component/Watch/Watch";
function App() {
  return (
    <div className="App">
      <Device name="uphone" price="13000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
