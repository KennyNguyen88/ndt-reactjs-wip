export default {
    Running: false,
    Control: {},
    SteelMaking: {
        name: "Steel Making",
        running: false,
        SemiProduct: {
            name: "Semi Product",
            running: false,
            data: [
                {
                    name: "Prod.Qty",
                    switchName: "SteelMaking-SemiProduct-ProdQty",
                    erp: 0,
                    mes: 0
                },
                {
                    name: "Scrap",
                    switchName: "SteelMaking-SemiProduct-Scrap",
                    erp: 0,
                    mes: 0
                },
                {
                    name: "Ferro",
                    switchName: "SteelMaking-SemiProduct-Ferro",
                    erp: 0,
                    mes: 0
                },
                {
                    name: "Ore",
                    switchName: "SteelMaking-SemiProduct-Ore",
                    erp: 0,
                    mes: 0
                }
            ]
        },
        FinishedGood: {
            name: "Finished Good",
            running: false,
            data: [
                {
                    name: "Receipt",
                    switchName: "SteelMaking-FinishedGood-Receipt",
                    erp: 0,
                    mes: 0
                },
                {
                    name: "Return",
                    switchName: "SteelMaking-FinishedGood-Return",
                    erp: 0,
                    mes: 0
                }
            ]
        },
        Shipping:{
            name: "Shipping",
            running: false,
            data: [
                {
                    name: "Receipt",
                    switchName: "SteelMaking-Shipping-Receipt",
                    erp: 0,
                    mes: 0
                },
                {
                    name: "Return",
                    switchName: "SteelMaking-Shipping-Return",
                    erp: 0,
                    mes: 0
                }
            ]
        }
    },
    DeformedBar: {
        name: "Deformed Bar",
        running: false,
        Normal: {
            name: "Normal",
            running: false,
            SemiProduct: {
                name: "Semi Product",
                running: false,
                data: [
                    {
                        name: "Prod.Qty",
                        switchName: "DeformedBar-Normal-SemiProduct-ProdQty",
                        erp: 0,
                        mes: 0
                    },
                    {
                        name: "Input",
                        switchName: "DeformedBar-Normal-SemiProduct-Input",
                        erp: 0,
                        mes: 0
                    }
                ]
            },
            FinishedGood: {
                name: "Finished Good",
                data: [
                    {
                        name: "Receipt",
                        switchName: "DeformedBar-Normal-FinishedGood-Receipt",
                        erp: 0,
                        mes: 0
                    },
                    {
                        name: "Return",
                        switchName: "DeformedBar-Normal-FinishedGood-Return",
                        erp: 0,
                        mes: 0
                    }
                ]
            },
            Shipping: {
                name: "Shipping",
                data: [
                    {
                        name: "Issue",
                        switchName: "DeformedBar-Normal-Shipping-Issue",
                        erp: 0,
                        mes: 0
                    }
                ]
            }

        },
        Rework: {
            name: "Rework",
            SemiProduct: {
                name: "Semi Product",
                data: [
                    {
                        name: "Prod.Qty",
                        switchName: "DeformedBar-Rework-SemiProduct-ProdQty",
                        erp: 0,
                        mes: 0
                    },
                    {
                        name: "Input",
                        switchName: "DeformedBar-Rework-SemiProduct-Input",
                        erp: 0,
                        mes: 0
                    }
                ]
            },
        }
    },
    Section: {
        name: "Section",
        Normal: {
            name: "Normal",
            SemiProduct: {
                name: "Semi Product",
                data: [
                    {
                        name: "Prod.Qty",
                        switchName: "Section-Normal-SemiProduct-ProdQty",
                        erp: 0,
                        mes: 0
                    },
                    {
                        name: "Input",
                        switchName: "Section-Normal-SemiProduct-Input",
                        erp: 0,
                        mes: 0
                    }
                ]
            },
            FinishedGood: {
                name: "Finished Good",
                data: [
                    {
                        name: "Receipt",
                        switchName: "Section-Normal-FinishedGood-Receipt",
                        erp: 0,
                        mes: 0
                    },
                    {
                        name: "Return",
                        switchName: "Section-Normal-FinishedGood-Return",
                        erp: 0,
                        mes: 0
                    }
                ]
            },
            Shipping: {
                name: "Shipping",
                data: [
                    {
                        name: "Issue",
                        switchName: "Section-Normal-Shipping-Issue",
                        erp: 0,
                        mes: 0
                    }
                ]
            }

        },
        Rework: {
            name: "Rework",
            SemiProduct: {
                name: "Semi Product",
                data: [
                    {
                        name: "Prod.Qty",
                        switchName: "Section-Rework-SemiProduct-ProdQty",
                        erp: 0,
                        mes: 0
                    },
                    {
                        name: "Input",
                        switchName: "Section-Rework-SemiProduct-Input",
                        erp: 0,
                        mes: 0
                    }
                ]
            },
        }
    }

}