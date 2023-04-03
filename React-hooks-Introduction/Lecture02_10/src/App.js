import React, { useState, useEffect, useRef } from "react";
import { useTitle } from "@byshooks/use-title";

const App = () => {
  useTitle("Hello useTitle");
  return (
    <div >
        <h1>NPM Test</h1>
    </div>
  )
}
export default App;
