"use client";

import { useRouter } from "next/navigation";

export default function ImageBackdrop() {
    const router = useRouter();

    return (<div onClick={router.back} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 w-full"></div>);
}