import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregar el nombre del restaurante */}
      <Text style={styles.restaurantName}>Burritos Olivas</Text>

      <Button
        title="Ordenar"
        onPress={() => navigation.navigate('Orden')}
      />
      <Button
        title="Iniciar sesión como administrador"
        onPress={() => navigation.navigate('InicioSesionAdmin')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 24, // Tamaño del texto
    fontWeight: 'bold', // Estilo del texto en negrita
    color: 'olive', // Color del texto
    marginBottom: 20, // Espaciado debajo del nombre del restaurante
  },
});

export default Inicio;
