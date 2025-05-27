import React, { useState } from 'react';
import WeekNavigator from '../components/WeekNavigator';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';

// Default pill-organizer colors per day (AM/PM unified)
const dayColors = {
    SUN: '#FFCDD2', // light red/pink
    MON: '#FFE0B2', // light orange
    TUE: '#FFF9C4', // light yellow
    WED: '#C8E6C9', // light green
    THU: '#B3E5FC', // light blue
    FRI: '#B2DFDB', // light teal
    SAT: '#E1BEE7', // light purple
};

const initialDays = [
    { key: 'SUN', drinkFree: false, mood: 'neutral', note: '' },
    { key: 'MON', drinkFree: true, mood: 'happy', note: 'Felt energized' },
    { key: 'TUE', drinkFree: false, mood: 'sad', note: '' },
    { key: 'WED', drinkFree: true, mood: 'happy', note: 'Gym session' },
    { key: 'THU', drinkFree: true, mood: 'neutral', note: '' },
    { key: 'FRI', drinkFree: true, mood: 'happy', note: 'Movie night' },
    { key: 'SAT', drinkFree: false, mood: 'neutral', note: '' },
];

const moodEmojis = {
    happy: '😀',
    neutral: '😐',
    sad: '🙁',
};

export default function Tracker() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState(initialDays);
    const [selected, setSelected] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openDay = day => {
        setSelected({ ...day });
        setModalVisible(true);
    };

    const saveDay = () => {
        setDays(current =>
            current.map(d => (d.key === selected.key ? selected : d))
        );
        setModalVisible(false);
    };

    const toggleDrinkFree = () => {
        setSelected(s => ({ ...s, drinkFree: !s.drinkFree }));
    };

    const changeMood = mood => {
        setSelected(s => ({ ...s, mood }));
    };

    return (
        <View style={styles.container}>
            <WeekNavigator currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {days.map(day => (
                    <TouchableOpacity
                        key={day.key}
                        style={[styles.dayRow, { backgroundColor: dayColors[day.key] || '#fff' }]}
                        onPress={() => openDay(day)}
                    >
                        <View style={styles.rowContent}>
                            <Text style={styles.star}>{day.drinkFree ? '⭐' : '☆'}</Text>
                            <Text style={styles.dayLabel}>{day.key}</Text>
                            <Text style={styles.mood}>{moodEmojis[day.mood]}</Text>
                        </View>
                        <Text
                            style={day.note ? styles.note : styles.notePlaceholder}
                            numberOfLines={1}
                        >
                            {day.note || 'Add note...'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {selected && (
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalHeader}>{selected.key}</Text>

                        <TouchableOpacity onPress={toggleDrinkFree} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>
                                {selected.drinkFree ? 'Drink-Free ★' : 'Not Drink-Free ☆'}
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.moodPicker}>
                            {Object.entries(moodEmojis).map(([key, emoji]) => (
                                <TouchableOpacity
                                    key={key}
                                    onPress={() => changeMood(key)}
                                    style={
                                        selected.mood === key
                                            ? styles.moodOptionSelected
                                            : styles.moodOption
                                    }
                                >
                                    <Text style={styles.moodEmoji}>{emoji}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Write a quick note..."
                            multiline
                            value={selected.note}
                            onChangeText={text => setSelected(s => ({ ...s, note: text }))}
                        />

                        <Button title="Save" onPress={saveDay} />
                    </View>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingVertical: 10,
    },
    dayRow: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    rowContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    star: {
        fontSize: 20,
        marginRight: 10,
    },
    dayLabel: {
        flex: 1,
        fontSize: 18,
    },
    mood: {
        fontSize: 22,
    },
    note: {
        fontSize: 14,
        color: '#333',
    },
    notePlaceholder: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    modalHeader: {
        fontSize: 24,
        marginBottom: 20,
    },
    modalButton: {
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 6,
        marginBottom: 20,
    },
    modalButtonText: {
        fontSize: 18,
    },
    moodPicker: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    moodOption: {
        padding: 10,
    },
    moodOptionSelected: {
        padding: 10,
        backgroundColor: '#d0ebff',
        borderRadius: 6,
    },
    moodEmoji: {
        fontSize: 28,
    },
    textInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
});
