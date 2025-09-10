import React from 'react';
import {Text, Platform} from "react-native";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {HelloWave} from "@/components/HelloWave";
import {Link} from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const Sos = () => {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Text>
                    SOS
                </Text>
            }>
            <ThemedView className={"flex flex-row items-center gap-2.5"}>
                <ThemedText type="title">Welcome!</ThemedText>
                <HelloWave/>
                <Text className={"font-bold text-4xl text-yellow-500"}>
                    Lorem ipsum.
                </Text>
            </ThemedView>
            <ThemedView className={"gap-2.5 mb-2"}>
                <ThemedText type="subtitle">Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type="defaultSemiBold">
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView className={"gap-2.5 mb-2"}>
                <ThemedText type="subtitle">Step 2: Explore</ThemedText>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <Link href={'/explore'} className={"text-green-500 text-4xl font-bold"}>Explore</Link>
            <ThemedView className={"gap-2.5 mb-2"}>
                <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
                    <ThemedText type="defaultSemiBold">app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
};

export default Sos;