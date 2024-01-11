"use strict";
import { Conversation } from "@types/conversation";

export const getConversationBySenderId = async (id: number): Promise<Conversation> => {
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

export const getConversationById = async (id: number): Promise<Conversation> => {
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

export const getAllConversations = async (id: number): Promise<Conversation[]> => {
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

interface PropsNewConversation {
  sender: { id: number, nickname: string };
  recipient: { id: number, nickname: string };
}

export const postConversation = async ({ sender, recipient }: PropsNewConversation): Promise<any> => {
  try {
    return await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/conversations/${sender.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientId: recipient.id,
          recipientNickname: recipient.nickname,
          senderId: sender.id,
          senderNickname: sender.nickname,
          lastMessageTimestamp: new Date().getTime()
        }),
      }
    ).then(response => response.json())
      .catch(e => "An error occurred, Can't post a new conversation!----" + e);
  } catch (e) {
    throw new Error("An error occurred, Can't post a new conversation!");
  }
};