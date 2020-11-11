import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function App(props) {
    return (
        <View>
            <Text style={styles.text}>{props.eng}{props.por}</Text>
        </View>
    );
}

export default App;


const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        color: "#000",
    },
});