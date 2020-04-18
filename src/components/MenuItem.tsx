import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


class MenuItem extends React.Component<any, any> {
    
  constructor(props: any) {
     super(props);
   }

   public render() {
    return (
      <View style={[styles.container, this.props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.menuItemRow}>
          <MaterialCommunityIconsIcon
            name={this.props.icon1Name || "cards-heart"}
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.menuItemTitle}>{this.props.title || "Favourites"}</Text>
          <MaterialCommunityIconsIcon
            name="chevron-right"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  button: {
    //height: 40,
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(149,149,149,1)",
    fontSize: 28,
    //height: 28,
    //width: 28,
    flex: 10,
    margin: 5
  },
  menuItemTitle: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "noto-sans-700",
    textAlign: "left",
    flex: 80,
    marginLeft: 13,
    marginTop: 10
  },
  menuItemRow: {
    //height: 40,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});

export default MenuItem;
