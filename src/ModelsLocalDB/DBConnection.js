import sqlite, { openDatabase } from "react-native-sqlite-storage";

export const db =
    sqlite.openDatabase({
        name: 'ModelsDB',
        location: 'default',
        createFromLocation: '~www/ModelsDB.db',
    },
        () => { console.log('Connection Success',) },
        error => console.log(error)
    )

sqlite.enablePromise(true)

//// Create Models Table if not exist
export const createModelsTable = () => {
    db.transaction((trx) => {
        console.log('DDB', trx)
        trx.executeSql('CREATE TABLE IF NOT EXISTS models (id INTEGER PRIMARY KEY AUTOINCREMENT, model_code VARCHAR(30),model_name VARCHAR(30), model_type VARCHAR(30) ,cost number ,model_category INTEGER, Additional VARCHAR(255),image VARCHAR(255))',
            []
        )
    })
}

//// Drop Models Table 
export const dropModelsTable = () => {
    db.transaction((trx) => {
        trx.executeSql('DROP TABLE  models ')
    })
}

///////////////////////////////////////

//// Create Notes Table if not exist
export const createNotesTable = () => {
    db.transaction((trx) => {
        console.log('DDB', trx)
        trx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, note_by VARCHAR(100), note_date date, note_details VARCHAR(255), model_id INTEGER)',
            []
        )
    })
}

//// Drop Notes Table 
export const dropNotesTable = () => {
    db.transaction((trx) => {
        trx.executeSql('DROP TABLE  notes ')
    })
}