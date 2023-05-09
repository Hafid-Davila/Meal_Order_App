import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Orden = ({ navigation }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menú</Text>

      {/* Aquí puedes agregar los elementos de tu menú */}
      <View style={styles.card}>
        <Text style={styles.menuItemName}>Burrito 1</Text>
        <Text style={styles.menuItemPrice}>$9.99</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => agregarAlCarrito({ name: 'Burrito 1', price: 9.99 })}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
      {/* Fin de los elementos de menú */}

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('ConfirmacionOrden', { carrito })}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Confirmación de orden</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F4',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  menuItemName: {
    fontSize: 18,
    marginBottom: 5,
  },
  menuItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#FFA000',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Orden;
