export function createInsertData(tableName: string, data: []): object {
  return {
    requests: [
      {
        action: 'insert',
        destination: `${tableName}`,
        data: data,
      },
    ],
  };
}
