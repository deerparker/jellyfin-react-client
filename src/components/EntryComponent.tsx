//import React, { Component } from "react";
import React, { useState,useCallback, useEffect, Component } from "react";
//import { View, TextInput, Button, Image } from "react-native";
import stylesglobal from "./Style";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import connectToServer from "../actions/ConnectAction";
import { useSelector } from "../utilities/storage/store";
import SplashScreen from "react-native-splash-screen";

import { StyleSheet, View, ImageBackground, Button, TextInput, Image, Text } from "react-native";
//import MaterialIconTextbox from "../components/MaterialIconTextbox";
//import MaterialButtonPrimary from "./MaterialButtonPrimary";


const EntryComponent: React.FC = () => {
  const dispatch = useDispatch()
  const connectionStatus = useSelector(state => state.connectionStatus)

  const [server, setServer] = useState(connectionStatus.serverAddress || '')

  const handleSubmit = useCallback(() => {
      dispatch(connectToServer(server));
  }, [dispatch, server])

  useEffect(() => {
    SplashScreen.hide(); 
  }, []);
  
  return connectionStatus.connectStatus ? (
    <Redirect to="/login" />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/jellyfin-dance.png")}
        resizeMode="contain"
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImage_imageStyle}
      >
        <View style={styles.rect}>
          <View style={styles.rect2}></View>
              <Formik
              initialValues={{}}
              onSubmit={handleSubmit}
              render={({ handleSubmit }) => (
              

                  <View style={styles.rect3}>

                    <TextInput
                    style={[stylesglobal.text, stylesglobal.inputBox]}
                    onChangeText={server => setServer(server)}
                    value={server}
                    placeholder="add hostname"
                    placeholderTextColor="grey"
                  />

{/*                     <MaterialButtonPrimary
                      text1="Connect"
                      style={styles.materialButtonPrimary}
                      onPress={handleSubmit} >

                      </MaterialButtonPrimary> */}

                  <View style={stylesglobal.loginInput}>
                      <Button title='Connect' onPress={handleSubmit} />
                  </View>
                    <Image
                        source={require("../assets/images/jellyfin-logo.png")}
                        resizeMode="contain"
                        style={styles.jellyfinLogo}
                    ></Image>
                    </View>
                )}
              />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    backgroundColor: "rgba(16,16,16,1)",
    flex: 1
  },
  backgroundImage_imageStyle: {},
  rect: {
    flex: 1
  },
  rect2: {
    flex: 0.5,
    alignSelf: "stretch",
    padding: 0
  },
  rect3: {
    flex: 0.5,
    padding: 0
  },
  materialIconTextbox: {
    width: 279,
    height: 43,
    marginTop: 273,
    alignSelf: "center"
  },
  materialButtonPrimary: {
    width: 279,
    height: 31,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 23,
    marginTop: 8,
    alignSelf: "center"
  },
  jellyfinLogo: {
    width: 100,
    height: 100,
    borderRadius: 54,
    marginTop: -216,
    marginLeft: 37
  }
});


export default EntryComponent;
