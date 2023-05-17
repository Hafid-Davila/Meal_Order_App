import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const InicioSesionAdmin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bajo Construcción</Text>
            <Image source={require('../images/BajoConstruccion.png')} style={styles.image} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
});

export default InicioSesionAdmin;
