import { getNewsBySlug } from "@/lib/news-year";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
    slug: string;
}

interface ImagePageProps {
    params: Params;
}

export default function ImagePage({ params }: ImagePageProps) {
    const newsSlug = params.slug;

    const newsBySlug = getNewsBySlug(newsSlug);

    if (!newsBySlug) {
        return notFound();
    }

    return (
        <div className="flex justify-center">
            <Image src={`/images/${newsBySlug.image}`} alt={newsBySlug.title} width={600} height={900} />
        </div>
    )
}