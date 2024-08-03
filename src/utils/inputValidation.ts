export const isEmail = (email: string) => {
  const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

  return re.test(String(email).toLowerCase());
};
