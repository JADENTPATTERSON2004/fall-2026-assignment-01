export type RemoteUser = {
  id: number;
  name: string;
  email: string;
};

export async function fetchUserEmails(): Promise<string[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = (await response.json()) as RemoteUser[];

  return users.map((user) => user.email);
}
