// components/WeekNavigator.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { format, startOfWeek, endOfWeek, addWeeks, getISOWeek } from 'date-fns';

export default function WeekNavigator({ currentDate, setCurrentDate }) {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });     // Sunday
    const weekNumber = getISOWeek(currentDate);
    const year = currentDate.getFullYear();

    const formattedRange = `${format(weekStart, 'd MMM')} - ${format(weekEnd, 'd MMM')}`;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCurrentDate(addWeeks(currentDate, -1))}>
                <Text style={styles.arrow}>{'←'}</Text>
            </TouchableOpacity>

            <View style={styles.info}>
                <Text style={styles.weekText}>Week {weekNumber} of {year}</Text>
                <Text style={styles.rangeText}>{formattedRange}</Text>
            </View>

            <TouchableOpacity onPress={() => setCurrentDate(addWeeks(currentDate, 1))}>
                <Text style={styles.arrow}>{'→'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    arrow: {
        fontSize: 24,
        paddingHorizontal: 10,
    },
    info: {
        alignItems: 'center',
    },
    weekText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rangeText: {
        fontSize: 14,
        color: '#666',
    },
});
