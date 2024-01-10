import React, { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import Message from "@components/Message/Message";
import { formatedDateFromTimestamp } from "@utils/dates";
import { ConversationContext, loggedUserId } from "@components/ConversationContext/ConversationContext";
import { Wrapper, TopBar, Flow, Input, InputWrapper } from "@components/Conversation/Conversation.styled";
import { patchConversation } from "@api/conversations";
import { postNewMessage } from "@api/messages";

const Conversation = () => {
  const router = useRouter();
  const context = useContext(ConversationContext);

  const previousMessage = useRef(null);
  const [message, setMessage] = useState("");

  const handlePost = (e) => {
    if (e.key === "Enter") {
      if (message) {
        postNewMessage({
          conversationId: context.conversation.id,
          userId: loggedUserId,
          body: message,
        }).then(response => {
          patchConversation(context.conversation.id);
          setMessage("");
          router.replace(router.asPath);
        });
      }
    }
  };

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
      </Flow>

      <InputWrapper>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handlePost.bind(this)}
          placeholder="Type your message here ..."
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default Conversation;
