import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {type ButtonProps} from './Button.types';

export const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
});
