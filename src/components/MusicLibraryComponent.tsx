import React, { useState, useEffect, Component } from "react";
//import { View, Text } from "react-native";

//import globalstyles from "./Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";

import Carousel from 'react-native-snap-carousel';
import AlbumCarousel from "./AlbumCarousel";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuItem from "../components/MenuItem";

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
    //<AlbumCarousel></AlbumCarousel>

    return (
      <View style={styles.container}>
        <View style={styles.musicLibraryView}>
          <View style={styles.musicLibraryInsight}>

            
            <View style={styles.lastPlayedMusicComponent}>
              <TouchableOpacity style={styles.lastPlayedMoreComponent}>
                <View style={styles.lastPlayedTextComponent}>
                  <Text style={styles.lastPlayedText2}>Last played</Text>
                </View>
                <View style={styles.lastPlayedChevronBox}>
                  <MaterialCommunityIconsIcon
                    name="chevron-right"
                    style={styles.lastPlayedChevronIcon}
                  ></MaterialCommunityIconsIcon>
                </View>
              </TouchableOpacity>
              <View style={styles.musicCarouselComponent}>
                 <AlbumCarousel></AlbumCarousel>
              </View>
            </View>

            
            <View style={styles.latestMusicComponent}>
              <TouchableOpacity style={styles.latestMusicMoreComponent}>
                <View style={styles.latestMusicTextComponent}>
                  <Text style={styles.latestMusicText2}>Latest Music</Text>
                </View>
                <View style={styles.latestMusicChevronBox}>
                  <MaterialCommunityIconsIcon
                    name="chevron-right"
                    style={styles.lastPlayedChevronIcon1}
                  ></MaterialCommunityIconsIcon>
                </View>
              </TouchableOpacity>
              <View style={styles.musicCarouselComponent}>
                <TouchableOpacity
                  onPress={() =>
                    //props.navigation.navigate("AlbumDetailsComponent")
                    console.log("Album press button works")
                  }
                  style={styles.albumComponent}
                >
                  <Image
                    source={require("../assets/images/grand_archives6.jpg")}
                    resizeMode="contain"
                    style={styles.albumArt}
                  ></Image>
                  <Text style={styles.albumTitle}>Grand Archives</Text>
                  <Text style={styles.albumArtist}>Grand Archives</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          <View style={styles.musicLibraryMenu}>
            <TouchableOpacity style={styles.musicLibraryMenuItem}>
              <MenuItem
                style={styles.musicMenuItem}
                title="Favourites"
                icon1Name="cards-heart"
              ></MenuItem>
            </TouchableOpacity>
            <TouchableOpacity style={styles.musicLibraryMenuItem}>
              <MenuItem
                title="Downloads"
                icon1Name="download"
                style={styles.musicMenuItem}
              ></MenuItem>
            </TouchableOpacity>
            <TouchableOpacity style={styles.musicLibraryMenuItem}>
              <MenuItem
                title="Playlists"
                icon1Name="playlist-play"
                style={styles.musicMenuItem}
              ></MenuItem>
            </TouchableOpacity>
            <TouchableOpacity style={styles.musicLibraryMenuItem}>
              <MenuItem
                title="Albums"
                icon1Name="album"
                style={styles.musicMenuItem}
              ></MenuItem>
            </TouchableOpacity>
            <TouchableOpacity style={styles.musicLibraryMenuItem}>
              <MenuItem
                icon1Name="thumb-up"
                title="Songs"
                style={styles.musicMenuItem}
              ></MenuItem>
            </TouchableOpacity>
            <TouchableOpacity style={styles.musicLibraryMenuItem}>
              <MenuItem
                title="Artists"
                icon1Name="artist"
                style={styles.musicMenuItem}
              ></MenuItem>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,1)"
    },
    musicLibraryView: {
      flex: 1
    },
    musicLibraryInsight: {
      flex: 0.6
    },
    lastPlayedMusicComponent: {
      flex: 0.5
    },
    lastPlayedMoreComponent: {
      flex: 0.2,
      flexDirection: "row"
    },
    lastPlayedTextComponent: {
      flex: 0.85,
      paddingTop: 0,
      paddingBottom: 0,
      justifyContent: "center"
    },
    lastPlayedText2: {
      height: 20,
      color: "rgba(255,255,255,1)",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 20,
      fontFamily: "noto-sans-700"
    },
    lastPlayedChevronBox: {
      flex: 0.15,
      justifyContent: "center"
    },
    lastPlayedChevronIcon: {
      color: "rgba(255,255,255,1)",
      fontSize: 38,
      alignSelf: "center"
    },
    musicCarouselComponent: {
      flex: 0.8,
      flexDirection: "row"
    },
    latestMusicComponent: {
      flex: 0.5
    },
    latestMusicMoreComponent: {
      flex: 0.2,
      flexDirection: "row"
    },
    latestMusicTextComponent: {
      flex: 0.85,
      paddingRight: 0,
      paddingLeft: 0
    },
    latestMusicText2: {
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      fontFamily: "noto-sans-700",
      marginTop: 10
    },
    latestMusicChevronBox: {
      flex: 0.15,
      justifyContent: "center"
    },
    lastPlayedChevronIcon1: {
      color: "rgba(255,255,255,1)",
      fontSize: 38,
      alignSelf: "center"
    },
    albumComponent: {
      width: 126,
      height: 149
    },
    albumArt: {
      width: 115,
      height: 112,
      marginTop: 2,
      marginLeft: 3
    },
    albumTitle: {
      color: "rgba(255,255,255,1)",
      alignItems: "flex-start",
      fontFamily: "noto-sans-700",
      marginTop: 4,
      marginLeft: 6
    },
    albumArtist: {
      color: "rgba(162,162,162,1)",
      fontSize: 12,
      fontFamily: "noto-sans-regular",
      marginTop: 3,
      marginLeft: 6
    },
    musicLibraryMenu: {
      flex: 0.4,
      margin: 5
    },
    musicLibraryMenuItem: {
      flex: 1
    },
    musicMenuItem: {
    //  width: 360,
      flex: 1,
      margin: 5
    }
  });

export default MusicLibraryComponent;
