import React from "react";
import styles from "../styles/headline.module.scss";
import headline2styles from "../styles/headline2.module.scss";
import poke from "../images/poke.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Headline2() {
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
          <div
            className={`${headline2styles.mainContent} ${styles.mainContent} mainContent`}
          >
            <Link href={"/posts/1"}>
              <div
                className={`${headline2styles.main1h} ${styles.link} main1h`}
              >
                <div
                  className={`${headline2styles.main1htitle} ${styles.articleContainer} main1htitle`}
                >
                  <h1>
                    Need a Big Mac Out on the Tundra? There's an App (and a
                    Plane) for That.
                  </h1>
                </div>
                <div className={`${headline2styles.main1hul} main1hul`}>
                  <ul className={`${styles.subtext}`}>
                    <li>
                      With the help of bush pilots, residents of remote Alaskan
                      villages are increasingly using DoorDash, Uber Eats and
                      other food-delivery services.
                    </li>
                    <li>
                      A tentative deal was reached with food-delivery services
                      to increase food avaliability in some areas - and it's
                      showing massive improvement.
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <Link href={"/posts/1"}>
              <div
                className={`${headline2styles.main1himage} ${styles.link} ${headline2styles.articleContainer} main1himage`}
              >
                <Image alt="Image of Poke" src={poke}></Image>
              </div>
            </Link>
            <Link href={"/posts/1"}>
              <div
                className={`${headline2styles.main3h} ${styles.link} ${headline2styles.main3h1} ${styles.borderBottom} ${styles.articleContainer} main3h`}
              >
                <div className={`${headline2styles.main3htitle} main3htitle`}>
                  <h3>
                    Civilians who escaped the besieged steel plant in Mariupol
                    described a harrowing life underground.
                  </h3>
                </div>
              </div>
            </Link>
            <Link href={"/posts/1"}>
              <div
                className={`${headline2styles.main2h} ${styles.link} ${styles.articleContainer} ${headline2styles.main2h1} ${styles.borderBottom} main2h`}
              >
                <div className={`${headline2styles.main2htitle} main2htitle`}>
                  <h2>Best Salmon Recipes for Weeknight Dinners</h2>
                </div>
                <div
                  className={`${headline2styles.main2hcontent} ${styles.subtext} main2hcontent`}
                >
                  Baked in the oven or pan-fried on the stovetop, these are our
                  best salmon recipes for an easy weeknight dinner.
                </div>
              </div>
            </Link>
            <Link href={"/posts/1"}>
              <div
                className={`${headline2styles.main2h} ${styles.link} ${styles.articleContainer} ${headline2styles.main2h2} main2h`}
              >
                <div className={`${headline2styles.main2htitle} main2htitle`}>
                  <h2>The Pour - 12 Natural Wines to Drink Now</h2>
                </div>
                <div
                  className={`${headline2styles.main2hcontent} ${styles.subtext} main2hcontent`}
                >
                  For 20 years, natural wine has been dismissed as a fad or a
                  fraud. Yet more people make it, more drink it and good bottles
                  are easier to find. Some are curious because it's fashionable.
                  Others are curious about wines made outside the norm
                </div>
              </div>
            </Link>
            <Link href={"/posts/1"}>
              <div
                className={`${headline2styles.main3h} ${styles.link} ${styles.articleContainer} ${headline2styles.main3h2} main3h`}
              >
                <div className={`${headline2styles.main3htitle} main3htitle`}>
                  <h3>
                    Under Russian bombardment, a Ukrainian commander in Mariupol
                    said that his forces may have only hours left.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
