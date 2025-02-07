export async function getSite(body: object) {
  const response = await fetch(process.env.SITE_PATH, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SITE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json();
}
