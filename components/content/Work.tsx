import Image from "next/image";
import Link from "next/link";
import { getWork, getWorks } from "../../fixtures/works";
import classes from "./Work.module.css";

interface param {
  header: string;
  img: any;
  text: string;
  url: string;
  imgRightSide: boolean;
}
export default function Work(props: param) {
  const sideOfParagraphToRenderPicture =
    props.imgRightSide == true ? classes.workright : "";

  console.log(props)

  return (
    <div className={classes.work}>
        <>
          <h1 className={classes.work__header}>{props.header}</h1>
          <div
            className={`${classes.work__imgcontainer}`}
          >
            <Image src={props.img} fill sizes="100vw" />
          </div>
          <p className={classes.work__text}>{props.text}</p>
        </> 
    </div>
  );
}
