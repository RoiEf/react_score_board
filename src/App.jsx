import { useState } from "react";
import "./App.css";
import SendForm from "./components/SendForm";
import ScoreTable from "./components/ScoreTable";
import ResetBoard from "./components/ResetBoard";

function App() {
  const [dummyState, setDummyState] = useState(0);
  const UpdateTable = () => {
    console.log("updateTable run");
    setDummyState(dummyState + 1);
  };

  return (
    <div>
      <div className="headder">
        <h1>Score board</h1>
      </div>
      <div className="sendForm">
        <SendForm updateFunction={UpdateTable} />
      </div>
      <div className="table">
        <ScoreTable renderState={dummyState} />
      </div>
      <div>
        <ResetBoard updateFunction={UpdateTable} />
      </div>
    </div>
  );
}

export default App;
