import classes from "../components/layout/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.bigname}>Kimmie Arvidsson</div>
        <img
          src="https://source.unsplash.com/random/150x150/?portrait"
          alt=""
        />
      </div>
      <div className={classes.bio}>
        Ipsum nulla et voluptate commodo culpa velit. Nisi officia enim
        incididunt ex sunt. Duis aute proident ipsum enim velit nisi. Excepteur
        dolor excepteur Lorem dolor dolor. Consectetur do ea nisi consectetur
        qui sunt incididunt exercitation. Minim pariatur qui sint velit officia
        minim sint adipisicing sit et nostrud irure officia laborum. Ut laborum
        do et anim veniam eiusmod nisi laboris ipsum proident non dolor.
      </div>
    </>
  );
}
