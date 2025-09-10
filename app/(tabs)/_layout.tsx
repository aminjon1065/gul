import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import HomeScreen from "@/app/(tabs)/index";
export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // backgroundColor: "transparent",
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="(home)"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <IconSymbol size={30} name="house.fill" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="sos"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <IconSymbol size={30} name="sos" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({color}) => <IconSymbol size={30} name="paperplane.fill" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="auth/sign-in"
                options={{
                    title: 'SignIn',
                    tabBarIcon: ({color}) => <IconSymbol size={30} name="house.fill" color={color}/>,
                }}
            />
        </Tabs>
    );
}
