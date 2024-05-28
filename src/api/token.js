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

export const getTokenApi = async () => {
    try {
        const value = await AsyncStorage.getItem(TOKEN);
        return value;
    } catch (error) {
        return null;
    }
}

export const removeTokenApi = async () => {
    try {
        await AsyncStorage.removeItem(TOKEN);
        return true;
    } catch (error) {
        return null;
    }
}