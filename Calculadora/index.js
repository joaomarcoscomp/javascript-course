import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

export * from './src/components/Painel';
export * from './src/components/Resultado';
export * from './src/components/Topo';

const Calculadora = () => (
  <App />
);

AppRegistry.registerComponent(appName, () => App);
