const ResetBoard = (props) => {
  function sendReset() {
    fetch("http://localhost:7777/reset_hs", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ cmd: "resetBoard" }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("sendReset :: ", res);
        if (res.message === "delete HS POST sucess") {
          // eslint-disable-next-line react/prop-types
          props.updateFunction();
        }
      })
      .catch((error) => console.log("something failed", error));
  }

  return (
    <div>
      <h2>Reset Board</h2>
      <button type="submit" onClick={sendReset}>
        Reset
      </button>
    </div>
  );
};

export default ResetBoard;
