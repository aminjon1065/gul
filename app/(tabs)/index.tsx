import {ScrollView, View} from 'react-native';
import {Stack} from "expo-router";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaView className={"bg-amber-300"}>
            <ScrollView>
                <View>
                    <Stack>
                        <Stack.Screen name={"/(home)"}/>
                    </Stack>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

