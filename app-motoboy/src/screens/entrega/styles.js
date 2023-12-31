import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedido: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: 350,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        height: 42,
        backgroundColor: '#D91A3D',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    motoboy: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: '#DDD',
        alignSelf: 'center',
        margin: 10,
    }
});

export default styles;