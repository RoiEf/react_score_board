import { useState } from "react";

const SendForm = (props) => {
  const [formData, setFormData] = useState({ playerName: "", score: 0 });

  function processForm() {
    fetch("http://localhost:7777/save_hs", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("SendForm :: ", res);
        if (res.message === "save HS POST sucess") {
          setFormData({ playerName: "", score: 0 });
          // eslint-disable-next-line react/prop-types
          props.updateFunction();
        }
      })
      .catch((error) => console.log("something failed", error));
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="playerName">Player name</label>
          <input
            id="playerName"
            name="playerName"
            type="text"
            value={formData.playerName}
            autoComplete="off"
            autoCorrect="off"
            onChange={(e) =>
              setFormData({ ...formData, playerName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="score">Score</label>
          <input
            id="score"
            name="score"
            type="number"
            value={formData.score}
            onChange={(e) =>
              setFormData({ ...formData, score: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit" onClick={processForm}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendForm;
