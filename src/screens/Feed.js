import React, { Component } from "react"
import { StyleSheet, FlatList, View } from "react-native"
import { connect } from "react-redux"
import { fetchPosts } from "../store/actions/post-action"

import Header from "../Components/Header"
import Post from "../Components/Post"

class Feed extends Component {
  componentDidMount = () => {
    this.props.onFetchPosts()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.props.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
})

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
