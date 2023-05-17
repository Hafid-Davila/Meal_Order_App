import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './Card';

const Menu = ({ navigation }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito((prevState) => [...prevState, item]);
  };

  const items = [
    {
      id: '1',
      name: 'Burrito de Frijoles Con Queso',
      description: 'Esta es una descripción del artículo.',
      image: require('../images/BurritoFrijolesConQueso.png'),
      price: 35.00,
    },
    {
      id: '2',
      name: 'Burrito de Chicharrón',
      description: 'Esta es una descripción del artículo.',
      image: require('../images/BurritoChicharron.png'),
      price: 50.00,
    },
    {
      id: '3',
      name: 'Burrito de Picadillo',
      description: 'Esta es una descripción del artículo.',
      image: require('../images/BurritoPicadillo.png'),
      price: 35.00,
    },
    {
      id: '4',
      name: 'Burrito de Deshebrada',
      description: 'Esta es una descripción del artículo.',
      image: require('../images/BurritoDeshebrada.png'),
      price: 35.00,
    },
  ];

  const renderItem = ({ item }) => (
    <Card
      item={item.name}
      description={item.description}
      image={item.image}
      price={item.price}
      onPress={() => agregarAlCarrito(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={[styles.button, carrito.length === 0 ? styles.buttonDisabled : styles.buttonEnabled]}
        onPress={() => {
          if (carrito.length > 0) {
            navigation.navigate('ConfirmacionOrden', { carrito });
          }
        }}
        activeOpacity={0.7}
        disabled={carrito.length === 0}
      >
        <Text style={styles.buttonText}>Ordenar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F4',
    justifyContent: 'space-between', 
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 25,
    alignSelf: 'center',

  },
  buttonEnabled: {
    backgroundColor: '#4CAF50',
  },
  buttonDisabled: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Menu;
