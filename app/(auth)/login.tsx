import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

    const LoginScreen = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const router = useRouter();

    const handleLogin = () => {
        console.log("Login attempt with:", email, password);
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="email" 
                value={email} 
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput 
                style={styles.input}
                placeholder="password" 
                value={password} 
                onChangeText={setPassword}
                secureTextEntry 
            />

            <Button 
                title="Log in"
                onPress={handleLogin}
            /> 

            <TouchableOpacity onPress={() => router.push("/(auth)/RegisterScreen")}>
                <Text style={styles.registertext}>Don't have an account? Register here!</Text>
            </TouchableOpacity>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1, 
        marginBottom: 12,
        paddingLeft: 8,
    },
    registertext: {
        margin: 16,
        color: 'blue', 
        textAlign: 'center',
    }
});



export default LoginScreen;