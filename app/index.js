import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { COLORS, SIZES, images } from "../src/constants";
import { Landing, Login } from "../src/container";
import LottieView from 'lottie-react-native'
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

        {/* <ScrollView> */}

        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Header />

          <View style={{ alignItems: "center" }}>

            <LottieView style={{ height: 300, width: 300, alignItems: "center" }} source={require('../src/assets/animations/login.json')} autoPlay />

          </View>
          <Login />



        </View>
        {/* </ScrollView> */}


      </SafeAreaView>
    </>
  )
}

export default App;