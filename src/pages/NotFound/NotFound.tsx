import React from "react";
import Header from "@components/Header/Header";
import styles from '@styles/Conversations.module.css';
import { Wrapper } from "@pages/NotFound/NotFound.styled";

function NotFound() {
  return (
    <div className={styles.container}>
      <Header type="small" />
      <Wrapper>ARG! This conversation does not exist!</Wrapper>
    </div>
  );
}

export default NotFound;
