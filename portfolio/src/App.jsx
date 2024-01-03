import "./App.css";
import RightBar from "./Components/RightBar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
      <div className="main_container">
        <div className="wrapper">
          <Sidebar />
          <RightBar />
        </div>
      </div>
  );
}

export default App;
