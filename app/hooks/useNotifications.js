import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";
import { useEffect } from 'react';
import expoPushTokens from "../api/expoPushTokens";
export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

       if (notificationListener) Notifications.addPushTokenListener(notificationListener)
    }, [])
    
    const registerForPushNotifications = async () => {
        try {
            const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permissions.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
           expoPushTokens.register(token);
        } catch (error) {
            console.log("error getting push token", error)
        }
    }
}