import logo from "./logo.svg";
import "./App.css";
import Device from "./Component/device/Device";
import Watch from "./Component/Watch/Watch";
import Cosmetics from "./Component/Cosmetics/Cosmetics";
import Shoes from "./Component/Shoes/Shoes";
function App() {
  return (
    <div className="App">
      {/* <Device name="uphone" price="13000"></Device>
      <Watch></Watch> */}
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
