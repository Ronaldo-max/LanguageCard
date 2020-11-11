import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

function App({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Eng_Por')}>
                <Text style={styles.buttonText}>Inglês e Português</Text>
            </TouchableOpacity>
        </View>
    );
}

export default App;