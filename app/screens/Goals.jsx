import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Goals() {
    const goalRows = [
        'I want to lose weight',
        'I want to be healthier',
        'I want to save money',
        'I want to sleep better',
        "I've been advised to cut down",
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Encouragement banner */}
            <View style={styles.suggestionBox}>
                <Text style={styles.suggestionText}>✨ Suggested Goals:</Text>
                <Text style={styles.suggestionSub}>
                    “Better sleep starts with fewer drinks.”{"\n"}
                    “Invest in your health — reduce and feel the benefits.” 💪
                </Text>
            </View>

            {/* Section 1: Goals and targets */}
            <SectionTitle title="Goals and targets" />
            <Row label="Your pledge" value="4 days a week" />
            <Row label="Your typical week" />
            <Row label="Your drinking data" />

            {/* Section 2: Your details */}
            <SectionTitle title="Your details" />
            <Row label="Sex" value="Male" />
            <Row label="Age" value="43" />

            {/* Section 3: Your goals */}
            <SectionTitle title="Your goals" />
            {goalRows.map((goal, index) => (
                <Row key={index} label={goal} />
            ))}
            <Row label="Edit your goals" showArrowOnly />
        </ScrollView>
    );
}

const Row = ({ label, value, showArrowOnly }) => (
    <TouchableOpacity style={styles.row}>
        <Text style={styles.rowLabel}>{label}</Text>
        <View style={styles.rowValueBox}>
            {value && <Text style={styles.rowValue}>{value}</Text>}
            <Text style={styles.arrow}>›</Text>
        </View>
    </TouchableOpacity>
);

const SectionTitle = ({ title }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    suggestionBox: {
        backgroundColor: '#f1f8e9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    suggestionText: {
        fontWeight: 'bold',
        marginBottom: 6,
        fontSize: 16,
        color: '#33691e',
    },
    suggestionSub: {
        fontSize: 14,
        color: '#33691e',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    rowLabel: {
        fontSize: 15,
        color: '#000',
    },
    rowValueBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowValue: {
        color: '#1976D2',
        marginRight: 6,
        fontSize: 15,
    },
    arrow: {
        fontSize: 18,
        color: '#bbb',
    },
});
