import { helper } from '@ember/component/helper';

export default helper(function date(params/*, hash*/) {
  const timestamp = params[0];
  if (typeof timestamp === "number") {
    // get date object from timestap
    const date = new Date(params * 1000);
    // define names of weekdays
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // return date in wanted format 
    return weekday[date.getDay()] + ' ' + date.getDate();
  } else {
    return "";
  }
});
