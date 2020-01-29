/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react"
import {StyleSheet, View, Text} from "react-native"
import Header from "./src/Components/Header"
import Post from "./src/Components/Post"

export default class App extends Component {
  render() {
    const comments = []
    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require("./assets/imgs/fence.jpg")} comments={comments} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
