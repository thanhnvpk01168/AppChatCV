export const getDate = () => {
  let date = new Date();
  let getTime = date.getTime()+"";
  let getFullYear = date.getFullYear()+"";
  let getMonth = (date.getMonth() + 1)+"";
  let getDay = date.getDate()+"";
  let getHours = date.getHours()+"";
  let getMinutes = date.getMinutes()+"";
  let getSeconds = date.getSeconds()+"";
  let getMilliseconds = date.getMilliseconds()+"";
  if (getDay < 10) {
    getDay = '0' + getDay;
  }
  if (getMonth < 10) {
    getMonth = '0' + getMonth;
  }
  if (getHours < 10) {
    getHours = '0' + getHours;
  }
  if (getMinutes < 10) {
    getMinutes = '0' + getMinutes;
  }
  if (getMilliseconds < 10) {
    getMilliseconds = '0' + getMilliseconds;
  }
  return {
    time1970: getTime,
    year: getFullYear,
    month: getMonth,
    day: getDay,
    hours: getHours,
    minutes: getMinutes,
    seconds: getSeconds,
    milliseconds: getMilliseconds,
  };
};
