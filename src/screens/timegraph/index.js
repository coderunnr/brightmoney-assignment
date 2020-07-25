import React, { useContext } from 'react';
import { Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { BillContext } from '../../context/bills';
import { generateTimeSeries } from '../../helpers/timeseries';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  barPercentage: 0.5,
};

const TimeGraph = () => {
  const { bills } = useContext(BillContext);

  const date = new Date();
  var lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  const set = generateTimeSeries(bills, lastDayOfMonth);

  const indicesToShow = {
    '1': 1,
    '5': 5,
    '10': 10,
    '15': 15,
    '20': 20,
    '25': 25,
    [`${lastDayOfMonth}`]: lastDayOfMonth,
  };

  const indicesToHide = [];
  const data = {
    labels: set.map((_, index) => {
      const value = `${index + 1}`;
      if (!indicesToShow[value]) {
        indicesToHide.push(index);
      }
      return value;
    }),
    datasets: [
      {
        data: set,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      },
    ],
  };
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      hidePointsAtIndex={indicesToHide}
    />
  );
};

export default TimeGraph;
