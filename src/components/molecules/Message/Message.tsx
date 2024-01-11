"use strict";
import React, { useContext, useEffect, useState } from "react";
import { Message } from "@types/message";
import { randomColor } from "@utils/colors";
import { ConversationContext } from "@components/hoc/ConversationContext/ConversationContext";
import { Tile, Wrapper } from "./Message.styled";

interface Props {
  message: Message;
}

const Message = ({ message }: Props) => {

  const context = useContext(ConversationContext);
  const [userName, setUserName] = useState('');
  const [isOwner, setIsOwner] = useState(true);
  const [color, setColor] = useState('rgba(220, 220, 220)');

  useEffect(() => {
    if (message.authorId === context.conversation.recipientId) {
      setUserName(context.conversation.recipientNickname);
      setIsOwner(false);
      const color = randomColor(context.conversation.recipientNickname);
      setColor(color.value);
    }
  }, [message, context]);


  return (
    <Wrapper isOwner={isOwner}>
      <Tile color={color} author={userName}>{message.body}</Tile>
    </Wrapper>

  );
}

export default Message;
