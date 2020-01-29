import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from "react-native"

import { connect } from "react-redux"
import ImagePicker from "react-native-image-picker"

import { addPost } from "../store/actions/post-action"

const { width } = Dimensions.get("window")

const noUser = "Você precisa estar logado para adicionar imagens"

class AddPhoto extends Component {
  state = {
    image: null,
    comment: "",
  }

  pickImage = () => {
    if (!this.props.name) {
      Alert.alert("Falha!", noUser)
      return
    }
    ImagePicker.showImagePicker(
      {
        title: "Escolha a imagem",
        maxHeight: 600,
        maxWidth: 800,
      },
      res => {
        if (!res.didCancel) {
          this.setState({ image: { uri: res.uri, base64: res.data } })
        }
      },
    )
  }

  save = async () => {
    if (!this.props.name) {
      Alert.alert("Falha!", noUser)
      return
    }
    if (!this.state.image) {
      Alert.alert("Falha!", "Por favor insira uma imagem")
      return
    }
    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    })
    this.setState({ image: null, comment: "" })
    this.props.navigation.navigate("Feed")
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <TouchableOpacity style={styles.buttom} onPress={this.pickImage}>
            <Text style={styles.buttomText}>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Comentário da foto"
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })}
            editable={this.props.name != null}
          />
          <TouchableOpacity style={styles.buttom} onPress={this.save}>
            <Text style={styles.buttomText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === "ios" ? 30 : 10,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "90%",
    height: width / 2,
    backgroundColor: "#EEE",
    marginTop: 10,
  },
  image: {
    width,
    height: width / 2,
    resizeMode: "center",
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4",
  },
  buttomText: {
    fontSize: 20,
    color: "#FFF",
  },
  input: {
    marginTop: 20,
    width: "90%",
  },
})

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)
// export default AddPhoto
