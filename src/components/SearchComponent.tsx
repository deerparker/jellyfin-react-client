import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";

interface SearchComponentProps {
    userId: string;
}

interface SearchComponentState {
    demoText: string;
}

const SearchComponent: React.FC = () => {

    const userId = useSelector(state => state.authCredentials.userId)
    const [demoText, setDemoText] = useState('')

/*     useEffect(() => {
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
          <View style={styles.container}>
            <Text style={[styles.biggerText]}>
                    Search component in here:

            </Text>
          </View>
        );
}

export default SearchComponent;