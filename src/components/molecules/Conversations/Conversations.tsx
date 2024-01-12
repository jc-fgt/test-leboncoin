"use strict";
import React, { useContext, useState } from "react";
import { Conversation } from "@types/conversation";
import { randomColor } from "@utils/colors";
import { formatedDateFromTimestamp } from "@utils/dates";
import { Wrapper, Container, Tile, Persona, LeftSideTile, RightSideTile } from "./Conversations.styled";
import NewConversation from "@components/molecules/NewConversation/NewConversation";
import Button, { BUTTON_ADD } from "@components/atoms/Button/Button";
import { useRouter } from "next/router";
import { NewConversationContext } from "@components/hoc/NewConversationContext/NewConversationContext";
import { postConversation } from "@api/conversations";

interface Props {
  conversations: Conversation[];
}

const Conversations = ({ conversations }: Props) => {
  const router = useRouter();
  const context = useContext(NewConversationContext);
  const [displayLayer, setDisplayLayer] = useState(false)

  const toggleNewConversationLayer = () => {
    setDisplayLayer(!displayLayer);
    router.replace(router.asPath);
  }

  const handlePost = () => {
    if (context.sender.id && context.recipient.id) {
      postConversation({
        sender: context.sender,
        recipient: context.recipient
      }).then((response) => {
        if (response.id) {
          toggleNewConversationLayer();

          //Try to refresh conversation list, but, in fact, it is "refreshed" only after restarting server ... Don't know why
          router.replace(router.asPath);

          //redirect to /coversation/:id
          //router.push(`conversation/${response.id}`);
        }
      }).catch(e => console.error(e));
    }
  }

  return (
    <Wrapper>

      {displayLayer && <NewConversation loaded={displayLayer} onPost={handlePost.bind(this)} onClose={toggleNewConversationLayer.bind(this)} />}
      <Container>
        {conversations.map((conversation, key) => (
          <Tile key={key} href={`/conversation/${conversation.id}`}>
            <LeftSideTile>
              <Persona color={randomColor(conversation.senderNickname)} />
            </LeftSideTile>
            <RightSideTile>
              <div>{conversation.senderNickname}</div>
              <div>{formatedDateFromTimestamp(conversation.lastMessageTimestamp)}</div>
            </RightSideTile>
          </Tile>
        ))}
      </Container>


      <Button onValidate={toggleNewConversationLayer.bind(this)} theme={BUTTON_ADD} label="Nouvelle conversation" />
    </Wrapper>
  );
}

export default Conversations;
