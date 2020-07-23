import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('');
    const passwordErrorMessage = 'Password must be longer than 5 characters';

    return (
        <View>
            <Text style={styles.text}>Enter Password</Text>
            <TextInput
                placeholder='Write your password here'
                style={styles.input}
                autoCapitalize='none'
                autoCorrect='false'
                value={password}
                onChangeText={(password) => setPassword(password)}
            />
            {password.length < 5 && <Text>{passwordErrorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
