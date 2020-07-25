import React from 'react';

import Routes from './routes';
import BillProvider from './context/bills';

const App = () => {
  return (
    <BillProvider>
      <Routes />
    </BillProvider>
  );
};

export default App;
