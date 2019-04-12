import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

export default props => (
  <View style={styles.numeros}>
    <Numero 
      num={props.num1} 
      nome='num1'
      atualizaValor={props.atualizaValor} 
    />
    <Numero 
      num={props.num2} 
      nome='num2'
      atualizaValor={props.atualizaValor} 
    />
  </View>
);

const styles = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
