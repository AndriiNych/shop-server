import { transformFieldNameToDbColumn } from './transform.db.columns';
import { sendRequests } from './send.request';
import { IsTableListType } from './table-list';

//TODO make <T> for type data

function createDataForUpdate(tableName: IsTableListType, data: any[]): object {
  return {
    action: 'update',
    destination: `${tableName}`,
    data: createFieldsForUpdate(data),
  };
}

function createFieldsForUpdate(data: any) {
  return data.map(elem => {
    const { id, ...params } = elem;
    return { fields: { ...params }, condition: `id = ${id}` };
  });
}

export async function sendUpdateRequest(tableName: IsTableListType, data: any[]): Promise<boolean> {
  const transformData = transformFieldNameToDbColumn(tableName, data);

  const body = createDataForUpdate(tableName, transformData);

  const result = await sendRequests(body);

  return Array.isArray(result) && result.length > 0 && result[0]?.success === 'ok';
}
