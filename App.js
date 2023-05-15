import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './pantallas/Inicio';
import Orden from './pantallas/Orden';
import ConfirmacionOrden from './pantallas/ConfirmacionOrden';
import InicioSesionAdmin from './pantallas/InicioSesionAdmin';
import Admin from './pantallas/Admin';
import DetalleTuOrden from './pantallas/DetalleTuOrden';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Orden" component={Orden} />
        <Stack.Screen name="ConfirmacionOrden" component={ConfirmacionOrden} />
        <Stack.Screen name="DetalleTuOrden" component={DetalleTuOrden} />
        <Stack.Screen name="InicioSesionAdmin" component={InicioSesionAdmin} />
        <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
