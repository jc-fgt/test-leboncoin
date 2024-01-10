import React, { use, useContext, useEffect, useState } from "react";
import { Message } from "@types/message";
import { randomColor } from "@utils/colors";
import { ConversationContext } from "@components/ConversationContext/ConversationContext";
import { Tile, Wrapper } from "@components/Message/Message.styled";

interface Props {
  message: Message;
}

function Message({ message }: Props) {
  const context = useContext(ConversationContext);
  const [userName, setUserName] = useState('');
  const [isOwner, setIsOwner] = useState(true);
  const [color, setColor] = useState('rgba(220, 220, 220)');

  useEffect(() => {
    if (message.authorId === context.conversation.recipientId) {
      setUserName(context.conversation.recipientNickname)
      setIsOwner(false)
      const color = randomColor(context.conversation.recipientNickname);
      setColor(color.value)
    }
  }, [message, context]);
  //if is owner : 
  //    align right, else left
  //    color: grey, else generate color
  return (
    <Wrapper isOwner={isOwner}>
      <Tile color={color} author={userName}>{message.body}</Tile>
    </Wrapper>

  );
}

export default Message;

