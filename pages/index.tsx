import classes from "../components/layout/Home.module.css";

export default function Home() {
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
      <div className={classes.work + " " + classes.workleft}>
        <h1 className={classes.workheader}>Work 1 </h1>
        <img src="https://source.unsplash.com/random/300x300/?design" alt="" />
        <p className={classes.worktext}>
          Consequat exercitation laboris est adipisicing cillum nisi est tempor
          incididunt consectetur duis. Laboris nisi adipisicing officia aliquip
          nisi tempor officia. Anim culpa ex consequat est. Eu ea anim sunt
          proident esse id deserunt do Lorem velit non velit labore deserunt.
          Est excepteur ut dolore tempor sunt non sit officia deserunt labore
          velit. In aliqua exercitation veniam mollit duis magna id
          reprehenderit.
        </p>
        <div className={classes.learnmore}>Learn more here!</div>
      </div>
      <div className={classes.work + " " + classes.workright}>
        <h1 className={classes.workheader}>Work 2 </h1>
        <img src="https://source.unsplash.com/random/300x300/?design" alt="" />
        <p className={classes.worktext}>
          Consequat exercitation laboris est adipisicing cillum nisi est tempor
          incididunt consectetur duis. Laboris nisi adipisicing officia aliquip
          nisi tempor officia. Anim culpa ex consequat est. Eu ea anim sunt
          proident esse id deserunt do Lorem velit non velit labore deserunt.
          Est excepteur ut dolore tempor sunt non sit officia deserunt labore
          velit. In aliqua exercitation veniam mollit duis magna id
          reprehenderit.
        </p>
        <div className={classes.learnmore}>Learn more here!</div>
      </div>
    </>
  );
}
