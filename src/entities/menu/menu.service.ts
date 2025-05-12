// import { Injectable } from '@nestjs/common';
// import { viewTable } from '@src/util/api-site/view-tables';
// // import { SQL } from '@src/main';
// import { getDbAccess, getDbData, getDbDataODBC } from '@src/util/mdb';
// import { getSite } from '@src/util/test';
// import { response } from 'express';
// // import * as sql from 'msnodesqlv8';
// // import MDBReader from 'mdb-reader';
// import * as fs from 'fs';

// @Injectable()
// export class MenuService {
//   async getDataFromLocalDb(): Promise<any> {
//     console.log('service');
//     // const sqlString = '';
//     // await getDbData('Select * FROM menu');
//     // await getDbData('Select * from menu_description');
//     // await getDbData('Select * from menu_path');

//     // await getDbDataODBC('Select * FROM menu');
//     // await getDbDataODBC('Select * from menu_description');
//     // await getDbDataODBC('Select * from menu_path');

//     // await getDbAccess('menu');
//     // await getDbAccess('menu_description');
//     // await getDbAccess('menu_path');

//     // let connection;
//     // try {
//     //   // Відкриваємо з'єднання
//     //   connection = await new Promise((resolve, reject) => {
//     //     sql.open(this.connectionString, (err, conn) => {
//     //       if (err) {
//     //         console.log('error gopen link');
//     //         reject(err);
//     //       } else {
//     //         resolve(conn);
//     //       }
//     //     });
//     //   });

//     //   // Виконання запиту
//     //   const rows = await new Promise((resolve, reject) => {
//     //     connection.query('SELECT * FROM menu', (err, result) => {
//     //       if (err) {
//     //         console.log('error select');
//     //         reject(err);
//     //       } else {
//     //         resolve(result);
//     //       }
//     //     });
//     //   });

//     //   console.log('Rows:', rows);
//     // } catch (error) {
//     //   console.error('Error:', error);
//     // } finally {
//     //   if (connection) {
//     //     // Закриваємо з'єднання після завершення всіх операцій
//     //     connection.close(err => {
//     //       if (err) {
//     //         console.error('Error closing connection:', err);
//     //       } else {
//     //         console.log('Connection closed successfully');
//     //       }
//     //     });
//     //   }
//     // }

//     // const query = 'SELECT * FROM menu';

//     // Відкриваємо з'єднання
//     // await sql.open(this.connectionString, (err, connection) => {
//     //   console.log('st');
//     //   if (err) {
//     //     console.log('Error opening connection:', err);
//     //     return;
//     //   }

//     //   // Виконання запиту
//     //   connection.query('SELECT * FROM menu', (err, rows) => {
//     //     if (err) {
//     //       console.error('Error executing query:', err);
//     //       return;
//     //     }
//     //     console.log('Rows fetched:', rows);

//     //     // Закриваємо з'єднання після завершення запиту
//     //     connection.close(err => {
//     //       if (err) {
//     //         console.error('Error closing connection:', err);
//     //       } else {
//     //         console.log('Connection closed successfully');
//     //       }
//     //     });
//     //   });
//     // });

//     // return await new Promise((resolve, reject) => {
//     //   SQL.query(this.connectionString, 'SELECT * FROM menu', (err, rows) => {
//     //     if (err) {
//     //       console.error('Error:', err);
//     //       reject(err);
//     //     } else {
//     //       console.log('Rows:', rows);
//     //       resolve(rows);
//     //     }
//     //   });
//     // });

//     // sql.close(err => {
//     //   if (err) {
//     //     console.error('Error closing connection:', err);
//     //   } else {
//     //     console.log('Connection closed successfully');
//     //   }
//     // });

//     // const ADODB = require('node-adodb');
//     // const connection = ADODB.open(
//     //   'Provider=Microsoft.ACE.OLEDB.12;Data Source=O:\\Bembi\\_WebSite\\website.mdb;',
//     // );

//     // // Оновлення даних у таблиці
//     // try {
//     //   return await connection
//     //     .execute('SELECT * FROM menu')
//     //     .then(data => {
//     //       console.log(data);
//     //       return data;
//     //     })
//     //     .catch(error => {
//     //       console.error('Error updating data:', error);
//     //     });
//     // } catch (err) {
//     //   console.log(err);
//     // }

//     // const mdbReaderModule = await import('mdb-reader'); // Динамічний імпорт
//     // const mdbReader = mdbReaderModule.default; // доступ до класу через default

//     // const fileBuffer = fs.readFileSync('O:\\Bembi\\_WebSite\\website.mdb');
//     // const reader = new mdbReader(fileBuffer);

//     // const tableNames = reader.getTableNames();
//     // console.log('Таблиці в базі даних:', tableNames);

//     // const rows = reader.getTable('menu').getData();
//     // console.log('Рядки з таблиці:', rows);

//     // const body = {
//     //   requests: [
//     //     {
//     //       action: 'select',
//     //       destination: '2sm_menu',
//     //     },
//     //   ],
//     // };
//     // const rows = await getSite(body);

//     // console.log(rows);

//     let result;

//     // result = await viewTable('attribute');
//     // result = await viewTable('attribute_description');

//     // result = await viewTable('attribute_value');
//     // result = await viewTable('attribute_value_description');

//     // result = await viewTable('category');
//     // result = await viewTable('category_description');
//     // result = await viewTable('category_path');
//     // result = await viewTable('menu');
//     // result = await viewTable('menu_description');
//     // result = await viewTable('menu_path');

//     // result = await viewTable('product');
//     // result = await viewTable('product_description');

//     // result = await viewTable('product_category');

//     // result = await viewTable('product_images');
//     // result = await viewTable('product_special');
//     // result = await viewTable('product_attributes');

//     // result = await viewTable('product_stickers');

//     // const result = 0;
//     return result;
//   }
// }
