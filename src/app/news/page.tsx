import Link from "next/link"
import { newsList } from "../../../seed-news"
import Image from "next/image"

export default function NewsListPage() {
    return (
        <main>
            <h2>Latest News:</h2>
            <div>
                <ol className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {newsList.map(news => <li key={news.id}>
                        <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
                            <Link href={`/news/${news.slug}`}>
                                <div className="w-64 h-64 relative">
                                    <Image src={`/images/${news.image}`} alt={news.title} fill objectFit="cover" />
                                </div>
                                <span className="mt-2 text-center sm:text-left w-64 sm:w-auto overflow-hidden overflow-ellipsis">
                                    {news.title}
                                </span>
                            </Link>
                        </div>
                    </li>)}
                </ol>
            </div>
        </main>
    )
}