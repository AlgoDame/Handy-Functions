function convertTime (unixTime: number):string {
    const newDate = new Date();
    newDate.setTime(unixTime);
    const dateString = newDate.toUTCString();
    return dateString
  }