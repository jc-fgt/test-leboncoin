"use strict";
import React, { createRef, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatedDateFromTimestamp } from "@utils/dates";
import { patchConversation } from "@api/conversations";
import { postNewMessage } from "@api/messages";
import { ConversationContext, loggedUserId } from "@components/hoc/ConversationContext/ConversationContext";
import Message from "@components/molecules/Message/Message";
import { Wrapper, TopBar, Flow, BottomMessage } from "./Conversation.styled";
import InputMessageBox from "@components/molecules/InputMessageBox/InputMessageBox";

const Conversation = () => {
  const lastMessageRef = createRef();
  const router = useRouter();
  const context = useContext(ConversationContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    scrollToBottom();
  });

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handlePost = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (message) {
        postNewMessage({
          conversationId: context.conversation.id,
          userId: loggedUserId,
          body: message,
        }).then(() => {
          patchConversation(context.conversation.id);
          setMessage("");
          scrollToBottom();
          router.replace(router.asPath);
        });
      }
    }
  };

  const scrollToBottom = () => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Wrapper>
      <TopBar>
        <div>{context.conversation.senderNickname} - Vous</div>
        <div>Dernier message le : {formatedDateFromTimestamp(context.conversation.lastMessageTimestamp)}</div>
      </TopBar>

      <Flow>
        {context.messages.map((message, key) => (
          <Message key={key} message={message} />
        ))}
        <BottomMessage ref={lastMessageRef} />
      </Flow>

      <InputMessageBox
        onChange={handleMessage.bind(this)}
        onValidate={handlePost.bind(this)}
      />
    </Wrapper>
  );
}

export default Conversation;
