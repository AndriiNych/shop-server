import { getDbAccess } from '../mdb';
import { getSite } from '../test';
import { createInsertData } from './create.insert.data';
import { createUpdateData } from './create.update.data';
import { excludeFieldEs } from './exclude.field';

const TABLES = ['menu', 'menu_description'];

export async function viewTable(tableName: string) {
  //   const sqlString = `SELECT * FROM ${tableName} WHERE es > 0 `;

  const data = await getDbAccess(tableName);

  //   console.log(data);

  const resultInsert = await sendInsertData(tableName, data);
  console.log(resultInsert);

  const resultUpdate = await sendUpdateData(tableName, data);
  console.log(resultUpdate);

  //   return { resultInsert, resultUpdate };
  return { resultUpdate };
}

async function sendInsertData(tableName: string, data: any) {
  const dataInsert = data.filter(elem => elem.es === 1);

  const preDataToSend = excludeFieldEs(dataInsert);
  console.log(preDataToSend);

  const dataToSend = createInsertData(tableName, preDataToSend);
  console.log(dataToSend);

  return await getSite(dataToSend);
}

async function sendUpdateData(tableName: string, data: any) {
  const dataInsert = data.filter(elem => elem.es === 2);

  const preDataToSend = excludeFieldEs(dataInsert);

  const dataToSend = createUpdateData(tableName, preDataToSend);

  const resultToSend = createRequests(dataToSend);
  console.log(resultToSend);

  return await getSite(resultToSend);
}

function createRequests(requests) {
  return {
    requests: [requests],
  };
}
