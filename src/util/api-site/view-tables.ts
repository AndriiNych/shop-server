// import { Database } from 'node_modules/mdb-reader/lib/types/Database';
import { getDbAccess } from '../mdb';
import { getSite } from '../test';
import { createInsertData } from './create.insert.data';
import { createUpdateData } from './create.update.data';
import { excludeFieldEs } from './exclude.field';

const TABLES = ['menu', 'menu_description'];
// const delta = 2000;

export async function viewTable(tableName: string) {
  //   const sqlString = `SELECT * FROM ${tableName} WHERE es > 0 `;

  const data = await getDbAccess(tableName);
  // console.log(data);
  // const maxId = Math.max(...data.map(elem => Number(elem.id)));
  // let start = 0;
  // while (start < maxId) {
  //   console.log(start);
  //   const dataFiltered = filterDataByID(data, start);

  const resultInsert = await sendInsertData(tableName, data);
  // console.log(resultInsert);

  const resultUpdate = await sendUpdateData(tableName, data);
  // console.log(resultUpdate);

  // start = start + delta;
  // }
  // console.log(`end with: ${start}`);

  //   return { resultInsert, resultUpdate };
  const r = data.map(elem => Number(elem.id));
  console.log(Math.min(...r), Math.max(...r));
  return { resultInsert };
}

// function filterDataByID(data: any, start: number) {
//   return data.filter(elem => elem.id >= start && elem.id < start + delta);
// }

async function sendInsertData(tableName: string, data: any) {
  const dataInsert = data.filter(elem => elem.es === 1);

  const preDataToSend = excludeFieldEs(dataInsert);
  // console.log(preDataToSend);

  const dataToSend = createInsertData(tableName, preDataToSend);
  // console.log(dataToSend);

  return await getSite(dataToSend);
}

async function sendUpdateData(tableName: string, data: any) {
  const dataInsert = data.filter(elem => elem.es === 2);

  const preDataToSend = excludeFieldEs(dataInsert);

  const dataToSend = createUpdateData(tableName, preDataToSend);

  const resultToSend = createRequests(dataToSend);
  // console.log(resultToSend);

  return await getSite(resultToSend);
}

function createRequests(requests) {
  return {
    requests: [requests],
  };
}
