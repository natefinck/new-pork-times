import React from "react";
import styles from "../styles/index.module.scss";
import poke from "../images/poke.jpeg";
import Image from "next/image";
import Link from "next/link";
import Headline from "../components/headline";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Headline />
      </main>
    </div>
  );
}
