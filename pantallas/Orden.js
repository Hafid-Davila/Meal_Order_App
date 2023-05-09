import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './Card';

const Orden = ({ navigation }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito((prevState) => [...prevState, item]);
  };

  return (
    <View style={styles.container}>
      <Card
        item="Articulo 1"
        onPress={() => agregarAlCarrito('Articulo 1')}
      />
      {/* Agregar más artículos de la misma manera */}
      <Card
        item="Articulo 2"
        onPress={() => agregarAlCarrito('Articulo 2')}
      />
      {/* ... */}

      {/* Botón para navegar a ConfirmacionOrden con el carrito actual */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConfirmacionOrden', { carrito })}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Confirmación de orden</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Orden;


