import React from "react";

import "./styles/main.scss";

function Main() {
  return (
    <main>
      <div>
        <h1>Search Weather condition by city</h1>
        <form>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
