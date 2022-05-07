import React from "react";
import styles from "../styles/index.module.scss";
import Headline1 from "../components/headline1";
import Headline2 from "../components/headline2";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Headline1/>
        <Headline2/>
      </main>
    </div>
  );
}
