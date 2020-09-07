import React, { Component, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
// import MoodEditor from './moodEditor.jsx';
// import MoodRenderer from './moodRenderer.jsx';
import NumericEditor from './NumericEditor.js';
import { columnDefs } from './colDefs';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: columnDefs,
            rowData: this.createRowData(),
            frameworkComponents: {
                // moodRenderer: MoodRenderer,
                // moodEditor: MoodEditor,
                numericEditor: NumericEditor,
            },
            defaultColDef: {
                // editable: true,
                sortable: true,
                flex: 1,
                minWidth: 100,
                filter: true,
                resizable: true,
                cellClass: this.cellClass
            }
        }

    }
    createRowData = () => {
        return [
            {
                name: 'Amruth L S',
                mood: 'Happy',
                cost: 100,
            },
            {
                name: 'Harry',
                mood: 'Sad',
                cost: 200,
            },
            {
                name: 'Sally',
                mood: 'Happy',
                cost: 300,
                affectedRow: true
            }
        ];
    };
    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    cellClass = (params) => {
        // console.log('cellValueChanged', params);
        if (params.node.eventService && params.node.eventService.firedEvents) {
            //rowDataChanged
            console.log(params.node.eventService.firedEvents);
            if (params.node.eventService.firedEvents.cellChanged) {
                return 'cell-value-changed';
            }
        }

        //if cell is editable and value is affected
        if (params.data.affectedRow === true && params.colDef.editable === true) {
            return 'affected-row'
        }
    }

    onColumnValueChanged = params => {
        // if (params.type === "cellValueChanged") {
        //     // console.log('cellValueChanged', params);
        //     params.column.colDef.cellClass = 'cell-value-changed';
        //     params.api.refreshCells();
        // }

        params.api.forEachNode(node => {
            // console.log(node.data);
        })
        // console.log(params.api.forEachNode)
    }

    render() {
        return (
            <Fragment>
                <h1>Ag-grid</h1>
                <div
                    className="ag-theme-alpine"
                    style={{
                        height: '600px',
                        width: '600px'
                    }}
                >
                    <AgGridReact
                        modules={this.state.modules}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        frameworkComponents={this.state.frameworkComponents}
                        defaultColDef={this.state.defaultColDef}
                        onGridReady={this.onGridReady}
                        onCellValueChanged={this.onColumnValueChanged}
                    />
                </div>
            </Fragment>
        )
    }
}
export default Grid;