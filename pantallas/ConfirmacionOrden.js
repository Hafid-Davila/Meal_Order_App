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
        const lastOrderDate = await AsyncStorage.getItem('lastOrderDate');
        const lastOrderNumber = await AsyncStorage.getItem('lastOrderNumber');
        const today = new Date().toISOString().split('T')[0];  // obtenemos la fecha de hoy

        let newOrderNumber;
        if (lastOrderDate !== today) {
          // si la fecha del último pedido no es hoy, reiniciamos el número de pedido
          newOrderNumber = 1;
        } else {
          // de lo contrario, incrementamos el número de pedido
          newOrderNumber = lastOrderNumber !== null ? Number(lastOrderNumber) + 1 : 1;
        }

        // almacenamos la fecha de hoy y el nuevo número de pedido
        await AsyncStorage.setItem('lastOrderDate', today);
        await AsyncStorage.setItem('lastOrderNumber', newOrderNumber.toString());

        // rellenamos el número de pedido con ceros a la izquierda para que tenga tres dígitos
        setNumeroOrden(newOrderNumber.toString().padStart(3, '0'));
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
      <Text style={styles.title}>Confirmación de la orden</Text>


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
        <View key={index}>
          <Text style={styles.itemText}>{item.name} ${item.price}</Text>
        </View>
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

  title: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 24,
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

  itemText: {
    color: 'red',  // Aquí pones el color que quieras
    fontSize: 16,
    fontWeight: 'bold',
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


