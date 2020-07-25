import React, { useState, useContext } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { BillContext } from '../../context/bills';
import CTextInput from '../../components/cells/CTextInput';
import CButton from '../../components/cells/CButton';
import locale from '../../locale/locale-en';
import { TYPE_CATEGORIES } from '../../constants/types';

const INITIAL_BILL = {
  description: '',
  amount: '',
  category: '',
};

const MODE_DATE = 'date';

const categories = Object.keys(TYPE_CATEGORIES).map((key) => {
  return TYPE_CATEGORIES[key];
});

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    flex: 2,
    fontSize: 16,
  },
  changeDateBtn: {
    flex: 1,
  },
  btn: {
    marginVertical: 8,
  },
});

const Bill = ({ navigation }) => {
  const { bills, addBill, editBill, deleteBill } = useContext(BillContext);

  const index = navigation.getParam('index');
  const bill = bills[index] || INITIAL_BILL;
  const isEdit = index !== -1;

  const [description, setDescription] = useState(bill.description);
  const [amount, setAmount] = useState(bill.amount);
  const [date, setDate] = useState(
    bill.date ? new Date(bill.date) : new Date(),
  );
  const [category, setCategory] = useState(bill.category || categories[2]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showHideDatePicker = (show) => () => {
    setShowDatePicker(show);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onSave = () => {
    const billData = {
      description,
      amount,
      date: date.getTime(),
      category,
    };
    if (isEdit) {
      editBill(billData, index);
    } else {
      addBill(billData);
    }
    navigation.goBack();
  };

  const onDelete = () => {
    deleteBill(index);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CTextInput
        value={description}
        onChangeText={setDescription}
        placeholder={locale.description}
      />
      <CTextInput
        value={amount}
        onChangeText={setAmount}
        placeholder={locale.amount}
        keyboardType={'number-pad'}
      />
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
        <CButton
          style={styles.changeDateBtn}
          onPress={showHideDatePicker(true)}>
          {locale.changeDate}
        </CButton>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode={MODE_DATE}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
      <Picker
        selectedValue={category}
        onValueChange={(item) => {
          setCategory(item);
        }}>
        {categories.map((item, pos) => (
          <Picker.Item label={item} value={item} />
        ))}
      </Picker>
      <CButton style={styles.btn} onPress={onSave}>
        {locale.save}
      </CButton>
      {isEdit && (
        <CButton style={styles.btn} onPress={onDelete}>
          {locale.delete}
        </CButton>
      )}
    </View>
  );
};

export default Bill;
