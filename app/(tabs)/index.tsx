import {Appearance, Button, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HelloWave} from '@/components/HelloWave';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Link} from "expo-router";
import {useColorScheme} from "@/hooks/useColorScheme";
import {useEffect, useState} from "react";
import setColorScheme = Appearance.setColorScheme;

export default function HomeScreen() {
    const color = useColorScheme();
    console.log(color);
    return (
        <View className={"flex-1 dark:bg-slate-500 bg-red-200"}>
            <ScrollView>
                <View>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis cupiditate eaque eius
                        inventore labore maiores nihil pariatur quisquam saepe? Facere iusto molestiae nihil non nulla
                        tempora vitae. Animi deleniti deserunt, eum ex hic ipsam nisi officiis quidem! Accusamus,
                        aperiam, asperiores atque cum deleniti enim et ex explicabo fuga labore modi, nemo quae sequi
                        unde voluptatibus? Eos fugit id, labore libero nulla quibusdam sapiente vel. Asperiores cumque
                        modi perspiciatis quaerat sed? Accusantium ad amet architecto aspernatur blanditiis, cumque
                        delectus dignissimos, et eveniet excepturi explicabo harum, ipsum iusto nemo nobis officia
                        pariatur praesentium quisquam quod tempore tenetur ullam voluptas voluptates voluptatibus.
                    </Text>
                    <Button title={'SetColor'} onPress={() => setColorScheme(color === 'light' ? 'dark' : 'light')}/>

                </View>
            </ScrollView>
        </View>
    );
}

