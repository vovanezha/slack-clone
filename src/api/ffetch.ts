export const ffetch = async <T>(url: string): Promise<T> => {
  const json = await fetch('../../mocks/' + url + '.json').then((res) => res.json());

  const timeout = ((Math.random() * 10) % 2) * 1000;

  await new Promise((res) => setTimeout(res, timeout));

  return json;
};
