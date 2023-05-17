import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetalleTuOrden = ({ route }) => {
  const { nombre, numeroOrden, carrito } = route.params;

  // Calcula el total sumando los precios de cada artículo en el carrito
  const total = carrito.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hola {nombre}</Text>

        <Text style={styles.title}> ¡Muchas gracias por tu preferencia! </Text>

        <Text style={styles.title}>  Tu orden estará lista en 15 minutos.</Text>

        <Text style={styles.text}>Número de orden ({numeroOrden}) incluye:</Text>
        {carrito.map((item, index) => (
          <Text key={index} style={styles.text}>{item.name} ${item.price}</Text>
        ))}
        
        <Text style={styles.totalText}>Tu total es: ${total.toFixed(2)}</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../images/BurritosDonJuanLogoDespedida.png')} // Update the path to your logo file
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // This will push the logo towards the bottom
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
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: 'green',  // Aquí estableces el color del texto a verde
  },
  logoContainer: {
    alignItems: 'center', // This will center the logo horizontally
  },
  logo: { 
    width: 200, // Adjust the width according to your logo size
    height: 200, // Adjust the height according to your logo size
  },
});

export default DetalleTuOrden;


