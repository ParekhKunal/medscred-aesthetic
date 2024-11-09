// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async (phoneNumber, password) => {
        try {
            const data = await login(phoneNumber, password);
            await AsyncStorage.setItem('token', data.accessToken);
            setUser(data.data);
        } catch (error) {
            throw error;
        }
    };

    const signOut = async () => {
        await AsyncStorage.removeItem('token');
        setUser(null);
    };

    const checkLogin = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            setUser({ token });
        }
    };

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
