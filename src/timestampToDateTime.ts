import moment from "moment";
function timestampToDateTime(timeStamp: number) {
    let date = new Date(timeStamp);
    //console.log(date.getTime())
    //console.log(date)
    return date;
};

function usingMoment(timeStamp:number){
    let date = moment(timeStamp).format();
    // date becomes datetime;
    return date;
}