import { User } from "@types/user";

export const filterUser = (id: number, users: User[]): User => {
  const user = users.filter(user => user.id === id ? user : null)[0];
  return user;
}