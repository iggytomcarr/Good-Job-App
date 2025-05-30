// SQLite init and common queries
import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('wellness.db');


// Init DB and create all tables
export const initDB = () => {
    db.transaction(tx => {
            // Daily logs
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS daily_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT UNIQUE,
        drink_free INTEGER,
        mood_score INTEGER,
        activity TEXT,
        feeling TEXT
      );`
            );

            // App options (one row, key-value style)
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS app_settings (
        key TEXT PRIMARY KEY,
        value TEXT
      );`
            );

            // Future tables? Add them here
        },
        (err) => {
            console.error("DB setup error:", err);
        },
        () => {
            console.log("Database initialized successfully.");
        });
};

export default db;
