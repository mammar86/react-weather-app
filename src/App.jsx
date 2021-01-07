import React from "react";

import "./styles/main.scss";

function Main() {
  return (
    <main>
      <h3>Search Weather condition by city</h3>
      <form>
        <input type="text"></input>
        <button type="submit"></button>
      </form>
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
