import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { BillContext } from '../../context/bills';
import Item from './components/Item';
import CButton from '../../components/cells/CButton';
import locale from '../../locale/locale-en';
import CTextInput from '../../components/cells/CTextInput';
import { findHighLightArray } from '../../helpers/findHighLightArray';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  viewTimeGraph: {
    margin: 16,
  },
  budget: {
    margin: 16,
  },
});

const Home = ({ navigation }) => {
  const { bills, setBills } = useContext(BillContext);
  const [budget, setBudget] = useState('50000');

  console.log('>>>>1', bills);

  const renderBill = ({ item, index }) => {
    const onPress = () => {
      navigation.navigate('Add', { index });
    };
    return <Item {...item} index={index} onPress={onPress} />;
  };

  const keyExtractor = (item, index) => {
    return `${item.description}-${index}`;
  };

  const onAddPress = () => {
    navigation.navigate('Add', { index: -1 });
  };

  const onViewTimeGraph = () => {
    navigation.navigate('TimeGraph');
  };

  const onHighlight = () => {
    setBills([...findHighLightArray(bills, Number(budget))]);
  };

  return (
    <View style={styles.container}>
      <CButton style={styles.viewTimeGraph} onPress={onViewTimeGraph}>
        {locale.viewTimeGraph}
      </CButton>
      <CTextInput
        style={styles.budget}
        value={budget}
        onChangeText={setBudget}
        keyboardType={'number-pad'}
      />
      <CButton style={styles.viewTimeGraph} onPress={onHighlight}>
        {locale.highlight}
      </CButton>
      <FlatList
        data={bills}
        renderItem={renderBill}
        keyExtractor={keyExtractor}
      />
      <CButton style={styles.addBtn} onPress={onAddPress}>
        {locale.add}
      </CButton>
    </View>
  );
};

export default Home;
