import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    var config = {
      // config from your firebase 
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    var email = 'usuario@gmail.com'; 
    var senha = '123usuario';

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        var mensagemErro = '';
        if(erro.code == 'auth/weak-password') {
          mensagemErro = 'A senha presica ter no mínimo 6 caracteres!'
        }
        alert( mensagemErro );
      }
    );
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();

    usuario.onAuthStateChanged(
      (usuarioCurrent) => {
        if( usuarioCurrent ) {
          alert('Usuário está logado');
        } else {
          alert('Usuário não está logado');
        }
      }
    );
  
    /*const usuarioAtual = usuario.currentUser;

    if( usuarioAtual ) {
      alert('Usuário está logado');
    } else {
      alert('Usuário não está logado');
    }*/
  }

  deslogarUsuario() {
    const usuario = firebase.auth();

    usuario.signOut();
  }

  logarUsuario() {
    var email = 'usuario@gmail.com'; 
    var senha = '123usuario';

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(email, senha).catch(
      (erro) => {
        // Customizar mensagem de erro
        var mensagemErro = '';
        if(erro.code == 'auth/wrong-password') {
          mensagemErro = 'A senha está incorreta!'
        }
        alert( mensagemErro );
      }
    );
  }

  render() {
    return (
      <View>
        <Button
          onPress={ () => {this.cadastrarUsuario();} }
          title='Cadastrar usuarios'
          color='#841584'
          accessibilityLabel='Cadastrar usuarios'
        />
        <Button
          onPress={ () => {this.verificarUsuarioLogado();} }
          title='Verificar usuário logado'
          color='#841584'
          accessibilityLabel='Verificar usuário logado'
        />
        <Button
          onPress={ () => {this.deslogarUsuario();} }
          title='Deslogar usuário'
          color='#841584'
          accessibilityLabel='Deslogar usuário'
        />
        <Button
          onPress={ () => {this.logarUsuario();} }
          title='Logar usuário'
          color='#841584'
          accessibilityLabel='Logar usuário'
        />
      </View>
    );
  }
}
