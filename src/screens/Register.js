import React, {Component} from "react"
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native"

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  render() {
    return (
      <View>
        <TextInput
          autoFocus={true}
          placeholder="nome"
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286F4",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
  input: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    paddingLeft: 15,
  },
})

export default Register
