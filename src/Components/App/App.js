import React from "react";
import Routers from "../../Routers/Routers";
import SearchContext from "../../Context/SearchContext";

function App() {
  return (
    <SearchContext>
      <Routers />
    </SearchContext>
  );
}

export default App;
