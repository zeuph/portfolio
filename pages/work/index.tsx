import Work from "../../components/content/Work";
import classes from "../../components/styles/WorkIndex.module.css";

export default function WorkIndex() {
  const header = "Sunny Hills";
  const img = "https://source.unsplash.com/random/1920x1080/?design";
  const url = "/";
  const text =
    "Incididunt commodo deserunt excepteur do duis est. Amet adipisicing amet nulla ut anim ut laborum nulla pariatur. Incididunt reprehenderit occaecat aliquip incididunt nostrud magna cupidatat non fugiat. Dolor voluptate ut non nisi proident nisi magna pariatur. Eu laboris anim eiusmod laboris deserunt labore aliqua. Sit aliquip laborum et amet enim ipsum. Incididunt consectetur aliquip esse pariatur eiusmod excepteur cupidatat veniam duis veniam veniam aliqua.";
  return (
    <>
      <div className={classes.main}>
        <div className={classes.container}>
          <h1>All work</h1>
          <Work
            header={header}
            img={img}
            url={url}
            text={text}
            imgRightSide={false}
          />
        </div>
      </div>
    </>
  );
}
