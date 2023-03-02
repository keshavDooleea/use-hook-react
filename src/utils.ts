export type IUser = {
  id: string;
  firstName: string;
};

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const fetchUser = async (): Promise<IUser> => {
  await wait(2000);
  const fetchResults = await fetch("https://dummyjson.com/users/1");
  return await fetchResults.json();
};
