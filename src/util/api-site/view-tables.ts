// import { Database } from 'node_modules/mdb-reader/lib/types/Database';
import { getDbAccess } from '../mdb';
import { getSite } from '../test';
import { createInsertData } from './create.insert.data';
import { createUpdateData } from './create.update.data';
import { excludeFieldEs } from './exclude.field';

const TABLES = ['menu', 'menu_description'];

export async function viewTable(tableName: string) {
  const data = await getDbAccess(tableName);

  const resultInsert = await sendInsertData(tableName, data);

  const resultUpdate = await sendUpdateData(tableName, data);

  const r = data.map(elem => Number(elem.id));

  const result = {
    tableName,
    start: Math.min(...r),
    end: Math.max(...r),
    resultInsert,
    resultUpdate,
  };

  return result;
}

async function sendInsertData(tableName: string, data: any) {
  const dataInsert = data.filter(elem => elem.es === 1);

  if (dataInsert.length > 0) {
    const preDataToSend = excludeFieldEs(dataInsert);

    const dataToSend = createInsertData(tableName, preDataToSend);

    return await getSite(dataToSend);
  }
}

async function sendUpdateData(tableName: string, data: any) {
  const dataUpdate = data.filter(elem => elem.es === 2);

  if (dataUpdate.length > 0) {
    const preDataToSend = excludeFieldEs(dataUpdate);

    const dataToSend = createUpdateData(tableName, preDataToSend);

    const resultToSend = createRequests(dataToSend);

    return await getSite(resultToSend);
  }
}

function createRequests(requests) {
  return {
    requests: [requests],
  };
}
