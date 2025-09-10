import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Link, Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css"
import {SafeAreaProvider} from "react-native-safe-area-context";

import {useColorScheme} from '@/hooks/useColorScheme';
import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {TouchableOpacity, Text} from "react-native";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <SafeAreaProvider>
                <GestureHandlerRootView style={{flex: 1}}>
                    <Drawer
                        initialRouteName="(tabs)"
                        screenOptions={({navigation}) => ({
                            headerTitleAlign: "center",
                            headerShadowVisible: false,
                            headerTitle: () => (
                                <Link
                                    href="/(tabs)/(home)"
                                    className={"px-1"}
                                >
                                    <Text className={"dark:text-white"}>
                                        Home
                                    </Text>
                                </Link>
                            ),
                            headerLeft: () => (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.toggleDrawer();
                                    }}
                                >
                                    <Text className={"dark:text-white"}>
                                        Menu
                                    </Text>
                                </TouchableOpacity>
                            ),
                            headerRight: () => (
                                <Text className={"dark:text-white"}>Alert</Text>
                            ),
                        })}

                    >
                        {/* Основное приложение в табах */}
                        <Drawer.Screen name="(tabs)" options={{drawerLabel: 'Home'}}/>
                        {/* Вторичное — в дровере */}
                        <Drawer.Screen name="settings/index" options={{drawerLabel: 'Settings'}}/>
                        <Drawer.Screen name="settings/language" options={{drawerLabel: 'Language'}}/>
                        <Drawer.Screen name="settings/privacy" options={{drawerLabel: 'Safety & Privacy'}}/>
                        <Drawer.Screen name="about" options={{drawerLabel: 'About'}}/>
                        <Drawer.Screen name="help" options={{drawerLabel: 'Help'}}/>
                    </Drawer>
                    <StatusBar style="auto"/>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}
