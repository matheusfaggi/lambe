import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, Text, View, Platform, Image } from "react-native"
import { Gravatar } from "react-native-gravatar"

import icon from "../../assets/imgs/icon.png"

class Header extends Component {
  render() {
    const { email } = this.props
    const name = this.props.name || "Anonymous"
    const gravatar = email ? (
      <Gravatar options={{ email, secure: true }} style={styles.avatar} />
    ) : null
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    padding: 10,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  title: {
    color: "#000",
    fontFamily: "shelter",
    fontSize: 28,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    fontSize: 10,
    color: "#888",
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
})
const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
  }
}

export default connect(mapStateToProps)(Header)
