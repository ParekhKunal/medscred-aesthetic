import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, StatusBar, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ username, onLogout }) => {
    const [unreadNotifications, setUnreadNotifications] = useState(3);

    useEffect(() => {
        StatusBar.setBackgroundColor('#007AFF');
        StatusBar.setBarStyle('light-content');

        return () => {
            StatusBar.setBackgroundColor('#fff'); // Reset to default color if needed
            StatusBar.setBarStyle('dark-content'); // Reset text style to dark
        };
    }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#007AFF' }}>
                {/* SafeAreaView for top padding */}
            </SafeAreaView>
            <View style={styles.headerContainer}>
                <Text style={styles.username}>Kunal Parekh</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => Alert.alert('Notifications', 'No new notifications.')}>
                        <View style={styles.notificationIconContainer}>
                            <Ionicons name="notifications-outline" size={26} color="#fff" style={styles.icon} />
                            {unreadNotifications > 0 && (
                                <View style={styles.notificationBadge}>
                                    <Text style={styles.notificationBadgeText}>{unreadNotifications}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        zIndex: 10,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    username: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 15,
    },
    notificationIconContainer: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

});

export default CustomHeader;
