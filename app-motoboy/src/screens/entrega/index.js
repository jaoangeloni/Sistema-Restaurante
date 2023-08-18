import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import ItemPedido from '../../components/item';

const EntregaScreen = ({ navigation }) => {

    const [pedidos, setPedidos] = useState([]);
    const uri = 'http://localhost:3000/pedido';
    useEffect(() => {
        fetch(uri + '/entrega', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
            });
    }, []);

    const concluirPedido = (id, clienteId) => {
        const corpo = {
            id: id,
            dataEntrega: new Date(),
        }
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        };
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 202) {
                    alert('Concluído');
                    navigation.navigate('HomeScreen');
                } else {
                    alert('Erro ao concluir pedido!');
                }
            });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                renderItem={({ item }) => (
                    <View style={styles.pedido}>
                        <Text style={styles.motoboy}>ID motoboy: {item.motoboyId}</Text>
                        <Text style={styles.text}>Cliente: {item.cliente.nome}</Text>
                        <Text style={styles.text}>CEP: {item.cliente.enderecoCep}</Text>
                        <Text style={styles.text}>Nº Casa:{item.cliente.enderecoNumero}</Text>
                        <Text style={styles.text}>Complemento:{item.cliente.enderecoComplemento}</Text>
                        <Text style={styles.text}>TOTAL: R${item.valorPedido + item.valorEntrega}</Text>
                        <ItemPedido item={item.itens} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => concluirPedido(item.id, item.clienteId)}
                        >
                            <Text style={styles.buttonText}>Concluído</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default EntregaScreen;