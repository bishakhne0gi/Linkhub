import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { COLORS, SIZES, images } from "../src/constants";
import { Landing, Login } from "../src/container";
import { Header, ScreenHeaderText, ScreenheaderBtn } from "../src/components";


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
          <Header />
          <Login />


        </View>


      </SafeAreaView>
    </>
  )
}

export default App;