import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../scripts/appContext';

const PrevisaoDoTempo = () => {
    const { cidade } = useContext(AppContext);
    const [weather, setWeather] = useState();

    const fetchWeather = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e&units=metric`);
        const data = await response.json();
        setWeather(data);
        console.log(data);
    };

    useEffect(() => {
        fetchWeather();
    }, []);
    console.log(weather)

    return (
        <View style={styles.container}>
            {weather ? (
                <View style={styles.weatherInfo}>
                    <Text style={styles.cityName}>Cidade: {weather.name}</Text>
                    <Text style={styles.temperature}>Temperatura: {weather.main.temp}°C</Text>
                    <Text style={styles.windSpeed}>Velocidade do vento: {weather.wind.speed} m/s</Text>
                    <Text style={styles.humidity}>Humidade: {weather.main.humidity}%</Text>
                    <Text style={styles.sunrise}>Nascer do sol: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.sunset}>Pôr do sol: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</Text>
                </View>
            ) : (
                <Text style={styles.loadingText}>Carregando previsão do tempo...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    weatherInfo: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: '90%',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    weatherDescription: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
    },
    temperature: {
        fontSize: 22,
        marginBottom: 10,
        color: '#ff8c00',
    },
    windSpeed: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    humidity: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    sunrise: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    sunset: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    loadingText: {
        fontSize: 18,
        color: '#007bff',
    },
});

export default PrevisaoDoTempo;
