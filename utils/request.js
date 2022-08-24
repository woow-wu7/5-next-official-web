export const request = async (url) => {
  const result = await fetch(url);
  const data = await result.json();

  return data;
};
