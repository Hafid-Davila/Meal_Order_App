import React from 'react';
import { View, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/BurritosOlivasLogo.png')} // Update the path to your logo file
        style={styles.logo}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Orden')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Ordenar</Text>
        </TouchableOpacity>
        <Button
          title="Iniciar sesión como administrador"
          onPress={() => navigation.navigate('InicioSesionAdmin')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F6F5F4',
  },
  logo: {
    width: 300, // Adjust the width according to your logo size
    height: 300, // Adjust the height according to your logo size
    resizeMode: 'contain', // Preserve the aspect ratio of the logo
    marginTop:100,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Inicio;

