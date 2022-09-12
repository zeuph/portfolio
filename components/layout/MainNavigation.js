import Link from 'next/link';
import classes from './MainNavigation.module.css';

export function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Kimmie Arvidsson</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>

                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}