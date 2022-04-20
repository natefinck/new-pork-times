import React from "react";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>This is the home page.</h1>
        <h1 className={styles.title}>Check out our first <Link href="/posts/1"><a>article</a></Link>!</h1> */}

        <div className={`${styles.mainHeadline} mainHeadline`}>
          <div className={`${styles.mainTitle} mainTitle`}>
            <h1>Ukraine and Russia Trade Strikes Along Eastern Front</h1>
          </div>
          <div className={`${styles.mainContainer} mainContainer`}></div>
        </div>
      </main>
    </div>
  );
}
