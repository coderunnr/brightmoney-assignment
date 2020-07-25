import React from 'react';
import { StyleSheet, TextInput, ViewPropTypes } from 'react-native';
import { string, func, bool } from 'prop-types';
import { PRIMARY_COLOR } from '../../constants/color';

const styles = StyleSheet.create({
  input: {
    padding: 8,
    paddingLeft: 0,
    marginVertical: '5%',
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR,
  },
});

const CTextInput = ({
  value,
  style,
  onChangeText,
  multiline,
  keyboardType,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

CTextInput.defaultProps = {
  multiline: false,
  keyboardType: 'default',
  style: {},
  secureTextEntry: false,
};

CTextInput.propTypes = {
  value: string.isRequired,
  style: ViewPropTypes.style,
  onChangeText: func.isRequired,
  multiline: bool,
  keyboardType: string,
  placeholder: string.isRequired,
  secureTextEntry: bool,
};

export default CTextInput;
