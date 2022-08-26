import Atropos from "atropos/react";
import card from "../../public/card/card.svg";
import atroposBg from "../../public/card/atropos-bg.svg";
import atroposMountains from "../../public/card/atropos-mountains.svg";
import atroposForestBack from "../../public/card/atropos-forest-back.svg";
import atroposForestMid from "../../public/card/atropos-forest-mid.svg";
import atroposForestFront from "../../public/card/atropos-forest-front.svg";
import Image from "next/image";
import styles from "./index.module.scss";
import "atropos/css";

export default function Card() {
  return (
    <section className={styles.section}>
      <Atropos
        className={styles.myAtropos}
        activeOffset={100}
        shadowScale={2.05}
        shadow={true}
        rotateXMax={30}
        rotateYMax={30}
        // rotateXInvert={true}
        // rotateYInvert={true}
        // onEnter={() => console.log("Enter")}
        // onLeave={() => console.log("Leave")}
        // onRotate={(x, y) => console.log("Rotate", x, y)}
      >
        <Image src={atroposBg} alt="" data-atropos-offset={2} layout="fill" />
        <Image
          src={atroposMountains}
          alt=""
          data-atropos-offset={1}
          layout="fill"
        />
        <Image
          src={atroposForestBack}
          alt=""
          data-atropos-offset={0}
          layout="fill"
        />
        <Image
          src={atroposForestMid}
          alt=""
          data-atropos-offset={1}
          layout="fill"
        />
        <Image
          src={atroposForestFront}
          alt=""
          data-atropos-offset={2}
          layout="fill"
        />
        <div className="parallax-highlight"></div>

        <span className="atropos-shadow"></span>
        <div className={styles.start}>START</div>
        <Image src={card} alt="" data-atropos-offset={10} layout="fill" />
      </Atropos>
    </section>
  );
}
