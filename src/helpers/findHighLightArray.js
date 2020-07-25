export const findHighLightArray = (bills, budget) => {
  bills.sort((billA, billB) => {
    return Number(billA) - Number(billB);
  });

  bills[0].highlight = false;

  let currentSum = Number(bills[0].amount);
  let maxSum = 0;
  let start = 0;
  let maxSumStartIndex = 0;
  let end = 0;

  const maxValue = (max, current, index) => {
    let maxVal = max;
    if (max <= current) {
      maxVal = current;
      maxSumStartIndex = start;
      end = index;
    }
    return maxVal;
  };

  for (let i = 1; i < bills.length; i++) {
    bills[i].highlight = false;
    if (currentSum <= budget) {
      maxSum = maxValue(maxSum, currentSum, i - 1);
    }

    while (currentSum + Number(bills[i].amount) > budget && start < i) {
      currentSum -= Number(bills[start].amount);
      start++;
    }

    currentSum += Number(bills[i].amount);
  }

  if (currentSum <= budget) {
    maxSum = maxValue(maxSum, currentSum, bills.length - 1);
  }

  for (let i = maxSumStartIndex; i <= end; i++) {
    bills[i].highlight = true;
  }

  return bills;
};
