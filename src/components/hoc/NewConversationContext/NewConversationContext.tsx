"use strict";
import React, { createContext } from "react";
import { User as UserType } from "@types/user";
import { Conversation as ConversationType } from "@types/conversation";

const defaultUser = { id: null, nickname: '' }
export const NewConversationContext = createContext({ sender: defaultUser, recipient: defaultUser, conversation: {} });

export const NewConversationProvider: React.FC<{ children: React.ReactNode, sender: UserType, recipient: UserType, conversation: ConversationType }> = ({
  children,
  sender,
  recipient
}) => {
  return (
    <NewConversationContext.Provider value={{ sender, recipient, conversation }}>
      {children}
    </NewConversationContext.Provider >
  )
};
