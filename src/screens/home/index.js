import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { BillContext } from '../../context/bills';
import Item from './components/Item';
import CButton from '../../components/cells/CButton';
import locale from '../../locale/locale-en';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

const Home = ({ navigation }) => {
  const { bills } = useContext(BillContext);

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

  return (
    <View style={styles.container}>
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
