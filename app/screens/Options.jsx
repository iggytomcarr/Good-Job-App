import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import DatePicker from 'expo-datepicker';

export default function Options() {
    const [remindersEnabled, setRemindersEnabled] = useState(true);
    const [reminderTime, setReminderTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleReminders = () => setRemindersEnabled(prev => !prev);
    const toggleTheme = () => setDarkMode(prev => !prev);

    const handleReset = () => {
        Alert.alert('Reset App', 'Are you sure you want to reset the app?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Yes', onPress: () => console.log('App reset') }
        ]);
    };

    const handleRestore = () => {
        console.log('Data restored');
    };

    const handleExport = () => {
        console.log('Exporting data...');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Section 2: Your details */}
            <Text style={styles.sectionTitle}>My Details</Text>
            <Text label="First Name" value="<NAME>">Tom</Text>
            <Text label="Sex" value="Male">Male</Text>
            <Text label="Age" value="43">43</Text>


            <Text style={styles.sectionTitle}>Your notifications</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Reminders</Text>
                <Switch value={remindersEnabled} onValueChange={toggleReminders} />
            </View>

            <TouchableOpacity style={styles.row} onPress={() => setShowTimePicker(true)}>
                <Text style={styles.label}>
                    {reminderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
                <Text style={styles.link}>Change</Text>
            </TouchableOpacity>

            {showTimePicker && (
                <DatePicker
                    mode="time"
                    value={reminderTime}
                    onChange={(date) => {
                        setReminderTime(date);
                        setShowTimePicker(false);
                    }}
                    displayIOS="spinner"
                    isVisible={showTimePicker}
                />
            )}

            <Text style={styles.sectionTitle}>Data</Text>

            <TouchableOpacity style={styles.row} onPress={handleRestore}>
                <Text style={styles.label}>Restore data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={handleExport}>
                <Text style={styles.label}>Export data</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Appearance</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Dark mode</Text>
                <Switch value={darkMode} onValueChange={toggleTheme} />
            </View>

            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetText}>Reset app</Text>
            </TouchableOpacity>

            <Text style={styles.buildText}>build version: 0.1</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontSize: 16,
        color: '#222',
    },
    link: {
        fontSize: 16,
        color: '#1B355E',
    },
    resetButton: {
        backgroundColor: '#C62828',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',
    },
    resetText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buildText: {
        marginTop: 20,
        color: '#aaa',
        fontSize: 12,
        textAlign: 'center',
    },
});
