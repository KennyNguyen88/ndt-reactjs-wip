/**
 * Created by Trung on 9/24/2017.
 */
export default {
    running: false,
    Control: {
        fromDate: "",
        toDate: ""
    },
    IfStatus: {
        name: 'If Status',
        data: [
            {
                name: ' ',
                desc: ' ',
                total: 0
            }
        ]
    },
    BackFlush: {
        name: 'Back Flush',
        data: [
            {
                name: ' ',
                total: 0
            }
        ]
    },
    Oit: {
        name: 'Oit',
        data: [
            {
                name: ' ',
                pending: 0,
                error: 0
            }
        ]
    },
    NegativeRawMaterial: {
        name: 'Negative Raw Material',
        data: [
            {
                name: ' ',
                desc: ' ',
                onhand: 0,
                pending: 0,
            }
        ]
    },
    TrxCode66: {
        name: 'Trx Code 66',
        data: [
            {
                name: ' ',
                total: 0
            }
        ]
    },
    History: {
        name: 'History',
        data: [
            {
                name: ' ',
                total: 0,
                happenTime: ' '
            }
        ]
    },
    Summary: {
        name: 'Summary',
        data: {
            to_wip_ready: 0,
            total_available: 0,
            total_ready: 0,
            group_semi_product: {
                name: 'Semi Product',
                data: [
                    {
                        name: ' ',
                        total: 0
                    }
                ]
            },
            group_finish_good: {
                name: 'Finish Good',
                data: [
                    {
                        name: ' ',
                        total: 0
                    }
                ]
            },
            group_rework: {
                name: 'Rework',
                data: [
                    {
                        name: ' ',
                        total: 0
                    }
                ]
            },
            group_shipping: {
                name: 'Shipping',
                data: [
                    {
                        name: ' ',
                        total: 0
                    }
                ]
            }
        }
    }
}