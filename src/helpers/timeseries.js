export const generateTimeSeries = (bills, lastDayOfMonth) => {
  let sumTillNow = 0;

  const data = [];
  data[lastDayOfMonth - 1] = 0;

  bills.forEach((bill) => {
    const d = new Date(bill.date);
    if (!data[d.getDate() - 1]) {
      data[d.getDate() - 1] = 0;
    }
    data[d.getDate() - 1] += Number(bill.amount);
  });

  for (let i = 0; i < lastDayOfMonth; i++) {
    if (data[i]) {
      sumTillNow += data[i];
    }
    data[i] = sumTillNow;
  }

  return data;
};
