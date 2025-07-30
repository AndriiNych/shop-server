// export function createInsertData(tableName: string, data: []): object {
//   return {
//     requests: [
//       {
//         action: 'insert',
//         destination: `${tableName}`,
//         data: data,
//       },
//     ],
//   };
// }

import { sendRequests } from './send.request';
import { IsTableListType } from './table-list';
import { transformFieldNameToDbColumn } from './transform.db.columns';

function createDataForInsert(tableName: IsTableListType, data: any[]): object {
  return {
    action: 'insert',
    destination: `${tableName}`,
    data: data,
  };
}

// function createFieldsForInsert(data: any) {
//   return data.map(elem => {
//     const { id, ...params } = elem;
//     return { fields: { ...params }, condition: `id = ${id}` };
//   });
// }

export async function sendInsertRequest(tableName: IsTableListType, data: any[]): Promise<boolean> {
  const transformData = transformFieldNameToDbColumn(tableName, data);

  const body = createDataForInsert(tableName, transformData);
  console.log(body);

  const result = await sendRequests(body);
  console.log(result);

  return Array.isArray(result) && result.length > 0 && result[0]?.success === 'ok';
}
