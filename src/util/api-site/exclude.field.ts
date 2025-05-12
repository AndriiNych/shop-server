export function excludeFieldEs(data: any) {
  return data.map(elem => {
    const { es, ...fields } = elem;
    // fields.date_start = fields.date_start.toISOString().split('T')[0];
    // fields.date_end = fields.date_end.toISOString().split('T')[0];
    return { ...fields };
  });
}
