"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: "athlete",
          rowDrag: function(params) {
            return !params.node.group;
          }
        },
        {
          field: "country",
          rowGroup: true
        },
        { field: "year" },
        { field: "date" },
        { field: "sport" },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" }
      ],
      defaultColDef: {
        width: 150,
        sortable: true,
        filter: true
      },
      groupDefaultExpanded: 1
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.setRowData(olympicWinnersData);
  };

  onRowDragMove(event) {
    let movingNode = event.node;
    let overNode = event.overNode;
    let groupCountry;
    if (overNode.group) {
      groupCountry = overNode.key;
    } else {
      groupCountry = overNode.data.country;
    }
    let needToChangeParent = movingNode.country !== groupCountry;
    if (needToChangeParent) {
      let movingData = movingNode.data;
      movingData.country = groupCountry;
      this.gridApi.updateRowData({ update: [movingData] });
      this.gridApi.clearFocusedCell();
    }
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            animateRows={true}
            groupDefaultExpanded={this.state.groupDefaultExpanded}
            onGridReady={this.onGridReady}
            onRowDragMove={this.onRowDragMove.bind(this)}
          />
        </div>
      </div>
    );
  }
}

render(<GridExample />, document.querySelector("#root"));
