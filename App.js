import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { AppRegistry } from 'react-native';
import Inicio from './pantallas/Inicio';
import Orden from './pantallas/Orden';
import ConfirmacionOrden from './pantallas/ConfirmacionOrden';
import InicioSesionAdmin from './pantallas/InicioSesionAdmin';
import Admin from './pantallas/Admin';

const AppNavigator = createStackNavigator(
  {
    Inicio: { screen: Inicio },
    Orden: { screen: Orden },
    ConfirmacionOrden: { screen: ConfirmacionOrden },
    InicioSesionAdmin: { screen: InicioSesionAdmin },
    Admin: { screen: Admin },
  },
  {
    initialRouteName: 'Inicio',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
AppRegistry.registerComponent('main', () => AppContainer);
