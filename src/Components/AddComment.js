import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
} from "react-native"
import { connect } from "react-redux"
import { addComment } from "../store/actions/post-action"
import Icon from "react-native-vector-icons/FontAwesome5"

class AddComment extends Component {
  state = {
    comment: "",
    editMode: false,
  }

  handleAddComment = () => {
    this.props.onAddComment({
      id: this.props.postId,
      comment: {
        nickname: this.props.name,
        comment: this.state.comment,
      },
    })
    this.setState({ comment: "", editMode: false })
  }

  render() {
    const { comment, editMode } = this.state
    let commentArea = null
    if (editMode) {
      commentArea = (
        <View style={styles.container}>
          <TextInput
            placeholder="Escreva o comentário"
            value={comment}
            onChangeText={comment => this.setState({ comment })}
            onSubmitEditing={this.handleAddComment}
            autoFocus={true}
          />
          <TWF onPress={() => this.setState({ editMode: false })}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </View>
      )
    } else {
      commentArea = (
        <TWF onPress={() => this.setState({ editMode: true })}>
          <View style={styles.container}>
            <Icon name="comment-dots" size={25} color="#555" />
            <Text style={styles.caption}>Adicione um comentário</Text>
          </View>
        </TWF>
      )
    }
    return <View style={{ flex: 1 }}>{commentArea}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: "#ccc",
  },
  input: {
    width: "90%",
  },
})

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: payload => dispatch(addComment(payload)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
