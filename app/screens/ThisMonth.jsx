import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';

// Mock calendar data
const calendar = [
    { date: '28', type: 'drinkFree' },
    { date: '29', type: 'notEntered' },
    { date: '30', type: 'drinkFree' },
    { date: '1', type: 'drinkFree' },
    { date: '2', type: 'drinkFree' },
    { date: '3', type: 'drinkFree' },
    { date: '4', type: 'drinkFree' },
    { date: '5', type: 'drinkFree' },
    { date: '6', type: 'drinkFree' },
    { date: '7', type: 'drinkFree' },
    { date: '8', type: 'drinkFree' },
    { date: '9', type: 'drinkFree' },
    { date: '10', type: 'drinkFree' },
    { date: '11', type: 'drinkFree' },
    { date: '12', type: 'drinkFree' },
    { date: '13', type: 'drinkFree' },
    { date: '14', type: 'drinkFree' },
    { date: '15', type: 'drinkFree' },
    { date: '16', type: 'drinkFree' },
    { date: '17', type: 'drinkFree' },
    { date: '18', type: 'drinkFree' },
    { date: '19', type: 'notEntered' },
    { date: '20', type: 'notEntered' },
    { date: '21', type: 'notEntered' },
    { date: '22', type: 'notEntered' },
    { date: '23', type: 'notEntered' },
    { date: '24', type: 'notEntered' },
    { date: '25', type: 'notEntered' },
    { date: '26', type: 'notEntered' },
    { date: '27', type: 'notEntered' },
];

export default function ThisMonth() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.monthTitle}>May</Text>

            <View style={styles.calendar}>
                {calendar.map((item, index) => (
                    <View key={index} style={styles.dayWrapper}>
                        <View
                            style={[
                                styles.dayCircle,
                                item.type === 'drinkFree' && styles.drinkFree,
                                item.type === 'hadDrink' && styles.hadDrink,
                                item.type === 'notEntered' && styles.notEntered,
                            ]}
                        >
                            <Text style={styles.dayText}>{item.date}</Text>
                            {item.type === 'drinkFree' && (
                                <Text style={styles.badge}>⭐</Text>
                            )}
                            {item.type === 'hadDrink' && (
                                <Text style={styles.badge}>🍶</Text>
                            )}
                        </View>
                    </View>
                ))}
            </View>

            {/* Legend */}
            <View style={styles.legend}>
                <LegendItem icon="⭐" label="Drink Free Day" />
                <LegendItem icon="🍶" label="Had a Drink" />
                <LegendItem icon="◌" label="Not yet entered" />
            </View>

            {/* Summary Button */}
            <TouchableOpacity style={styles.summaryButton}>
                <Text style={styles.summaryText}>Summary of your month</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const LegendItem = ({ icon, label }) => (
    <View style={styles.legendItem}>
        <Text style={styles.legendIcon}>{icon}</Text>
        <Text style={styles.legendLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    monthTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    calendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    dayWrapper: {
        width: '14.2%',
        padding: 4,
        alignItems: 'center',
    },
    dayCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    drinkFree: {
        borderColor: '#2196F3',
    },
    hadDrink: {
        borderColor: '#f44336',
    },
    notEntered: {
        borderColor: '#bbb',
        borderStyle: 'dashed',
    },
    dayText: {
        fontSize: 14,
        color: '#000',
    },
    badge: {
        position: 'absolute',
        top: -8,
        right: -8,
        fontSize: 14,
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 30,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendIcon: {
        fontSize: 16,
        marginRight: 4,
    },
    legendLabel: {
        fontSize: 14,
    },
    summaryButton: {
        backgroundColor: '#1976D2',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    summaryText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
