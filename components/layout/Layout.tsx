import classes from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";

export function Layout(props) {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <main className={classes.container}>{props.children}</main>
    </div>
  );
}
