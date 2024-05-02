import ImageBackdrop from "@/components/ImageBackdrop";
import Image from "next/image";

interface Params {
    slug: string;
}

interface ImagePageProps {
    params: Params;
}

export default async function InterceptedImagePage({ params }: ImagePageProps) {
    const newsSlug = params.slug;

    const response = await fetch(`http://localhost:5000/api/news/slug/${newsSlug}`);

    const newsBySlug = await response.json();

    return (
        <>
            <ImageBackdrop />
            <dialog open className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex justify-center">
                    <Image src={`/images/${newsBySlug.image}`} alt={newsBySlug.title} width={900} height={600} />
                </div>
            </dialog>
        </>

    )
}