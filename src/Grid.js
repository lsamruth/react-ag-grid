import React, { Component, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
// import MoodEditor from './moodEditor.jsx';
// import MoodRenderer from './moodRenderer.jsx';
import NumericEditor from './NumericEditor.js';


class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    field: 'name',
                    width: 300,
                    // editable: true,
                    // cellEditor: 'agRichSelectCellEditor',
                    cellEditorParams: {
                        values: [
                            'Bob',
                            'Harry',
                            'Sally',
                            'Mary',
                            'John',
                        ],
                    },
                    icons: {
                        menu: '<i class="fa fa-shower"/>',
                        filter: '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/javascript-grid-icons/minus.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
                        columns: '<i class="fa fa-snowflake"/>',
                        sortAscending: '<i class="fa fa-sort-alpha-up"/>',
                        sortDescending: '<i class="fa fa-sort-alpha-down"/>',
                      },
                },
                {
                    field: 'mood',
                    //   cellRenderer: 'moodRenderer',
                    //   cellEditor: 'moodEditor',
                    // editable: true,
                    width: 300,
                },
                {
                    headerName: 'Numeric',
                    field: 'number',
                    cellEditor: 'numericEditor',
                    // editable: true,
                    width: 280,
                    cellStyle: (param) => this.editableColumn(param),
                    // newValueHandler: this.compareValues
                },
            ],
            rowData: this.createRowData(),
            frameworkComponents: {
                // moodRenderer: MoodRenderer,
                // moodEditor: MoodEditor,
                numericEditor: NumericEditor,
            },
            defaultColDef: {
                editable: true,
                sortable: true,
                flex: 1,
                minWidth: 100,
                filter: true,
                resizable: true,
            },
            icons: {
                menu: '<i class="fa fa-bath" style="width: 10px"/>',
                filter: '<i class="fa fa-long-arrow-alt-down"/>',
                columns: '<i class="fa fa-handshake"/>',
                sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-alt-up"/>',
                groupExpanded:
                  '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/javascript-grid-icons/minus.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
            }
        }

    }
    editableColumn(param) {
        console.log(param);
        return param.colDef.equals = (oldValue, newValue) => {
            // console.log(oldValue,newValue);
            return param.column.colDef.cellStyle = {
                'color': 'red',
                'background-color': 'blue',
                'hover':'black'
            };
        }
    }
    componentDidMount() {
    }
    createRowData = () => {
        return [
            {
                name: 'Amruth L S',
                mood: 'Happy',
                number: 28,
            },
            {
                name: 'Harry',
                mood: 'Sad',
                number: 3,
            },
            {
                name: 'Sally',
                mood: 'Happy',
                number: 20,
            }
        ];
    };
    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    onColumnValueChanged = params => {
        // console.log(params)
        params.api.forEachNode(node => {
            console.log(node.data);
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
                        icons={this.state.icons}
                    />
                </div>
            </Fragment>
        )
    }
}
export default Grid;