import Link from "next/link";
import NavLink from "./NavLink";

export default function MainHeader() {

    return (
        <>
            <header className="flex justify-between items-center p-8">
                <Link href="/">News App</Link>
                <nav>
                    <ul className="list-none m-0 p-0 flex gap-6 text-lg">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <NavLink href="/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink href="/archive">Archive</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}