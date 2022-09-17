import Image from "next/image";
import Link from "next/link";
import classes from "./Work.module.css";

export default function Work({
  header,
  img,
  text,
  url,
  imgRightSide,
}: {
  header: string;
  img: any;
  text: string;
  url: string;
  imgRightSide: boolean;
}) {
  const sideOfParagraphToRenderPicture =
    imgRightSide == true ? classes.workright : "";
  return (
    <div className={classes.work}>
      <h1 className={classes.work__header}>{header}</h1>
      <div
        className={`${classes.work__imgcontainer} ${sideOfParagraphToRenderPicture}`}
      >
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
      <p className={classes.work__text}>{text}</p>
      <div className={classes.work__learnmore}>
        <Link href={url}> Open project</Link>
      </div>
    </div>
  );
}
