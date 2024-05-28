import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../utils/constants";

export const setTokenApi = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN, token);
        return true;
    } catch (error) {
        return null;
    }
}

const getTokenApi = async () => {
    try {
        const value = await AsyncStorage.getItem(TOKEN);
        if(value !== null) {
            
        }
    } catch (error) {
        return null;
    }
}