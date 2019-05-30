/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// O
 import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';


export default class App extends Component {

  constructor(props){
    super(props)
    //O state serve para armazenar a estado da variavel
    //Naquele momento
    this.state = {
       contador: 0
      }
}
 // Crie uma função void
 // Com o nome onPress
onPress = (acao)  => {
  if (acao == '+') {
    this.setState({
      //serve para atribuir o valor para as variaves
      //que foram criadas
      contador: this.state.contador + 1
    })
  } else {
    this.setState({
      contador: this.state.contador ===0 ? 0 :this.state.contador - 1 
    })
  }
}

// O render é responsavel por exibir todo conteudo
// na tela
render() {
    return (
      <View>
      <TouchableOpacity  style={estilo.botao} onPress={()=>{this.onPress('+')}}>  
      <Text style={estilo.descricao}>Incrementar</Text>
      </TouchableOpacity>
      <Text style={estilo.contador}>
       {this.state.contador !== 0 
        ? this.state.contador 
        : 0}
      </Text>
      <TouchableOpacity  style={estilo.botao} onPress={()=>{this.onPress('-')}}>  
      <Text style={estilo.descricao}>Decrementar</Text>
      </TouchableOpacity>
      
      </View>
    );
  }
}
// Responsavel por criar os elementos de estilização
 const estilo = StyleSheet.create({
   botao: {
    marginTop:100, 
    padding: 20,
     backgroundColor: '#ccff33',
   },
   descricao: {
     textAlign: 'center',
     fontSize: 60
   },
   contador: {
    textAlign: 'center',
    fontSize: 60,
    color: 'red'
  }
   
 })
 


