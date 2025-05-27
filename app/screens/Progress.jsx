import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const dayColors = {
    SUN: '#FFCDD2',
    MON: '#FFE0B2',
    TUE: '#FFF9C4',
    WED: '#C8E6C9',
    THU: '#B3E5FC',
    FRI: '#B2DFDB',
    SAT: '#E1BEE7',
};

// Assign each metric a color from dayColors
const metrics = [
    { title: 'Money Saved', value: '£629', color: dayColors.MON },
    { title: 'Beat an Urge', value: '0', color: dayColors.TUE },
    { title: 'Total Health', value: '78.24%', color: dayColors.WED },
    { title: 'Drinks Passed', value: '251', color: dayColors.THUR },
    { title: 'Weight Statistics', value: '0.0 kg', color: dayColors.FRI },
    { title: 'Goals Achieved', value: '58 / 110', color: dayColors.SAT },
    { title: 'Calories Avoided', value: 'N/A', color: dayColors.SUN },
    { title: 'Time Sober', value: '4m 26d', color: '#FFF' },
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
