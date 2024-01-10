import { Message } from "@types/message";

export const getByConversationId = async (id: number): Promise<Message[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/messages/${id}`
    );

    if (!response.ok) throw new Error(`Can't get messages for conversationId ${id}!`);
    return response.json();
  } catch (e) {
    throw new Error(`Can't get messages for conversationId ${id}!`);
  }
}


interface Props {
  conversationId: number;
  userId: number;
  body: string;
}

export const postNewMessage = async ({ conversationId, userId, body }: Props): Promise<any> => {
  try {
    return await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/messages/${conversationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId,
          timestamp: new Date().getTime(),
          authorId: userId,
          body,
        }),
      }
    ).then(response => response.json())
      .catch(e => "An error occurred, Can't post a new message !");
  } catch (e) {
    throw new Error("An error occurred, Can't post a new message !");
  }
};
