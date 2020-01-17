import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-enterprise";

import data from "./data";

function App() {
  function onRowDrag(e) {
    console.log(e);
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <AgGridReact
        columnDefs={data.columnDefs}
        rowData={data.rowData}
        // rowDragManaged={true}
        groupIncludeFooter={true}
        groupIncludeTotalFooter={true}
        // expand everything by default
        groupDefaultExpanded={-1}
        suppressAggFuncInHeader={true}
        onRowDragMove={e => onRowDrag()}
      ></AgGridReact>
    </div>
  );
}

export default App;
