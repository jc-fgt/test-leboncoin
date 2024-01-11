"use strict";
import { GetServerSideProps } from "next";
import { loggedUserId } from "@pages/_app"
import styles from '@styles/Conversations.module.css'
import { getUserById } from "@api/users";
import { getAllConversations } from "@api/conversations"
import { Conversation } from "@types/conversation";
import Conversations from "@components/molecules/Conversations/Conversations";
import Header from "@components/atoms/Header/Header";

interface Props {
  conversations: Conversation[];
}

const ConversationsPage = ({ conversations }: Props) => {
  return (
    <div className={styles.container}>
      <Header type="normal" />
      <hr />
      <Conversations conversations={conversations} />
    </div>
  );
};

export default ConversationsPage;

export const getServerSideProps = (async () => {
  const user = await getUserById(loggedUserId);
  let conversations = [];

  if (user.id) {
    conversations = await getAllConversations(user.id);
  }

  return {
    props: {
      conversations,
    },
  };
}) satisfies GetServerSideProps<any>;
