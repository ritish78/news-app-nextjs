"use client";

import { getNewsBySlug } from "@/lib/news-year";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

interface Params {
    slug: string;
}

interface ImagePageProps {
    params: Params;
}

export default function InterceptedImagePage({ params }: ImagePageProps) {
    const router = useRouter();

    const newsSlug = params.slug;

    const newsBySlug = getNewsBySlug(newsSlug);

    if (!newsBySlug) {
        return notFound();
    }

    return (
        <div onClick={router.back} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 w-full">
            <dialog open className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex justify-center">
                    <Image src={`/images/${newsBySlug.image}`} alt={newsBySlug.title} width={900} height={600} />
                </div>
            </dialog>
        </div>

    )
}