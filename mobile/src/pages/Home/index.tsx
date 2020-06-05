import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Alert,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface UFResponse {
  sigla: string;
}

interface CityResponse {
  nome: string;
}

const Home = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUF] = useState<string>('0');
  const [selectedCity, setSelectedCity] = useState<string>('0');

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get<UFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      .then((response) => {
        const ufsInitials = response.data.map((uf) => uf.sigla).sort();
        setUfs(ufsInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf !== '0') {
      axios
        .get<CityResponse[]>(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
        )
        .then((response) => {
          const citiesNames = response.data.map((city) => city.nome).sort();
          setCities(citiesNames);
        });
    }
  }, [selectedUf]);

  function handleSelectUf(uf: string) {
    setSelectedUF(uf);
    setSelectedCity('0');
    setCities([]);
  }

  function handleSelectCity(city: string) {
    setSelectedCity(city);
  }

  function handleNavigationToPoints() {
    const city = selectedCity;
    const uf = selectedUf;
    if (city === '0' || uf === '0') {
      Alert.alert(
        'Atenção',
        'Para prosseguir, primeiro selecione uma localidade.'
      );
    } else {
      navigation.navigate('Points', { uf, city });
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
      </View>
      <View style={styles.footer}>
        <PickerSelect
          style={pickerSelectStyles}
          placeholder={{
            label: 'Escolha uma UF',
            value: null,
            key: '0',
          }}
          Icon={() => <Icon name="chevron-down" size={30} color="#777" />}
          onValueChange={handleSelectUf}
          items={ufs.map((uf) => ({ label: uf, value: uf }))}
        />
        <PickerSelect
          style={pickerSelectStyles}
          placeholder={{
            label: 'Escolha uma cidade',
            value: null,
            key: '0',
          }}
          Icon={() => <Icon name="chevron-down" size={30} color="#777" />}
          onValueChange={handleSelectCity}
          items={cities.map((city) => ({ label: city, value: city }))}
        />

        <RectButton style={styles.button} onPress={handleNavigationToPoints}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    backgroundColor: '#FFF',
    marginBottom: 8,
    color: '#777',
    paddingRight: 30,
  },
  inputAndroid: {
    height: 60,
    backgroundColor: '#FFF',
    marginBottom: 8,
    color: '#777',
    paddingRight: 30,
  },
  iconContainer: {
    top: 15,
    right: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});

export default Home;
