import * as fs from 'fs';
import { mssql } from 'access-db';

const SQL = require('msnodesqlv8');
const connectionString =
  'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=O:\\Bembi\\_WebSite\\website.mdb;ReadOnly=True';

export async function getDbData(sqlString: string) {
  return await new Promise((resolve, reject) => {
    SQL.query(connectionString, sqlString, (err, rows) => {
      if (err) {
        console.error('Error:', err);
        reject(err);
      } else {
        console.log('Rows:', rows);
        resolve(rows);
      }
    });
  });
}

const ADODB = require('node-adodb');

export async function getDbDataODBC(sqlString: string) {
  const connection = ADODB.open('DSN=website;');

  // Оновлення даних у таблиці
  try {
    return await connection
      .execute(sqlString)
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  } catch (err) {
    console.log(err);
  }
}

export async function getDbAccess(tableName: string) {
  const mdbReaderModule = await import('mdb-reader'); // Динамічний імпорт
  const mdbReader = mdbReaderModule.default; // доступ до класу через default

  const fileBuffer = fs.readFileSync('O:\\Bembi\\_WebSite\\website.mdb');
  const reader = new mdbReader(fileBuffer);

  const rows = reader.getTable(tableName).getData();

  const filteredRows = rows.filter(elem => Number(elem?.es) > 0);

  return filteredRows;
}
