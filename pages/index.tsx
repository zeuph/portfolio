import Work from "../components/content/Work";
import classes from "../components/layout/Home.module.css";

export default function Home() {
  const header = "Sunny Hills";
  const img = "https://source.unsplash.com/random/300x300/?design";
  const url = "/";
  const text =
    "Incididunt commodo deserunt excepteur do duis est. Amet adipisicing amet nulla ut anim ut laborum nulla pariatur. Incididunt reprehenderit occaecat aliquip incididunt nostrud magna cupidatat non fugiat. Dolor voluptate ut non nisi proident nisi magna pariatur. Eu laboris anim eiusmod laboris deserunt labore aliqua. Sit aliquip laborum et amet enim ipsum. Incididunt consectetur aliquip esse pariatur eiusmod excepteur cupidatat veniam duis veniam veniam aliqua.";
  return (
    <>
      <div className={classes.homemain}>
        <div className={classes.home}>
          <div className={classes.bigname}>Kimmie Arvidsson</div>
          <img
            src="https://source.unsplash.com/random/150x150/?portrait"
            alt=""
          />
        </div>
        <div className={classes.bio}>
          Ipsum nulla et voluptate commodo culpa velit. Nisi officia enim
          incididunt ex sunt. Duis aute proident ipsum enim velit nisi.
          Excepteur dolor excepteur Lorem dolor dolor. Consectetur do ea nisi
          consectetur qui sunt incididunt exercitation. Minim pariatur qui sint
          velit officia minim sint adipisicing sit et nostrud irure officia
          laborum. Ut laborum do et anim veniam eiusmod nisi laboris ipsum
          proident non dolor.
        </div>
      </div>
      <Work
        header={header}
        img={img}
        url={url}
        text={text}
        imgRightSide={true}
      />
      <Work
        header={header}
        img={img}
        url={url}
        text={text}
        imgRightSide={false}
      />
    </>
  );
}
