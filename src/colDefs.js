export const columnDefs = [
    {
        field: 'name',
        width: 300,
        // cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
            values: [
                'Bob',
                'Harry',
                'Sally',
                'Mary',
                'John',
            ],
        }
    },
    {
        field: 'mood',
        // cellRenderer: 'commonRenderer',
        //   cellEditor: 'moodEditor',
        width: 300,
    },
    {
        headerName: 'Cost',
        field: 'cost',
        cellEditor: 'numericEditor',
        width: 280,
        editable: true,
    },
];