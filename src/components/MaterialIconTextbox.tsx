import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


class MaterialIconTextbox extends React.Component<any, any> {
    
  constructor(props: any) {
     super(props);
   }
   public render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Icon
          name={this.props.icon1Name || "calendar"}
          style={styles.iconStyle}
        ></Icon>
        <TextInput
          placeholder={this.props.textInput1 || "Label"}
          placeholderTextColor="rgba(223,223,223,1)"
          style={styles.inputStyle}
        ></TextInput>
      </View>
    );
  }
  
}
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(0,0,0,1)",
      flexDirection: "row",
      alignItems: "center"
    },
    iconStyle: {
      color: "rgba(255,255,255,1)",
      fontFamily: "Roboto",
      fontSize: 24,
      paddingLeft: 8
    },
    inputStyle: {
      width: 327,
      height: 43,
      backgroundColor: "rgba(0,0,0,1)",
      color: "rgba(255,255,255,1)",
      alignSelf: "stretch",
      marginLeft: 16,
      paddingTop: 14,
      paddingRight: 5,
      paddingBottom: 8,
      fontSize: 16,
      fontFamily: "noto-sans-regular",
      lineHeight: 16
    }
  });
export default MaterialIconTextbox;
