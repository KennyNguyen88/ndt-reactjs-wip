export default {
    Control: {
        inputMonth: "",
    },
    SteelMaking: {
        name: "Steel Making",
        SemiProduct: {
            name: "Semi Product",
            data: [
                {
                    name: "Prod.Qty",
                    switchName: "SteelMaking-SemiProduct-ProdQty",
                    erp: 100,
                    mes: 100
                },
                {
                    name: "Scrap",
                    switchName: "SteelMaking-SemiProduct-Scrap",
                    erp: 100,
                    mes: 100
                },
                {
                    name: "Ferro",
                    switchName: "SteelMaking-SemiProduct-Ferro",
                    erp: 100,
                    mes: 100
                },
                {
                    name: "Ore",
                    switchName: "SteelMaking-SemiProduct-Ore",
                    erp: 100,
                    mes: 100
                }
            ]
        },
        FinishedGood: {
            name: "Finished Good",
            data: [
                {
                    name: "Receipt",
                    switchName: "SteelMaking-FinishedGood-Receipt",
                    erp: 100,
                    mes: 100
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
            data: [
                {
                    name: "Receipt",
                    switchName: "SteelMaking-Shipping-Receipt",
                    erp: 100,
                    mes: 100
                },
                {
                    name: "Return",
                    switchName: "SteelMaking-Shipping-Return",
                    erp: 100,
                    mes: 100
                }
            ]
        }
    },
    DeformedBar: {
        name: "Deformed Bar",
        Normal: {
            name: "Normal",
            SemiProduct: {
                name: "Semi Product",
                data: [
                    {
                        name: "Prod.Qty",
                        switchName: "DeformedBar-Normal-SemiProduct-ProdQty",
                        erp: 100,
                        mes: 100
                    },
                    {
                        name: "Input",
                        switchName: "DeformedBar-Normal-SemiProduct-Input",
                        erp: 100,
                        mes: 100
                    }
                ]
            },
            FinishedGood: {
                name: "Finished Good",
                data: [
                    {
                        name: "Receipt",
                        switchName: "DeformedBar-Normal-FinishedGood-Receipt",
                        erp: 100,
                        mes: 100
                    },
                    {
                        name: "Return",
                        switchName: "DeformedBar-Normal-FinishedGood-Return",
                        erp: 100,
                        mes: 100
                    }
                ]
            },
            Shipping: {
                name: "Shipping",
                data: [
                    {
                        name: "Issue",
                        switchName: "DeformedBar-Normal-Shipping-Issue",
                        erp: 100,
                        mes: 100
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
                        erp: 100,
                        mes: 100
                    },
                    {
                        name: "Input",
                        switchName: "DeformedBar-Rework-SemiProduct-Input",
                        erp: 100,
                        mes: 100
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
                        erp: 100,
                        mes: 100
                    },
                    {
                        name: "Input",
                        switchName: "Section-Normal-SemiProduct-Input",
                        erp: 100,
                        mes: 100
                    }
                ]
            },
            FinishedGood: {
                name: "Finished Good",
                data: [
                    {
                        name: "Receipt",
                        switchName: "Section-Normal-FinishedGood-Receipt",
                        erp: 100,
                        mes: 100
                    },
                    {
                        name: "Return",
                        switchName: "Section-Normal-FinishedGood-Return",
                        erp: 100,
                        mes: 100
                    }
                ]
            },
            Shipping: {
                name: "Shipping",
                data: [
                    {
                        name: "Issue",
                        switchName: "Section-Normal-Shipping-Issue",
                        erp: 100,
                        mes: 100
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
                        erp: 100,
                        mes: 100
                    },
                    {
                        name: "Input",
                        switchName: "Section-Rework-SemiProduct-Input",
                        erp: 100,
                        mes: 100
                    }
                ]
            },
        }
    }

}