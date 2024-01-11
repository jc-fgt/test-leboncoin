"use strict";
import React from "react";
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import styles from '@styles/Conversations.module.css';
import { InputWrapper } from "./InputMessageBox.styled";
import Input from '@mui/material/Input';

interface Props {
  onChange: (e) => {}
  onValidate: (e) => {}
}

const InputMessageBox = ({ onChange, onValidate }: Props) => {
  return (
    <InputWrapper>
      <Input
        id="message-box"
        placeholder="Type your message here ..."
        type='text'
        className={styles.messageBox}
        onChange={e => onChange(e)}
        onKeyDown={e => onValidate(e)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="send message"
              onClick={(e) => onValidate(e)}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </InputWrapper>
  )
}

export default InputMessageBox