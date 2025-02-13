export function excludeFieldEs(data: any) {
  return data.map(elem => {
    const { es, ...fields } = elem;
    return { ...fields };
  });
}
