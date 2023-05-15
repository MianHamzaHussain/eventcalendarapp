import moment from "moment";


export const getMonthDates=()=> {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const startDate = moment(month, 'MM').startOf('month');
  const endDate = moment(month, 'MM').endOf('month');
  return {
    start: new Date(startDate),
    end: new Date(endDate),
  };
}
  