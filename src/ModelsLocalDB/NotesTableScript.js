import { db, createNotesTable } from "./DBConnection";


/// insert Into Notes Table 
export const insertIntoNotesTable = async (note_by, note_date, note_details, model_id) => {
    createNotesTable()
    await db.transaction((trx) => {
        trx.executeSql('INSERT INTO notes (note_by, note_date, note_details, model_id ) '
            + ' VALUES ("' + note_by + '","' + note_date + '","' + note_details + '", ' + model_id + ')',
            [],
            (trx, result) => {
                // getNoteById(result.insertId)
            })
    })
}



/// select from  Notes Table by id
export const getNoteById = (id, callback) => {
    db.transaction((trx) => {
        trx.executeSql('SELECT * FROM notes WHERE id = ' + id,
            [],
            (trx, results) => {
                var reslt = results.rows.item(0)
                callback({ id: reslt.id, note_by: reslt.note_by, note_date: reslt.note_date, note_details: reslt.note_details, model_id: reslt.model_id })

            })
    })
}


/// select from  Notes Table by model id
export const getAllNotesByModelIdSql = (modelId, callback) => {
    db.transaction((trx) => {
        trx.executeSql('SELECT * FROM notes WHERE model_id = ' + modelId + ' ORDER BY id DESC',
            [],
            (trx, results) => {

                var rows = results.rows
                var notesArr = []

                for (let i = 0; i < results.rows.length; i++) {
                    /// get all notes from notes table and add into notes callback 
                    notesArr.push({ id: rows.item(i).id, note_by: rows.item(i).note_by, note_date: rows.item(i).note_date, note_details: rows.item(i).note_details, model_id: rows.item(i).model_id })
                }
                callback(notesArr)

            })
    })
}


/// delete from  Notes Table
export const deleteNotesSql = () => {
    db.transaction((trx) => {
        trx.executeSql('DELETE FROM notes ',
            [],
            (trx, results) => {

            })
    })
}