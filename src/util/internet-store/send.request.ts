async function sendRequestToSite(body: object) {
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

export async function sendRequests(request) {
  const body = {
    requests: Array.isArray(request) ? request : [request],
  };

  return await sendRequestToSite(body);
}
