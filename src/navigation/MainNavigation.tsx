import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import React, { useState, useEffect } from "react";

import styles from "../components/Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";
import SettingsComponent from '../components/SettingsComponent';
import HomeComponent from '../components/HomeComponent';

//import Ionicons from "react-native-vector-icons/Ionicons"
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MusicLibraryComponent from '../components/MusicLibraryComponent';
import SearchComponent from '../components/SearchComponent';

import SplashScreen from "react-native-splash-screen";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const TopTabNavigator = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

interface HomeNavigationProps {
    userId: string;
}

interface HomeNavigationState {
    demoText: string;
}

const MainNavigation: React.FC = () => {

    const userId = useSelector(state => state.authCredentials.userId)
    const [demoText, setDemoText] = useState('')

    useEffect(() => {
      SplashScreen.hide(); 
    }, []);

    /* useEffect(() => {
        (async () => {
            const apiClient = getApiClient();
            let newDemoText;
            try {
                newDemoText = await apiClient.getResumableItems(userId);
                newDemoText = JSON.stringify(newDemoText);
            } catch {
                newDemoText = "NOT CONNECTED";
            }
            setDemoText(newDemoText);
        })();
    }, [userId]) */

        return (
            <NavigationContainer >
                  <Tab.Navigator
                      initialRouteName="Home"
                      activeColor="#FFFFFF"
                      style={{ backgroundColor: '#A4A4A4' }}
                      barStyle={{ backgroundColor: '#414141' }}
                    >

                      <Tab.Screen
                        name="Home"
                        component={HomeComponent}
                        options={{
                          tabBarLabel: 'Home',
                          tabBarIcon: ({ color }) => (
                            <MaterialIcons name="home" color={color} size={26} />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Search"
                        component={SearchComponent}
                        options={{
                          tabBarLabel: 'Search',
                          tabBarIcon: ({ color }) => (
                            <MaterialIcons name="search" color={color} size={26} />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Library"
                        component={MusicLibraryComponent}
                        options={{
                          tabBarLabel: 'Library',
                          tabBarIcon: ({ color }) => (
                            <MaterialIcons name="library-music" color={color} size={26} />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Settings"
                        component={SettingsComponent}
                        options={{
                          tabBarLabel: 'Settings',
                          tabBarIcon: ({ color }) => (
                            <MaterialIcons name="settings" color={color} size={26} />
                          ),
                        }}
                      />
                    </Tab.Navigator>
          </NavigationContainer>
        );
}

export default MainNavigation;