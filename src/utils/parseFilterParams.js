const parseName = (name) => {
  if (typeof name !== 'string') return;
  return name;
};

export const parseFilterParams = (query) => {
  const { name } = query;
  const parsedName = parseName(name);

  return {
    name: parsedName,
  };
};
