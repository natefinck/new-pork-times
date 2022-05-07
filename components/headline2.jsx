import React from "react";
import styles from "../styles/headline.module.scss";
import headline1styles from "../styles/headline2.module.scss";
import poke from "../images/poke.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Headline() {

  return (
      <>
      <div className={styles.headlineContainer}>
        {/* <h1 className={styles.title}>This is the home page.</h1>
        <h1 className={styles.title}>Check out our first <Link href="/posts/1"><a>article</a></Link>!</h1> */}
        <div
          className={`${styles.mainHeadline} ${styles.borderBottom} mainHeadline`}
        >
          {/* <div className={`${styles.mainTitle} mainTitle`}>
            <h1>Ukraine and Russia Trade Strikes Along Eastern Front</h1>
          </div> */}
          <div className={`${styles.mainContent} mainContent`}>
            <div className={`${headline1styles.main1h} main1h`}>
              <div
                className={`${headline1styles.main1htitle} ${styles.articleContainer} main1htitle`}
              >
                <Link href={"/posts/1"}>
                  <h1>
                    Ukrainian Forces in Mariupol Appeal for Help in Last Stand
                  </h1>
                </Link>
              </div>
              <div className={`${headline1styles.main1hul} main1hul`}>
                <ul className={`${headline1styles.subtext}`}>
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
            <div
              className={`${headline1styles.main1himage} ${headline1styles.articleContainer} main1himage`}
            >
              <Image alt="Image of Poke" src={poke}></Image>
            </div>
            <div
              className={`${headline1styles.main3h} ${headline1styles.main3h1} ${styles.borderBottom} ${styles.articleContainer} main3h`}
            >
              <div className={`${headline1styles.main3htitle} main3htitle`}>
                <h3>
                  Civilians who escaped the besieged steel plant in Mariupol
                  described a harrowing life underground.
                </h3>
              </div>
            </div>
            <div
              className={`${headline1styles.main2h} ${styles.articleContainer} ${headline1styles.main2h1} ${styles.borderBottom} main2h`}
            >
              <div className={`${headline1styles.main2htitle} main2htitle`}>
                <h2>Best Salmon Recipes for Weeknight Dinners</h2>
              </div>
              <div
                className={`${headline1styles.main2hcontent} ${styles.subtext} main2hcontent`}
              >
                Baked in the oven or pan-fried on the stovetop, these are our
                best salmon recipes for an easy weeknight dinner.
              </div>
            </div>
            <div
              className={`${headline1styles.main2h} ${styles.articleContainer} ${headline1styles.main2h2} main2h`}
            >
              <div className={`${headline1styles.main2htitle} main2htitle`}>
                <h2>The Pour - 12 Natural Wines to Drink Now</h2>
              </div>
              <div
                className={`${headline1styles.main2hcontent} ${styles.subtext} main2hcontent`}
              >
                For 20 years, natural wine has been dismissed as a fad or a
                fraud. Yet more people make it, more drink it and good bottles
                are easier to find. Some are curious because it's fashionable.
                Others are curious about wines made outside the norm
              </div>
            </div>
            <div
              className={`${headline1styles.main3h} ${styles.articleContainer} ${headline1styles.main3h2} main3h`}
            >
              <div className={`${headline1styles.main3htitle} main3htitle`}>
                <h3>
                  Under Russian bombardment, a Ukrainian commander in Mariupol
                  said that his forces may have only hours left.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}