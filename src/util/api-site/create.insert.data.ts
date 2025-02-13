export function createInsertData(tableName: string, data: []): object {
  return {
    requests: [
      {
        action: 'insert',
        destination: `2sm_${tableName}`,
        data: data,
      },
    ],
  };
}
