import sqlite, { SQLiteDatabase } from "react-native-sqlite-storage";
import { db, createModelsTable } from "./DBConnection";
import { setAllModels } from "../redux/actions/ModelsAction";


/// insert Into models Table 
export const insertIntoModelsTable = async (model_code, model_name, model_type, cost, model_category, Additional, image) => {

    createModelsTable()
    await db.transaction((trx) => {
        trx.executeSql('INSERT INTO models (model_code, model_name, model_type,cost, model_category, Additional, image ) '
            + ' VALUES ("' + model_code + '","' + model_name + '", "' + model_type + '", ' + cost + ', ' + model_category + ',"' + Additional + '","' + image + '")',
            [],
            (trx, result) => {
                getModelById(result.insertId)
                //  console.log('last inserted', result.insertId)
            })
    })
}



/// select from  models Table by id
export const getModelById = (id) => {
    db.transaction((trx) => {
        trx.executeSql('SELECT * FROM models WHERE id = ' + id,
            [],
            (trx, results) => {
                var reslt = results.rows.item(0)
                console.log('last inserted', reslt)

            })
    })
}


/// select from  models Table by id
export const getModelBySearchSql = (text, callback) => {

    db.transaction((trx) => {
        trx.executeSql('SELECT * FROM models WHERE model_name like  "%' + text + '%" or model_type like "%' + text + '%" or model_code like "%' + text + '%"',
            [],
            (trx, results) => {
                var reslt = results.rows
                var modelsArr = []
                for (let i = 0; i < results.rows.length; i++) {
                    /// get all models from models table and send to callback 
                    modelsArr.push({ id: reslt.item(i).id, model_code: reslt.item(i).model_code, model_name: reslt.item(i).model_name, model_type: reslt.item(i).model_type, cost: reslt.item(i).cost, model_category: reslt.item(i).model_category, Additional: reslt.item(i).Additional, image: reslt.item(i).image })
                }
                console.log('result sarch', modelsArr)
                callback(modelsArr)


            })
    })
}

/// select all from  models Table 
export const getAllModelsSql = async (callback) => {

    await db.transaction((trx) => {
        trx.executeSql('SELECT * FROM models',
            [],
            (trx, results) => {
                var reslt = results.rows
                var modelsArr = []
                for (let i = 0; i < results.rows.length; i++) {
                    /// get all models from models table and send to callback 
                    modelsArr.push({ id: reslt.item(i).id, model_code: reslt.item(i).model_code, model_name: reslt.item(i).model_name, model_type: reslt.item(i).model_type, cost: reslt.item(i).cost, model_category: reslt.item(i).model_category, Additional: reslt.item(i).Additional, image: reslt.item(i).image })

                }
                console.log('result', modelsArr)
                callback(modelsArr)
            })
    })

}


