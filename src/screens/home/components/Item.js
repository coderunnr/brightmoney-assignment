import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { LIGHT_GRAY_COLOR, ORANGE } from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  highlight: {
    backgroundColor: ORANGE,
  },
  heading: {
    fontSize: 18,
    marginVertical: 4,
  },
  details: {
    marginVertical: 4,
  },
  separator: {
    backgroundColor: LIGHT_GRAY_COLOR,
    height: 1,
    width: '100%',
    marginTop: 8,
  },
});

const Item = ({
  description,
  category,
  amount,
  date,
  highlight = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, highlight ? styles.highlight : {}]}
      onPress={onPress}>
      <Text style={styles.heading}>{description}</Text>
      <Text style={styles.details}>{category}</Text>
      <Text style={styles.details}>$ {amount}</Text>
      <Text style={styles.details}>{new Date(date).toDateString()}</Text>
      <View style={styles.separator} />
    </TouchableOpacity>
  );
};

export default Item;
