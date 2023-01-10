import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './styles';
import {calculo} from './function';

export default function App() {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState(0);

  // console.log(text1); -- servem para aparecer no terminal
  // console.log(text2);
  // as const são variaveis constantes

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>CALCULATOR</Text>

      <View style={Styles.Linha}>
        <TouchableOpacity
          onPress={() => setOperacao('+')}
          style={[
            Styles.Opacity,
            operacao === '+' ? Styles.Selecionar : false,
          ]}>
          <Text style={Styles.Text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOperacao('-')}
          style={[
            Styles.Opacity,
            operacao === '-' ? Styles.Selecionar : false,
          ]}>
          <Text style={Styles.Text}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOperacao(':')}
          style={[
            Styles.Opacity,
            operacao === ':' ? Styles.Selecionar : false,
          ]}>
          <Text style={Styles.Text}>:</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOperacao('x')}
          style={[
            Styles.Opacity,
            operacao === 'x' ? Styles.Selecionar : false,
          ]}>
          <Text style={Styles.Text}>x</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        value={text1}
        onChangeText={text => {
          setText1(text);
        }}
        keyboardType={'number-pad'}
        style={Styles.Input}></TextInput>

      <TextInput
        value={text2}
        onChangeText={text => {
          setText2(text);
        }}
        keyboardType={'number-pad'}
        style={Styles.Input2}></TextInput>

      <TouchableOpacity
        onPress={() => calculo(text1, text2, operacao, setResultado)}
        style={Styles.Calcular}>
        <Text style={Styles.Text}> CALCULAR</Text>
      </TouchableOpacity>

      <View style={Styles.Resultado}>
        <Text>{resultado}</Text>
      </View>

    </View>
  );
}
