import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import { func, string } from 'prop-types';
import { PRIMARY_COLOR, WHITE_TEXT_COLOR } from '../../constants/color';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  textStyle: {
    color: WHITE_TEXT_COLOR,
    alignSelf: 'center',
  },
});

const CButton = ({ style, onPress, children, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

CButton.defaultProps = {
  style: {},
  textStyle: {},
};

CButton.propTypes = {
  onPress: func.isRequired,
  style: ViewPropTypes.style,
  children: string.isRequired,
  textStyle: ViewPropTypes.style,
};

export default CButton;
