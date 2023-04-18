import React from 'react'
import { Header, Links, ScreenHeaderText, ScreenheaderBtn } from '../../components'
import { SafeAreaView, View } from 'react-native'
import { Stack } from 'expo-router'
import { COLORS, SIZES, images } from '../../constants'
const Landing = () => {
    return (
        <>

            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
                <Stack.Screen options={{

                    headerStyle: { backgroundColor: COLORS.primary },
                    headerShadowVisible: false,
                    headerRight: () =>
                    (
                        <ScreenheaderBtn dimension="100%" />
                    ),
                    headerLeft: () =>
                    (
                        <ScreenHeaderText dimension="100%" />
                    ),
                    headerTitle: ""
                }} />




                <View style={{ flex: 1, padding: SIZES.medium }}>



                    <Header />
                    <Links />


                </View>


            </SafeAreaView>




        </>
    )
}

export default Landing