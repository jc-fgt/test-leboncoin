"use strict";
import React, { useContext, useEffect, useState } from "react";
import { Wrapper, Container, ContainerBody, TitleContainer, Select, Close } from "./NewConversation.styled";
import Button, { BUTTON_DISABLED, BUTTON_VALIDATE } from "@components/atoms/Button/Button";
import { loggedUserId } from "@components/hoc/ConversationContext/ConversationContext";
import { getUsers } from "@api/users";
import { filterUser } from "@utils/filterUsers";
import { NewConversationContext } from "@components/hoc/NewConversationContext/NewConversationContext";

interface Props {
  loaded: Boolean;
  onClose: () => {},
  onPost: () => {};
}

const NewConversation = ({ loaded, onClose, onPost }: Props) => {
  const context = useContext(NewConversationContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [sender, setSender] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [buttonTheme, setButtonTheme] = useState(BUTTON_DISABLED);

  useEffect(() => {
    if (loaded) {
      getUsers().then(response => setUsers(response))
    }
  }, [loaded])

  useEffect(() => {
    if (users.length) {
      const newSender = filterUser(loggedUserId, users);
      if (sender !== newSender) {
        setSender(newSender);
      }

      const newRecipient = filterUser(selectedUser, users);
      if (recipient !== newRecipient) {
        setRecipient(newRecipient);
      }
    }
  }, [users, sender, recipient, selectedUser]);

  const handlePost = (e) => {
    context.recipient = recipient;
    context.sender = sender;
    onPost();
  }

  const handleSelectUser = (e) => {
    const value = e.target.selectedOptions[0].value;
    if (value !== '') {
      setSelectedUser(parseInt(value));
      setButtonTheme(BUTTON_VALIDATE);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Close onClick={onClose} />
        <ContainerBody>
          <TitleContainer>Veuillez choisir la personne avec qui converser</TitleContainer>
          <div>
            <Select onChange={handleSelectUser.bind(this)}>
              <option value="">Converser avec ...</option>
              {users?.map((user, key) => (
                (loggedUserId !== user.id) && <option key={key} value={user.id}>{user.nickname}</option>
              ))}
            </Select>
          </div>
          <div>
            <Button theme={buttonTheme} onValidate={handlePost.bind(this)} label="Commencer la conversation" />
          </div>
        </ContainerBody>
      </Container>
    </Wrapper>
  )
}

export default NewConversation;
