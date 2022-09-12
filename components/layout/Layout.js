import { MainNavigation } from './MainNavigation';

export function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className="w-full">{props.children}</main>
        </div>
    )
}