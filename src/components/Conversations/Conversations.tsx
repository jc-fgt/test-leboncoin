import React from "react";
import { Conversation } from "@types/conversation";
import { Wrapper, Tile, Persona, LeftSideTile, RightSideTile } from "@components/Conversations/Conversations.styled";
import { randomColor } from "@utils/colors";
import { formatedDateFromTimestamp } from "@utils/dates";

interface Props {
  conversations: Conversation[];
}

//click on tile redirect to the targeted conversation
function Conversations({ conversations }: Props) {
  return (
    <Wrapper>
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
      )
      )}
    </Wrapper>
  );
}

export default Conversations;