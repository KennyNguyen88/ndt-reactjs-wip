export default {
    running: false,
    Control: {},
    IfStatus: {
        running: false,
        name: 'If Status',
        data: []
    },
    BackFlush: {
        running: false,
        name: 'Back Flush',
        data: []
    },
    Oit: {
        running: false,
        name: 'Oit',
        data: []
    },
    NegativeRawMaterial: {
        running: false,
        name: 'Negative Raw Material',
        data: []
    },
    TrxCode66: {
        running: false,
        name: 'Trx Code 66',
        data: []
    },
    History: {
        name: 'History',
        data: []
    },
    Summary: {
        running: false,
        name: 'Summary',
        data: []
    },
    Counter: 0,
    SearchCategory: ['IFSTATUS', 'OIT' , 'SUMMARY' , 'NEGATIVERAW' , 'TRX66' , 'BACKFLUSH', 'HISTORY']
}