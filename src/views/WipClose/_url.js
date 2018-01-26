let localhost = "localhost";
let sspc = "172.27.26.68";
let baseLink = localhost;
export default {
    IFStatus: `http://${baseLink}:8000/wipclose/ifstatus`,
    Oit: `http://${baseLink}:8000/wipclose/oit`,
    Summary: `http://${baseLink}:8000/wipclose/summary`,
    Negative: `http://${baseLink}:8000/wipclose/negative`,
    TrxCode66: `http://${baseLink}:8000/wipclose/trx66`,
    BackFlush: `http://${baseLink}:8000/wipclose/backflush`,
    UpdateToWipReady: `http://${baseLink}:8000/wipclose/summary/wipready`,
    UpdateToNew: `http://${baseLink}:8000/wipclose/summary/new`
}