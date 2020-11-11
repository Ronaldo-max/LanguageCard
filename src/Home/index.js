import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

function App({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Image source={require('../Images/Logo.png')} style={{ width: 200, height: 200, marginBottom: 30, }} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jogar')}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default App;