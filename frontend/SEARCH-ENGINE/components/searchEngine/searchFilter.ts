export const filterSearchResults = (data: string[], searchParams: string) => {
  if (searchParams.trim().length === 0) {
    return data;
  }

  const lowerCaseSearchParams = searchParams.toLowerCase();
  return data.filter((item) => {
    return item.toLowerCase().includes(lowerCaseSearchParams);
  });
};
