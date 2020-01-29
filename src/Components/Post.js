import React, { Component } from "react"
import { StyleSheet, View, Image, Dimensions } from "react-native"
import { connect } from "react-redux"
import Author from "./Author"
import Comments from "./Comments"
import AddComment from "./AddComment"

const { width } = Dimensions.get("screen")
class Post extends Component {
  render() {
    const addComment = this.props.name ? (
      <AddComment postId={this.props.id} />
    ) : null
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.image }} style={styles.image} />
        <Author nickname={this.props.nickname} email={this.props.email} />
        <Comments comments={this.props.comments} />
        {addComment}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: (width * 3) / 4,
    resizeMode: "contain",
  },
})

const mapStateToProp = ({ user }) => {
  return { name: user.name }
}

export default connect(mapStateToProp)(Post)
