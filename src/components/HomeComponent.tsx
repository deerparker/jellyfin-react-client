import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import styles from "./Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { useStore } from "react-redux";
import { StaticRouter } from "react-router";



interface HomeComponentProps {
    userId: string;
}

interface HomeComponentState {
    demoText: string;
}

const HomeComponent: React.FC = () => {

    const userId = useSelector(state => state.authCredentials.userId)
    
    const [demoText, setDemoText] = useState('')
    //let resumableItemArtwork = {uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'}
    let resumableItemArtworkURL = {uri: 'https://jellyfin.deerparker.com/emby/Items/46fc04b16c01361a799d14bf69b88238/Images/Thumb'}
    //let testartwork = {uri: ""}

    useEffect(() => {
        (async () => {
            const apiClient = getApiClient();
            let newDemoText;
            try {
                newDemoText = await apiClient.getResumableItems(userId);
                //console.log("1. " + resumableItemArtwork.uri);
                //const auth = await getApiClient().authenticateUserByName(username, password);
                //getApiClient().setAuthenticationInfo(auth.AccessToken, auth.User.Id);
                let tempstring = ("https://jellyfin.deerparker.com/emby/Items/" + newDemoText.Items[0].Id + "/Images/Thumb");
                resumableItemArtworkURL = {uri: tempstring};
                
                console.log("1.1. " + resumableItemArtworkURL.uri);
                //resumableItemArtwork = {uri: resumableItemArtworkURL};
                //console.log("2. " + resumableItemArtwork.uri);
                newDemoText = newDemoText.Items[0].Name;
            } catch {
                newDemoText = "NOT CONNECTED";
            }
            setDemoText(newDemoText);
        })();
    }, [userId])

        return (
          <View style={styles.container}>
            <Text style={[styles.biggerText]}>
                    HOME (your resumable items):
                    {"\n"}
                {"\n"}
            </Text>
            <Image source={resumableItemArtworkURL} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
            <Text style={[styles.biggerText]}>
              {demoText}
            </Text>
          </View>
        );
}


export default HomeComponent;
