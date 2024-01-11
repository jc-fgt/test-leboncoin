"use strict";
import { GetServerSideProps } from "next";
import styles from '@styles/Conversations.module.css'
import { getConversationById } from "@api/conversations";
import { getByConversationId } from "@api/messages";
import { Conversation as ConversationType } from "@types/conversation";
import { Message as MessageType } from "@types/message";
import { ConversationProvider } from "@components/hoc/ConversationContext/ConversationContext";
import Header from "@components/atoms/Header/Header";
import NotFound from "@components/molecules/NotFound/NotFound";
import Conversation from "@components/organisms/Conversation/Conversation";

const DEFAULT_CONVERSATION = {}

interface Props {
  conversation: ConversationType;
  messages: MessageType[];
}

const ConversationPage = ({ conversation, messages }: Props) => {
  if (!conversation.id) {
    return <NotFound />
  }

  return (
    <div className={styles.container}>
      <Header type="small" />
      <ConversationProvider conversation={conversation} messages={messages} >
        <Conversation />
      </ConversationProvider>
    </div>
  );
};

export default ConversationPage;

export const getServerSideProps = (async (context) => {
  const { id: conversationId } = context.query;

  const conversation = await getConversationById(conversationId);
  const messages = await getByConversationId(conversationId);

  return {
    props: {
      conversation: conversation[0] || DEFAULT_CONVERSATION,
      messages: messages || null
    },
  };
}) satisfies GetServerSideProps<any>;
