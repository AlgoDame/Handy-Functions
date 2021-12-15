import * as moment from "moment";

function getTimeNow(): string {
    let time = moment().format();
    return time;
}

function isoToUnix(isoDate: string): number {
    //E.g of ISO date"2021-12-13T11:18:00+01:00"
    let unixTime = moment(isoDate).valueOf();
    return unixTime;
}


function getTimeNowInUnix(): number {
    return moment().valueOf()

}