import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalleTuOrden = ({ route }) => {
  const { nombre, apellido, carrito } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola {nombre}.</Text>

      <Text style={styles.title}> ¡Muchas gracias por tu preferencia! </Text>

      <Text style={styles.title}>  Tu orden estara lista en 15 minutos.</Text>

      <Text style={styles.text}>Tu Orden:</Text>
      {carrito.map((item, index) => (
        <Text key={index} style={styles.text}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DetalleTuOrden;
