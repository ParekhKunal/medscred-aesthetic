// app/(auth)/login.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../../src/contexts/AuthContext';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signIn('kuanl@medscred.com', '12345678');
            Alert.alert('Success', 'You are logged in!');
        } catch (error) {
            Alert.alert('Error', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Text>Phone Number</Text>
            <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter phone number"
            />
            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Login;
