import moment from 'moment';
export const converMomentToVn = (value) => {
  return value
    .replace('ago', 'trước')
    .replace('minutes', 'phút')
    .replace('minute', 'phút')
    .replace('hours', 'giờ')
    .replace('hour', 'giờ')
    .replace('days', 'ngày')
    .replace('day', 'ngày')
    .replace('few', '')
    .replace('seconds', 'giây')
    .replace('second', 'giây')
    .replace('ago', 'trước')
    .replace('ago', 'trước')
    .replace('ago', 'trước')
    .replace('ago', 'trước')
    .replace('months', 'tháng')
    .replace('month', 'tháng')
    .replace('years', 'năm')
    .replace('year', 'năm')
    .replace('an', '1')
    .replace('a', '1')
    .replace('in', '')
    .replace(/  +/g, ' ');
};
export const converMomentToVnByWeek = (value) => {
  let a = new moment(value, 'hh:mm DD/MM/YYYY a').calendar();
  let b = new moment(value, 'hh:mm DD/MM/YYYY a')
    .format('dddd')
    .replace('Monday', 'Thứ 2')
    .replace('Tuesday', 'Thứ 3')
    .replace('Wednesday', 'Thứ 4')
    .replace('Thursday', 'Thứ 5')
    .replace('Friday', 'Thứ 6')
    .replace('Saturday', 'Thứ 7')
    .replace('Sunday', 'CN')


  if (a.indexOf('Today') >= 0 || a.indexOf('today') >= 0) {
    return value.split(' ')[0];
  } else {
    return `${b} lúc ${value}`;
  }
};
