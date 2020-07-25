import React, { useState } from 'react';
import { object } from 'prop-types';
import { Bills } from '../constants/bills';

export const BillContext = React.createContext({});

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState(Bills);

  const addBill = (bill) => {
    setBills([bill, ...bills]);
  };

  const editBill = (bill, index) => {
    const newBills = [...bills];
    newBills[index] = bill;
    setBills(newBills);
  };

  const deleteBill = (index) => {
    const newBills = [...bills];
    newBills.splice(index, 1);
    setBills(newBills);
  };

  return (
    <BillContext.Provider
      value={{ bills, addBill, editBill, deleteBill, setBills }}>
      {children}
    </BillContext.Provider>
  );
};

BillProvider.propTypes = {
  children: object.isRequired,
};

export default BillProvider;
