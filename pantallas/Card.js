import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ item, description, image, price, onPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={image} // Update the path to your logo file
        style={styles.logo}
      />
      <Text style={styles.itemText}>{item}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <Text style={styles.priceText}>${price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,  // Establece el ancho de la imagen
    height: 100,  // Establece la altura de la imagen
    marginBottom: 10, // Espaciado entre la imagen y el texto del item
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,  // Espaciado entre el texto de la descripción y el precio
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,  // Espaciado entre el precio y el botón
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Card;

