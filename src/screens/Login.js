import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { connect } from "react-redux"
import { login } from "../store/actions/user-action"

class Login extends Component {
  state = {
    name: "Matheus Faggi",
    email: "",
    password: "",
  }
  login = () => {
    this.props.onLogin({ ...this.state })
    this.props.navigation.navigate("Profile")
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          autoFocus={true}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Register")}
          style={styles.button}>
          <Text>Criar nova Conta...</Text>
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
  input: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
  },
})
const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user)),
  }
}
// export default Login
export default connect(null, mapDispatchToProps)(Login)
