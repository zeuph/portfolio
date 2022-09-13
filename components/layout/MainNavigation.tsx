import Link from "next/link";
import classes from "./MainNavigation.module.css";

export function MainNavigation() {
  return (
    <div className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Kimmie Arvidsson</div>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
