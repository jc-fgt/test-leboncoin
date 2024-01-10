import { GetServerSideProps } from "next";
import Head from 'next/head'
import Image from 'next/image'
import Logo from '@assets/lbc-logo.webp'
import { loggedUserId } from "@pages/_app"
import styles from '@styles/Conversations.module.css'
import { getUserById } from "@api/users";
import { getAll } from "@api/conversations"
import { Conversation } from "@types/conversation";
import Conversations from "@components/Conversations/Conversations";
import Header from "@components/Header/Header";

interface Props {
    conversations: Conversation[];
}

function ConversationsPage({ conversations }: Props) {
    return (
        <div className={styles.container}>
            <Header />
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
        conversations = await getAll(user.id);
    }

    return {
        props: {
            conversations,
        },
    };
}) satisfies GetServerSideProps<any>;