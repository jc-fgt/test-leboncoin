import React, { createContext } from "react";
import { Message as MessageType } from "@types/message";
import { Conversation as ConversationType } from "@types/conversation";
import { getLoggedUserId } from "@utils/getLoggedUserId";

export const loggedUserId = getLoggedUserId();
export const ConversationContext = createContext({ loggedUserId, conversation: {}, messages: [] });

export const ConversationProvider: React.FC<{ children: React.ReactNode, conversation: ConversationType, messages: MessageType[] }> = ({
  children,
  conversation,
  messages
}) => {
  return (
    <ConversationContext.Provider value={{ loggedUserId, conversation, messages }}>
      {children}
    </ConversationContext.Provider >
  )
};
