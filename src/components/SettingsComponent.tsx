import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";

interface SettingsComponentProps {
    userId: string;
}

interface SettingsComponentState {
    demoText: string;
}

const SettingsComponent: React.FC = () => {

    const userId = useSelector(state => state.authCredentials.userId)
    const [demoText, setDemoText] = useState('')

    useEffect(() => {
        (async () => {
            const apiClient = getApiClient();
            let newDemoText;
            try {
                newDemoText = await apiClient.getServerConfiguration();
                newDemoText = JSON.stringify(newDemoText);
            } catch {
                newDemoText = "NOT CONNECTED";
            }
            setDemoText(newDemoText);
        })();
    }, [userId])

        return (
          <View style={styles.container}>
            <Text style={[styles.biggerText]}>
                    SETTINGS ():
              {"\n"}
              {"\n"}
              {demoText}
            </Text>
          </View>
        );
}

export default SettingsComponent;
