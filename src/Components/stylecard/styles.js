import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#67CDEB',
    },

    containerButton: {
        marginBottom: 10,
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        backgroundColor: '#F3EBDE',
        padding: 15,
        borderRadius: 20,
        width: '60%',
        marginTop: 5,
    },

    buttontext: {
        textAlign: "center",
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },

    cardArea: {
        marginBottom: 10,
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },

    card: {
        backfaceVisibility: 'hidden',
        width: '70%',
        height: '120%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F0ED37',
    },

    cardBack: {
        backgroundColor: '#FF9F2D',
        position: "absolute",
    },

    audiotrack: {
        position: "absolute",
        left: 160,
        top: 30,
    },
});
