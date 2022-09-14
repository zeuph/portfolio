import Link from "next/link";
import classes from "./Work.module.css";

export default function Work({ header, img, text, url, imgRightSide }) {
  const sideOfParagraphToRenderPicture =
    imgRightSide == true ? classes.workright : "";
  return (
    <div className={classes.work}>
      <h1 className={classes.work__header}>{header}</h1>
      <img className={sideOfParagraphToRenderPicture} src={img} alt="" />
      <p className={classes.work__text}>{text}</p>
      <div className={classes.work__learnmore}>
        <Link href={url}> Learn more here!</Link>
      </div>
    </div>
  );
}
