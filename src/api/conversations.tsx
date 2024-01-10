import { Conversation } from "@types/conversation";

export const getBySenderId = async (id: number): Promise<Conversation> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/conversations/${id}`
    );

    if (!response.ok) throw new Error(`Can't get conversation by sender for id ${id}!`);
    return response.json();
  } catch (e) {
    throw new Error(`Can't get conversation by sender for id ${id}!`);
  }
}

export const getById = async (id: number): Promise<Conversation> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/conversation/${id}`
    );

    if (!response.ok) throw new Error(`Can't get conversation for id ${id}!`);
    return response.json();
  } catch (e) {
    throw new Error(`Can't get conversation for id ${id}!`);
  }
}

export const getAll = async (id: number): Promise<Conversation[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/conversations/${id}`
    );

    if (!response.ok) throw new Error(`Can't get conversation!`);
    return response.json();
  } catch (e) {
    throw new Error(`Can't get conversation!`);
  }
}

export const patchConversation = async (id: number): Promise<Conversation> => {
  try {
    return await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/conversation/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          lastMessageTimestamp: new Date().getTime(),
        }),
      }
    ).then(response => response.json())
      .catch(e => "Can't patch conversation!")
  } catch (e) {
    throw new Error(`Can't patch conversation!`);
  }

}