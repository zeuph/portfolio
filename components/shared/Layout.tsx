import classes from "../../styles/shared/Layout.module.css";
import { MainNavigation } from "./MainNavigation";

//<MainNavigation />
export function Layout(props: any) {
  return (
    <div className={classes.main}>
      <main className={classes.container}>{props.children}</main>
    </div>
  );
}
