/**
 * Created by Trung on 9/24/2017.
 */
export default {
    Control: {
        fromDate: "2017-01-09",
        toDate: "2017-01-09"
    },
    IfStatus: {
        name: 'If Status',
        data: [
            {
                name: 'NEW',
                description: 'New',
                total: 10
            },
            {
                name: 'WIP_READY',
                description: 'Wip Ready',
                total: 100
            },
            {
                name: 'PSV_WIP_C620',
                description: 'Shortage Component',
                total: 1000
            },
            {
                name: '000',
                description: 'Complete',
                total: 10000
            },
            {
                name: 'WIP_CANCEL',
                description: 'Wip Cancel',
                total: 10000
            }
        ]
    },
    BackFlush: {
        name: 'Back Flush',
        data: [
            {
                name: 'AA810V00',
                total: 34432296
            },
            {
                name: 'AA810V00',
                total: 34432296
            },
            {
                name: 'AA810V00',
                total: 34432296
            }
        ]
    },
    Oit: {
        name: 'Oit',
        data: [
            {
                name: 'Mtl.Trx',
                pending: 100,
                error: 0
            },
            {
                name: 'Mtl.Lot.Trx',
                pending: 0,
                error: 0
            },
            {
                name: 'Wip.Job',
                pending: 100,
                error: 0
            },
            {
                name: 'Mov.Trx',
                pending: 0,
                error: 0
            },
            {
                name: 'Resources',
                pending: 0,
                error: 0
            },
            {
                name: 'Mtl.Temp',
                pending: 0,
                error: 0
            }
        ]
    },
    NegativeRawMaterial: {
        name: 'Negative Raw Material',
        data: [
            {
                name: 'AA810V00',
                desc: 'Description',
                onhand: 34432296,
                pending: 34432296,
            },
            {
                name: 'AA810V00',
                desc: 'Description',
                onhand: 34432296,
                pending: 34432296,
            },
            {
                name: 'AA810V00',
                desc: 'Description',
                onhand: 34432291,
                pending: 34432296,
            }
        ]
    },
    TrxCode66: {
        name: 'Trx Code 66',
        data: [
            {
                name: 'AA810V00',
                total: 34432296
            },
            {
                name: 'AA810V00',
                total: 34432296
            },
            {
                name: 'AA810V00',
                total: 34432296
            }
        ]
    },
    History: {
        name: 'History',
        data: [
            {
                name: 'WIP_READY',
                total: 34432296,
                happenTime: '2017-09-23 09:00'
            },
            {
                name: 'WIP_READY',
                total: 34432296,
                happenTime: '2017-09-23 09:00'
            },
            {
                name: 'WIP_READY',
                total: 34432296,
                happenTime: '2017-09-23 09:00'
            }
        ]
    },
    Summary: {
        name: 'Summary',
        data: {
            to_wip_ready: 9,
            total_available: 4216,
            total_ready: 4344,
            group_semi_product: {
                name: 'Semi Product',
                data: [
                    {
                        name: 'Steel Making',
                        total: 999
                    },
                    {
                        name: 'Rebar',
                        total: 999
                    },
                    {
                        name: 'Section',
                        total: 999
                    }
                ]
            },
            group_finish_good: {
                name: 'Finish Good',
                data: [
                    {
                        name: 'Steel Making',
                        total: 999
                    },
                    {
                        name: 'Rebar',
                        total: 999
                    },
                    {
                        name: 'Section',
                        total: 999
                    }
                ]
            },
            group_rework: {
                name: 'Rework',
                data: [
                    {
                        name: 'Rebar',
                        total: 999
                    },
                    {
                        name: 'Section',
                        total: 999
                    }
                ]
            },
            group_shipping: {
                name: 'Shipping',
                data: [
                    {
                        name: 'Steel Making',
                        total: 999
                    },
                    {
                        name: 'Rebar',
                        total: 999
                    },
                    {
                        name: 'Section',
                        total: 999
                    }
                ]
            }
        }
    }
}