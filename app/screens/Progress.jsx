import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const ProgressColours = {
    PROGRESS1: '#FFCDD2', // light red/pink
    PROGRESS2: '#FFE0B2', // light orange
    PROGRESS3: '#FFF9C4', // light yellow
    PROGRESS4: '#C8E6C9', // light green
    PROGRESS5: '#B3E5FC', // light blue
    PROGRESS6: '#B2DFDB', // light teal
    PROGRESS7: '#E1BEE7', // light purple
    PROGRESS8: '#FFCCBC', // light peach
    PROGRESS9: '#F8BBD9', // light rose
    PROGRESS10: '#D1C4E9', // light lavender
    PROGRESS11: '#DCEDC8', // light lime
    PROGRESS12: '#BBDEFB', // light sky blue
};

// Assign each metric a color from dayColors
const metrics = [
    { title: 'Money Saved', value: '£629', color: ProgressColours.PROGRESS1 },
    { title: 'Beat an Urge', value: '0', color: ProgressColours.PROGRESS2 },
    { title: 'Total Health', value: '78.24%', color: ProgressColours.PROGRESS3 },
    { title: 'Drinks Passed', value: '251', color: ProgressColours.PROGRESS4 },
    { title: 'Weight Statistics', value: '0.0 kg', color: ProgressColours.PROGRESS5 },
    { title: 'Goals Achieved', value: '58 / 110', color: ProgressColours.PROGRESS6 },
    { title: 'Calories Avoided', value: 'N/A', color: ProgressColours.PROGRESS7 },
    { title: 'Time Sober', value: '4m 26d', color: ProgressColours.PROGRESS8 },
];

const Progress = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.timeHeader}>
                <Text style={styles.celebrate}>🎉</Text>
                <View style={styles.timeRow}>
                    <TimeBlock label="Years" value="00" />
                    <TimeBlock label="Months" value="04" />
                    <TimeBlock label="Days" value="26" />
                    <TimeBlock label="Hours" value="20" />
                </View>
                <Text style={styles.celebrate}>🎉</Text>
            </View>

            <View style={styles.grid}>
                {metrics.map((item, index) => (
                    <View key={index} style={[styles.card, { backgroundColor: item.color }]}>
                        <View style={styles.iconPlaceholder} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardValue}>{item.value}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const TimeBlock = ({ label, value }) => (
    <View style={styles.timeBlock}>
        <Text style={styles.timeValue}>{value}</Text>
        <Text style={styles.timeLabel}>{label}</Text>
    </View>
);

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 60) / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    timeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
    },
    celebrate: {
        fontSize: 24,
    },
    timeBlock: {
        alignItems: 'center',
        marginHorizontal: 4,
    },
    timeValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    timeLabel: {
        fontSize: 12,
        color: '#333',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: cardSize,
        height: cardSize,
        borderRadius: 12,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#bbb',
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    cardValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Progress;
