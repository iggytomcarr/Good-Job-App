//app/_layout.js
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    );
}
