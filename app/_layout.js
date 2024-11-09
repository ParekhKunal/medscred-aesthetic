// app/_layout.js
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../src/contexts/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


// Import your screens
import DashboardScreen from './dashboard/index';
import HospitalScreen from './dashboard/hospital';
import QRScanScreen from './dashboard/qr-scan';
import ProfileScreen from './profile/index';
import Login from './(auth)/login';
import CustomHeader from '../src/components/CustomHeader';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const AppLayout = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Login />;
    }

    return (
        <NavigationContainer>
            <CustomHeader title="App Header" onPressSettings={() => { }} />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        // You can customize icons here based on the route
                        let iconName;

                        if (route.name === 'Dashboard') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Hospital') {
                            iconName = focused ? 'home' : 'home-outline'; // Using building icon for Hospital
                        } else if (route.name === 'Scan QR') {
                            iconName = focused ? 'qr-code' : 'qr-code-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        // Return the icon component here
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 80,
                        backgroundColor: 'transparent',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingTop: 15,
                        paddingBottom: 15,
                        borderTopWidth: 0.2,
                        borderLeftWidth: 0.2,
                        borderRightWidth: 0.2,
                        shadowColor: '#DDE6ED',
                        shadowOffset: { width: 0, height: -3 },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        position: 'absolute',
                        elevation: 0,
                        bottom: 0,
                        borderColor: '#DDE6ED',
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        paddingBottom: 7,
                    },
                    headerShown: false,
                })}

            >
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Hospital" component={HospitalScreen} />
                <Tab.Screen name="Scan QR" component={QRScanScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppLayout;
