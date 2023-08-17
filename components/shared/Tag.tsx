import classes from "../../styles/shared/Tag.module.css";

interface TagProps {
  text: string[];
}

export default function Tag(props: TagProps) {
  console.log(props.text);

  return (
    <div className={classes.tagBox}>
      {props.text.map((tagText, index) => (
        <div key={index} className={classes.tag}>
          {tagText}
        </div>
      ))}
    </div>
  );
}
