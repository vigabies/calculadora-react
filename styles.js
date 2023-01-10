//cor verde significa que é função
//container significa a maior parte da tela, tudo dentro do container
//scss

import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },

  Opacity: {
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    width: 55,
    marginBottom: '3%',
  },

  Calcular: {
    backgroundColor: '#C0C0C0',
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 8,
  },

  Text: {
    fontSize: 16,
    color: '#4F4F4F',
    textAlign: 'center',
    fontWeight: '400',
  },

  Title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#363636	',
    textAlign: 'center',
  },

  Linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
  },

  Input: {
    backgroundColor: '#C0C0C0',
    borderRadius: 25,
    color: '#363636',
    marginLeft: '3%',
    marginRight: '3%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: '5%',
  },

  Input2: {
    backgroundColor: '#C0C0C0',
    borderRadius: 25,
    color: '#363636',
    marginLeft: '3%',
    marginRight: '3%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingLeft: '5%',
  },

  Resultado: {
    backgroundColor: '#C0C0C0',
    borderRadius: 6,
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    paddingLeft: '5%',
  },

  Selecionar: {
    borderWidth: 1,
    borderColor: '#1C1C1C	',
  },
});
export default Styles;
