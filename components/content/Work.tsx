import Link from "next/link";
import classes from "./Work.module.css";

export default function Work({ header, img, text, url }) {
  return (
    <>
      {/* https://source.unsplash.com/random/300x300/?design */}
      <div className={classes.work + " " + classes.workright}>
        <h1 className={classes.workheader}>{header}</h1>
        <img src={img} alt="" />
        <p className={classes.worktext}>{text}</p>
        <div className={classes.learnmore}>
          <Link href={url}> Learn more here!</Link>
        </div>
      </div>
    </>
  );
}
