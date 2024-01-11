"use strict";
import React from "react";
import Header from "@components/atoms/Header/Header";
import styles from '@styles/Conversations.module.css';
import { Wrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Header type="small" />
      <Wrapper>ARG! This conversation does not exist!</Wrapper>
    </div>
  );
}

export default NotFound;
