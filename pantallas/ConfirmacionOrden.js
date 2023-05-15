import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmacionOrden = ({ route, navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [numeroOrden, setNumeroOrden] = useState(null);

  const { carrito } = route.params;

  useEffect(() => {
    const generarNumeroOrden = async () => {
      try {
        const lastOrderNumber = await AsyncStorage.getItem('lastOrderNumber');
        const newOrderNumber = lastOrderNumber !== null ? Number(lastOrderNumber) + 1 : 1;
        await AsyncStorage.setItem('lastOrderNumber', newOrderNumber.toString());
        setNumeroOrden(newOrderNumber);
      } catch (error) {
        console.error(error);
      }
    };
    generarNumeroOrden();
  }, []);

  const handleConfirmarOrden = () => {
    navigation.navigate('DetalleTuOrden', { nombre, apellido, telefono, carrito, numeroOrden });
  };

  const isFormValid = nombre !== '' && apellido !== '' && telefono !== '';

  return (
    <View style={styles.container}>
      <Text>Confirmación de la orden</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
      />

      {carrito.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleConfirmarOrden}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Confirmar Orden</Text>
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
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
});


export default ConfirmacionOrden;
