import { useRouter } from 'expo-router'
import { useState } from 'react'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './login.style.js'
const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => { router.push('/landing') }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { router.push('/landing') }}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
        /* <View>
            <TouchableOpacity onPress={() => { router.push('/landing') }}><Text>
                Login Page
            </Text></TouchableOpacity>
        </View> */
    )
}

export default Login

