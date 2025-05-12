export function createUpdateData(tableName: string, data: []): object {
  return {
    action: 'update',
    destination: `${tableName}`,
    data: createUpdateFields(data),
  };
}

function createUpdateFields(data: any) {
  return data.map(elem => {
    const { id, ...params } = elem;
    return { fields: { ...params }, condition: `id = ${id}` };
  });
}
