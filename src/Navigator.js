import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome5"
import { createStackNavigator } from "react-navigation-stack"

import Feed from "./screens/Feed"
import AddPhoto from "./screens/AddPhoto"
import Profile from "./screens/Profile"
import Login from "./screens/Login"
import Register from "./screens/Register"

const authRouter = createStackNavigator(
  {
    Login: { screen: Login, navigationOptions: { title: "Login" } },
    Register: { screen: Register, navigationOptions: { title: "Register" } },
  },
  {
    initialRouteName: "Login",
  },
)
const loginOrProfileRouter = createSwitchNavigator(
  {
    Profile: Profile,
    Auth: createAppContainer(authRouter),
  },
  {
    initialRouteName: "Auth",
  },
)

const MenuRoutes = {
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({ tintColor }) => {
        return <Icon size={25} name="home" color={tintColor} />
      },
    },
  },
  Add: {
    screen: AddPhoto,
    navigationOptions: {
      title: "AddPhoto",
      tabBarIcon: ({ tintColor }) => {
        return <Icon size={25} name="camera" color={tintColor} />
      },
    },
  },
  Profile: {
    screen: createAppContainer(loginOrProfileRouter),
    navigationOptions: {
      title: "profile",
      tabBarIcon: ({ tintColor }) => {
        const iconName = "home"
        return <Icon size={25} name="user" color={tintColor} />
      },
    },
  },
}

const MenuConfig = {
  initialRouteName: "Feed",
  tabBarOptions: {
    showLabel: false,
  },
}

export default createAppContainer(
  createBottomTabNavigator(MenuRoutes, MenuConfig),
)
