import React from "react";

function ChildComponent2({ setSelectionOption }) {
  return (
    <div>
      <div className="child2">
        <h1>Child Component 2</h1>
        <button onClick={() => setSelectionOption("Option 2")}>Option 2</button>
      </div>
    </div>
  );
}

export default ChildComponent2;
