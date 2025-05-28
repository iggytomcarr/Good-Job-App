// app/navigation/BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tracker from '../screens/Tracker';
import ThisMonth from '../screens/ThisMonth';
import Progress from '../screens/Progress';
import Goals from '../screens/Goals';
import Options from '../screens/Options';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let icon;
                    switch (route.name) {
                        case 'Tracker': icon = 'calendar-check'; break;
                        case 'ThisMonth': icon = 'calendar-month'; break;
                        case 'Progress': icon = 'chart-line'; break;
                        case 'Goals': icon = 'target'; break;
                        case 'Options': icon = 'cog'; break;
                    }
                    return (
                        <Icon name={icon} size={24} color={focused ? '#333' : '#777'} />
                    );
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Tracker" component={Tracker} />
            <Tab.Screen name="ThisMonth" component={ThisMonth} options={{ title: 'This Month' }}/>
            <Tab.Screen name="Progress" component={Progress} />
            <Tab.Screen name="Goals" component={Goals} />
            <Tab.Screen name="Options" component={Options} />
        </Tab.Navigator>
    );
}
