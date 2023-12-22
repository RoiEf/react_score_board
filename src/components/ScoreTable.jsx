import { useState, useEffect } from "react";

const ScoreTable = (props) => {
  const [list, setList] = useState([{ playerName: "", score: "" }]);
  const [dataExist, setDataExist] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7777/get_hs")
      .then((res) => res.json())
      .then((res) => {
        // Set list
        console.log("ScoreTable :: res: " + JSON.stringify(res));
        if (res.message === "get10 GET :: No data saved") {
          setDataExist(false);
        } else {
          setList(res.data);
          setDataExist(true);
        }
      })
      .catch((error) => console.log("something failed", error));
    // eslint-disable-next-line react/prop-types
  }, [props.renderState]);

  return (
    <div>
      <h1>High Score</h1>
      <table border={"2px"}>
        <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {dataExist ? (
            list.map((key, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{key.playerName}</td>
                  <td>{key.score}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3}>No score data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
