import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { COLORS, SIZES } from "../src/constants";
import { Edit } from "../src/container";
import { Header } from "../src/components";


const App = () => {

    const router = useRouter();

    return (
        <>

            <StatusBar barStyle="light-content" backgroundColor={COLORS.secondary} />



            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
                <Stack.Screen options={{

                    headerStyle: { backgroundColor: COLORS.primary },
                    headerShadowVisible: false,
                    headerTitle: ""
                }} />



                <View style={{ flex: 1, padding: SIZES.medium }}>

                    <Edit />


                </View>


            </SafeAreaView>
        </>
    )
}

export default App;