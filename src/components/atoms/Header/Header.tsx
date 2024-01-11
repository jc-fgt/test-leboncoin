"use strict";
import React, { useEffect, useState } from "react";
import styles from '@styles/Conversations.module.css'
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import Logo from '@assets/lbc-logo.webp'

const HEADER_WIDTH = 200;
const HEADER_HEIGHT = 62;
const HEADER_WIDTH_SMALL = 100;
const HEADER_HEIGHT_SMALL = 31;

interface Props {
  type: string
}
const Header = ({ type }: Props) => {

  const [dimensions, setDimensions] = useState({ width: HEADER_WIDTH, height: HEADER_HEIGHT })

  useEffect(() => {
    if (type === 'small') {
      setDimensions({ width: HEADER_WIDTH_SMALL, height: HEADER_HEIGHT_SMALL })
    }
  }, [type])

  return (
    <>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
        <meta robots="noindex" />
      </Head>

      <main className={styles.main} data-testid="conversations-header">
        <Link href="/conversations/" passHref>
          <Image data-testid="header-logo" src={Logo} alt="Leboncoin Frontend Team" width={dimensions.width} height={dimensions.height} />
        </Link>
      </main>
    </>
  );
}

export default Header;
