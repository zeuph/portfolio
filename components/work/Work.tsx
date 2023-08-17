import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/work/Work.module.css";

interface param {
  header: string;
  img: any;
  text: string;
  url: string;
  imgRightSide: boolean;
}
export default function Work(props: param) {

  return (
    <div className={classes.work}>
      <div className={classes.work__imgcontainer} >
        <Image alt="" src={props.img} sizes="100vw" style={{ height: "auto", width: "100%", objectFit: 'contain'}} />
        <h1 className={classes.work__header}>{props.header}</h1>
        <p className={classes.work__text}>{props.text}</p>
      </div>
    </div>
  );
}
