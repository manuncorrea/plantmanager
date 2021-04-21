import React, {useState} from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';

export function Welcome() {
  //armazenar estado
  const [visible, setVisible] = useState(false);

  function handleVisible () {
    setVisible(true)
  }

  function handleOculteVisible () {
    setVisible(false)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      { visible && // mostrar imagem apenas se o visible for verdadeiro
        <Image source={wateringImg} style={styles.image} />
      }

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title=">"></Button>
  
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  image: {
    width: 292,
    height: 284,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 38,
    color: colors.heading
    
  },

})