import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
    slug: string;
}

interface ImagePageProps {
    params: Params;
}

export default async function ImagePage({ params }: ImagePageProps) {
    const newsSlug = params.slug;

    const response = await fetch(`http://localhost:5000/api/news/slug/${newsSlug}`);

    const newsBySlug = await response.json();

    if (!newsBySlug) {
        return notFound();
    }

    return (
        <div className="flex justify-center">
            <Image src={`/images/${newsBySlug.image}`} alt={newsBySlug.title} width={600} height={900} />
        </div>
    )
}