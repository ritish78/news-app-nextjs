import Link from "next/link";
import { newsList } from "../../../../seed-news";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Params {
    slug: string;
}

interface IndividualNewsPageProps {
    params: Params;
}

export default function IndividualNewsPage({ params } : IndividualNewsPageProps) {
    const currentNews = newsList.find(news => news.slug === params.slug);

    if (!currentNews) {
        return notFound();
    }

    return (
        <main className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">
                <div className="relative h-64 w-full mb-6">
                    <Image src={`/images/${currentNews.image}`} alt={currentNews.title} fill objectFit="cover" />
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-300">{currentNews.title}</h2>
                <time className="text-sm text-gray-400" dateTime={currentNews.date}>{currentNews.date}</time>
            </div>
            <div className="mt-4 px-8 text-gray-300">
                <p>{currentNews.content}</p>
            </div>
        </main>
    )
}