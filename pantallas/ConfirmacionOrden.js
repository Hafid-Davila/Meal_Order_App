import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfirmacionOrden = ({ navigation }) => {
  const carrito = navigation.getParam('carrito', []);

  useEffect(() => {
    if (!carrito || carrito.length === 0) {
      navigation.goBack();
    }
  }, [carrito, navigation]);

  return (
    <View style={styles.container}>
      <Text>Confirmación de la orden</Text>
      {/* Renderizar los artículos del carrito aquí */}
      {carrito.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F5F4',
  },
});

export default ConfirmacionOrden;

