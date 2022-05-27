import * as moment from 'moment';

function convertTime(unixTime: number): string {
  const newDate = new Date();
  newDate.setTime(unixTime);
  const dateString = newDate.toUTCString();
  return dateString
}

let mytime = convertTime(1652447452000);

mytime
