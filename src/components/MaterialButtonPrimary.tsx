import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


class MaterialButtonPrimary extends React.Component<any, any> {
    
   constructor(props: any) {
      super(props);
    }
    public render() {
      return (
        <TouchableOpacity style={[styles.container, this.props.style]}>
          <Text style={styles.caption}>{this.props.text1 || "BUTTON"}</Text>
        </TouchableOpacity>
      );
    }
}  
    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#2196F3",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 16,
        paddingLeft: 16,
        elevation: 2,
        minWidth: 88,
        borderRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 5
      },
      caption: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: "noto-sans-700"
      }
    });


export default MaterialButtonPrimary;
