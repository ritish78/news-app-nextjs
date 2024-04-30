"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();

    return <Link href={href} className={path.startsWith(href) ? "text-blue-600 underline" : ""}>{children}</Link>
}