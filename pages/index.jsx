import React from "react";
import styles from "../styles/index.module.scss";
import poke from "../images/poke.jpeg";
import Image from "next/image";

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
          <div className={`${styles.mainContent} mainContent`}>
            <div className={`${styles.main1h} main1h`}>
              <div className={`${styles.main1htitle} main1htitle`}>
                <h1>
                  Ukrainian Forces in Mariupol Appeal for Help in Last Stand
                </h1>
              </div>
              <div className={`${styles.main1hul} main1hul`}>
                <ul className={`${styles.subtext}`}>
                  <li>
                    The two sides traded artillery barrages as Russia tried to
                    pierce the defenses of dug-in Ukrainian fighters.
                  </li>
                  <li>
                    A tentative deal was reached to evacuate some women and
                    children from the besieged city of Mariupol, but such
                    agreements have fallen through in the past. Here's the
                    latest.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.main2h} ${styles.borderBottom} main2h`}>
              <div className={`${styles.main2htitle} main2htitle`}>
                <h2>
                  The Race to Arm Ukraine With Advanced Weapons Brings a Notable
                  Risk
                </h2>
              </div>
              <div
                className={`${styles.main2hcontent} ${styles.subtext} main2hcontent`}
              >
                The U.S. and its allies are sending longer-range weapons like
                howitzers and antiaircraft systems. Russia has said that such
                actions could ignite a wider war.
              </div>
            </div>
            <div className={`${styles.main3h} ${styles.main3h1} main3h`}>
              <div className={`${styles.main3htitle} main3htitle`}>
                <h3>
                  Civilians who escaped the besieged steel plant in Mariupol
                  described a harrowing life underground.
                </h3>
              </div>
            </div>
            {/* <div className={`${styles.main3h} ${styles.main3h2} main3h`}>
              <div className={`${styles.main3htitle} main3htitle`}>
                <h3>
                  Under Russian bombardment, a Ukrainian commander in Mariupol
                  said that his forces may have only hours left.
                </h3>
              </div>
            </div> */}
            <div className={`${styles.main1himage} main1himage`}>
              <Image alt="Image of Poke" src={poke}></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
