import { User } from "@types/user";

export const getUserById = async (id: number): Promise<User> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/users/${id}`
    );

    if (!response.ok) throw new Error("This user doens not exist!");
    return response.json();

  } catch (e) {
    throw new Error("This user doens not exist");
  }
}
