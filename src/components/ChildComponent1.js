import React from "react";

function ChildComponent1({ setSelectionOption }) {
  return (
    <div className="child1">
      <h1>Child Component 1</h1>
      <button onClick={() => setSelectionOption("Option 1")}>Option 1</button>
    </div>
  );
}

export default ChildComponent1;
