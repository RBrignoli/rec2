import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { useState, useContext } from 'react'
import { Picker } from '@react-native-picker/picker'
import { AppContext } from '../scripts/appContext'

export default telaInicio = () => {
    const { cidade, setCidade } = useContext(AppContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione a cidade para previsão do tempo</Text>
            <Picker
                style={styles.pickerInput}
                selectedValue={cidade}
                onValueChange={(item) => setCidade(item)}
            >
                <Picker.Item label={'Selecione uma cidade'} value={null} />
                {cities.map((item, index) => (
                    <Picker.Item key={index} label={item.label} value={item.value} />
                ))}
            </Picker>
            {cidade ? (
                <Link href='/previsao'>
                    <Text style={styles.linkText}>Ir para previsão do tempo</Text>
                </Link>
            ) : (
                <Text style={styles.errorText}>Selecione uma cidade para continuar</Text>
            )}
        </View>
    )
}

const cities = [
    { label: 'Aracaju', value: 'Aracaju' },
    { label: 'Belém', value: 'Belém' },
    { label: 'Belo Horizonte', value: 'Belo Horizonte' },
    { label: 'Boa Vista', value: 'Boa Vista' },
    { label: 'Brasília', value: 'Brasília' },
    { label: 'Campo Grande', value: 'Campo Grande' },
    { label: 'Cuiabá', value: 'Cuiabá' },
    { label: 'Curitiba', value: 'Curitiba' },
    { label: 'Florianópolis', value: 'Florianópolis' },
    { label: 'Fortaleza', value: 'Fortaleza' },
    { label: 'Goiânia', value: 'Goiânia' },
    { label: 'João Pessoa', value: 'João Pessoa' },
    { label: 'Macapá', value: 'Macapá' },
    { label: 'Maceió', value: 'Maceió' },
    { label: 'Manaus', value: 'Manaus' },
    { label: 'Natal', value: 'Natal' },
    { label: 'Palmas', value: 'Palmas' },
    { label: 'Porto Alegre', value: 'Porto Alegre' },
    { label: 'Porto Velho', value: 'Porto Velho' },
    { label: 'Recife', value: 'Recife' },
    { label: 'Rio Branco', value: 'Rio Branco' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Salvador', value: 'Salvador' },
    { label: 'São Luís', value: 'São Luís' },
    { label: 'São Paulo', value: 'São Paulo' },
    { label: 'Teresina', value: 'Teresina' },
    { label: 'Vitória', value: 'Vitória' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    pickerInput: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        elevation: 3,
    },
    linkText: {
        marginTop: 20,
        color: '#007bff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    errorText: {
        marginTop: 20,
        color: '#ff0000',
        fontSize: 14,
    },
})
