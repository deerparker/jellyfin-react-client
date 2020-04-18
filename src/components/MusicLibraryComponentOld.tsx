import React, { useState, useEffect, Component } from "react";
import { View, Text } from "react-native";

import styles from "./Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";

import Carousel from 'react-native-snap-carousel';
import AlbumCarousel from "./AlbumCarousel";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

interface MusicLibraryComponentProps {
    userId: string;
}

interface MusicLibraryComponentState {
    demoText: string;
}

const MusicLibraryComponent: React.FC = () => {

    const userId = useSelector(state => state.authCredentials.userId)
    const [demoText, setDemoText] = useState('')

    //REFERENCE VARIABLES FROM LANGUAGE TABLE
    const lastPlayedText = "Last Played";
    const favouritesText = "Favourites";
    const downloadsText = "Downloads";
    const playlistText = "Playlists";
    const albumsText = "Albums";
    const songsText = "Songs";
    const artistsText = "Artists";
    const size = 20;
    const color = "white";

    /*
    useEffect(() => {
        (async () => {
            const apiClient = getApiClient();
            let newDemoText;
            try {
                newDemoText = await apiClient.getResumableItems(userId); //DECIDE WHAT API CALL TO PUT IN HERE
                newDemoText = JSON.stringify(newDemoText);
            } catch {
                newDemoText = "NOT CONNECTED";
            }
            setDemoText(newDemoText);
        })();
    }, [userId])
    */
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
                 <View style={{flex:0.5, flexDirection: 'row', height: 30, backgroundColor: '#414141'}} >   
                    <Text style={{color: 'white'}}>{"Music Library"}</Text>
                    
                </View>  
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#414141'}} >
                   <Text style={{flex: 1, color: 'white', fontSize: 25}}>{lastPlayedText}</Text>
                </View>
                 <View style={{flex:3, flexDirection: 'row', height: 30, backgroundColor: '#101010'}}>
                   <AlbumCarousel></AlbumCarousel>
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >
                   <MaterialIcons name="favorite" size={size} color={color} style={{flex:1, padding: 20}}/>  
                   <Text style={{flex: 5, fontSize: 25, color: 'white', justifyContent: 'center'}}>{favouritesText}</Text>
                   <MaterialIcons name="chevron-right" size={size} color={color} style={{flex:1, padding: 20}}/>  
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >
                   <MaterialIcons name="get-app" size={size} color={color} style={{flex:1, padding: 20}}/>  
                   <Text style={{flex: 5, fontSize: 25, color: 'white', justifyContent: 'center'}}>{downloadsText}</Text>
                   <MaterialIcons name="chevron-right" size={size} color={color} style={{flex:1, padding: 20}}/>  
                </View>
                <View style={{flex:1, flexDirection: 'row',justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >
                    <MaterialIcons name="playlist-play" size={size} color={color} style={{flex:1, padding: 20}}/>  
                    <Text style={{flex: 5, fontSize: 25, color: 'white'}}>{playlistText}</Text>
                    <MaterialIcons name="chevron-right" size={size} color={color} style={{flex:1, padding: 20}}/>  
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >
                    <MaterialIcons name="album" size={size} color={color} style={{flex:1, padding: 20}}/>  
                    <Text style={{flex: 5, fontSize: 25, color: 'white'}}>{albumsText}</Text>
                    <MaterialIcons name="chevron-right" size={size} color={color} style={{flex:1, padding: 20}}/>  
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >
                    <MaterialIcons name="thumb-up" size={size} color={color} style={{flex:1, padding: 20}}/> 
                    <Text style={{flex: 5, fontSize: 25, color: 'white'}}>{songsText}</Text>
                    <MaterialIcons name="chevron-right" size={size} color={color} style={{flex:1, padding: 20}}/>  
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >
                    <MaterialIcons name="record-voice-over" size={size} color={color} style={{flex:1, padding: 20}}/> 
                   <Text style={{flex: 5, fontSize: 25, color: 'white'}}>{artistsText}</Text>
                   <MaterialIcons name="chevron-right" size={size} color={color} style={{flex:1, padding: 20}}/>  
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', height: 30, backgroundColor: '#101010'}} >

                </View>
        
              </View>
        );
}

export default MusicLibraryComponent;
