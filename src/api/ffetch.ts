export const ffetch = async <T>(url: string): Promise<T> => {
  const json = await import('../../mocks/' + url + '.json');

  const timeout = ((Math.random() * 10) % 2) * 1000;
  console.log('wating...', timeout);
  await new Promise((res) => setTimeout(res, timeout));

  return json.default;
};
