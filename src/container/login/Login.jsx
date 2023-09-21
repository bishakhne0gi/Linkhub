import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './login.style.js'
import { db, auth } from '../../../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
        const nextPage = auth.onAuthStateChanged(user => {
            if (user) {
                router.push('./landing');
            }
        })

        return nextPage
    }, [])
    const setData = async (userLinkRef) => {
        await setDoc(userLinkRef, {
            github: "",
            linkedin: "",
            leetcode: "",
            hashnode: "",
            personal: "",
        })
    }
    const handleSignUp = () => {

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

            const user = userCredential.user;
            console.log("UID: ", user.uid);
            const userLinkRef = doc(db, "userinfo", user.uid)

            setData(userLinkRef)
            console.log("Registered", user.email);

        }).catch(err => console.log(err))
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("Log In", user.email);
        }).catch(err => alert(err.message))
    };


    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Email has been sent!!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };
    return (
        <>
            <View
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
                    <TouchableOpacity onPress={resetPassword} style={styles.forgetButton}>
                        <Text style={styles.buttonOutlineText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}

export default Login
