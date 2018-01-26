let localhost = "localhost";
let sspc = "172.27.26.68";
let baseLink = localhost;
export default {
    SteelMakingSemi: `http://${baseLink}:8000/info/production/smp/semi`,
    SteelMakingFinish: `http://${baseLink}:8000/info/production/smp/finish`,
    SteelMakingShipping: `http://${baseLink}:8000/info/production/smp/ship`,
    RebarSemi: `http://${baseLink}:8000/info/production/rebar/semi`,
    RebarFinish: `http://${baseLink}:8000/info/production/rebar/finish`,
    RebarShipping: `http://${baseLink}:8000/info/production/rebar/ship`,
    RebarRework: `http://${baseLink}:8000/info/production/rebar/rework`,
    SectionSemi: `http://${baseLink}:8000/info/production/section/semi`,
    SectionFinish: `http://${baseLink}:8000/info/production/section/finish`,
    SectionShipping: `http://${baseLink}:8000/info/production/section/ship`,
    SectionRework: `http://${baseLink}:8000/info/production/section/rework`
}